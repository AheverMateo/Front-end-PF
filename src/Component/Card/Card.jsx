import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions/actions";

const Card = ({ id, image, year, title }) => {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const FavoriteMovies = useSelector((state) => state.FavoriteMovies)
  const user = useSelector((state) => state.user)
  console.log(user)

  const handleFavorite = () => {
    isFav
      ? dispatch(removeFav(id, user.id))
      : dispatch(addFav(id, user.id));//User.id
    setIsFav(!isFav);
  };

  useEffect(() => {
    if(FavoriteMovies) {
    FavoriteMovies.forEach((fav) => {
       if (fav.id === id) {
        setIsFav(true);
       }
    })};
 }, [FavoriteMovies]);
  return (
      <div className={style.flipCard}>
        <div className={style.flipCardInner}>
          <div className={style.cardFront}>
            <img src={image} alt={title} />
          </div>
          <div className={style.cardBack}>
          {isFav ? (
            <button onClick={handleFavorite}>💖</button>
          ) : (
            <button onClick={handleFavorite}>🖤</button>
          )}
            <h2>{title}</h2>
            <p>{year}</p>
            <Link to={`/Detail/${id}`}>
            <button type="submit">View more</button>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Card;

