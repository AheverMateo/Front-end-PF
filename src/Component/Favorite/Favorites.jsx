
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { cleanFavs, getFavs, getMovies } from "../../Redux/actions/actions";
import style from "./Favorites.module.css";
import Pagination from "../Pagination/Pagination";
import SideBar from "../SideBar/SideBar";

const Favorites = () => {

  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(getFavs(user.id));
    return dispatch(cleanFavs())
  }, []);
  
  const user = useSelector((state) => state.user);
  const FavoriteMovies = useSelector((state) => state.FavoriteMovies);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  let moviesToDisplay;

  
  if (FavoriteMovies.length > 0) {
    // console.log(filteredMovies);
    moviesToDisplay = FavoriteMovies;
  } else {
    moviesToDisplay = "Add Movies to Favorite"
  }
 

  const paginationSize = Math.ceil(moviesToDisplay.length / 12);

  if (FavoriteMovies.length > 0 && typeof moviesToDisplay !== "string") {
    return (
        <div>
          <h1 className={style.header}>Your Favorites</h1>
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
      <div className={style.nofavorites}><br></br><br></br>
        <h1>You don't have any Favorite Movies yet, use this icon 💖 at the reverse of every movie card to add some!</h1>
      </div>
    );
  }
};

export default Favorites;