
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { getFavs, getMovies } from "../../Redux/actions/actions";
import style from "./Favorites.module.css";
import Pagination from "../Pagination/Pagination";
import SideBar from "../SideBar/SideBar";

const Favorites = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getFavs(user.id));
  }, []);

  const FavoriteMovies = useSelector((state) => state.FavoriteMovies);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  let moviesToDisplay;

  console.log(FavoriteMovies);
  if (FavoriteMovies.length > 0) {
    // console.log(filteredMovies);
    moviesToDisplay = FavoriteMovies;
  } else {
    moviesToDisplay = "Add Movies to Favorite"
  }
 

  const paginationSize = Math.ceil(moviesToDisplay.length / 12);

  if (FavoriteMovies.length > 0) {
    return (
        <div>
          <h1>Your Favorites</h1>
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
        <h2>Don't have Favorites</h2>
      </div>
    );
  }
};

export default Favorites;