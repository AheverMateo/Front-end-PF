// import { useDispatch, useSelector } from "react-redux";
// import style from "../Home/Home.module.css";
// import SideBar from "../SideBar/SideBar";
// import Card from "../Card/Card"
// import { addFav, getFavs } from "../../Redux/actions/actions";
// import { useEffect } from "react";

// const Favorites = () => {
//     // const User = useSelector((state) => state.User)
//     const dispatch = useDispatch()
//     const FavoriteMovies = useSelector((state) => state.FavoriteMovies)

//     useEffect(() => {
//         dispatch(getFavs("337de470-63ab-11ee-883e-3d3b83a58fba"))
//     },[dispatch])


//     return(
//         <div>
//         <div className={style.center}>
//         { FavoriteMovies.length? FavoriteMovies.map((FavoriteMovie) =>{
//             return(
//             <Card key={FavoriteMovie.id}
//             id={FavoriteMovie.id}
//             title={FavoriteMovie.title}
//             duration={FavoriteMovie.duration}
//             image={FavoriteMovie.image}
//             year={FavoriteMovie.year}
//             lenguage={FavoriteMovie.lenguage}
//             torrent={FavoriteMovie.torrent}/> )
//         }):<h4>No Hay Favs</h4>
//         }
//         </div>
//             <div className={style.home}>
//       <SideBar />
//         </div>
//         </div>
//     )
// }
// export default Favorites

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