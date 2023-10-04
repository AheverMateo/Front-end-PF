import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { getMovies } from "../../Redux/actions/actions";
import style from "./ListCards.module.css";
import Pagination from "../Pagination/Pagination";
import Swal from 'sweetalert2';

const ListCards = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const movies = useSelector((state) => state.Allmovies);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const filteredMovies = useSelector((state) => state.filteredMovies);
  let moviesToDisplay;
  if (filteredMovies === "No movies found") {
    Swal.fire({
      title: 'Oops!',
      text: filteredMovies,
      icon: 'error',
    })
    moviesToDisplay = movies;
  } else {
    moviesToDisplay = filteredMovies.length > 0 ? filteredMovies : movies;
  }

  const paginationSize = Math.ceil(moviesToDisplay.length / 12);

  if (moviesToDisplay.length > 0) {
    return (
      <div>
        <h2></h2>
        <Pagination paginationSize={paginationSize} />
        <div className={style.cards}>
          {moviesToDisplay.map((props, itemIndex) => {
            const lastIndex = itemsPerPage * currentPage - 1;
            const firstIndex = lastIndex - 11;

            if (itemIndex >= firstIndex && itemIndex <= lastIndex) {
              return (
                <Card
                  key={props.id}
                  id={props.id}
                  title={props.title}
                  duration={props.duration}
                  image={props.image}
                  year={props.year}
                  lenguage={props.lenguage}
                  torrent={props.torrent}
                />
              );
            }
          })}
        </div>
        <Pagination paginationSize={paginationSize} />
      </div>
    );
  } else {
    return (
      <div className={style.loading}>
        <h2>Loading...</h2>
      </div>
    );
  }
};

export default ListCards;
