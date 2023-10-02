import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../Redux/actions/actions";
import style from "./ListCards.module.css";
import Pagination from "../Pagination/Pagination";

const ListCards = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const movies = useSelector((state) => state.Allmovies);
  const genreFilter = useSelector((state) => state.genreFilter);
  const homeFilters = useSelector((state) => state.homeFilters);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);

  let moviesToShow = [];

  if (genreFilter.length > 0) {
    moviesToShow = genreFilter;
  } else {
    if (homeFilters.length > 0) {
      moviesToShow = homeFilters;
    } else {
      moviesToShow = movies;
    }
  }
  // genreFilter.length
  //   ? (moviesToShow = genreFilter)
  //   : (moviesToShow = movies);

  const paginationSize = Math.ceil(moviesToShow.length / 12);

  if (moviesToShow.length > 0) {
    return (
      <div>
        <h2></h2>
        <Pagination paginationSize={paginationSize} />
        <div className={style.cards}>
          {moviesToShow.map((props, itemIndex) => {
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
