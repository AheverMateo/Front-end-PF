import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, image, year, title }) => {
  return (
    <Link to={`/Detail/${id}`}>
      <div className={style.flipCard}>
        <div className={style.flipCardInner}>
          <div className={style.cardFront}>
            <img src={image} alt={title} />
          </div>
          <div className={style.cardBack}>
            <h2>{title}</h2>
            <p>{year}</p>
            <button type="submit">View more</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
