import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "../SideBar/SideBar";
import style from "./Detail.module.css";
const url = "endpoint detail";

const Detail = () => {
  const [movie, setMovie] = useState({
    //harcodeo, reemplazar por el codigo comentado más abajo
    name: "Matrix",
    duration: 120,
    description:
      "Thomas Anderson lleva una doble vida: por el día es programador en una importante empresa de software, y por la noche un hacker informático llamado Neo. Su vida no volverá a ser igual cuando unos misteriosos personajes le inviten a descubrir la pregunta que no le deja dormir: ¿qué es Matrix?",
    cover:
      "https://http2.mlstatic.com/D_NQ_NP_756444-MLA46741993452_072021-O.webp",
    torrent: "",
  }); //faltaria un rating para las movies en la db?

  const [addedToCart, setAddedToCart] = useState(false);
  const addToCart = () => {
    setAddedToCart(true);
    //agregar a carrito de compras
  };

  const favoriteHandler = () => {
    //agregar a Db
  };

  const addReview = () => {
    //subir a database
  };

  const {idMovie}= useParams();

  useEffect(() => {
      axios(`${url}${idMovie}`).then(({ data }) => {
         if (data.name) {
            setMovie(data);
         } else {
            window.alert('No se encontró esa película');
         }
      });
      return setMovie({});
  }, [idMovie]);

  return (
    <div className={style.main}>
      <SideBar />
      <div className={style.detail}>
        <div className={style.poster}>
          <img src={movie.cover}></img>
          {/* acá podría haber un render condicional, si ya esta en favorites: opción para sacarlo,
                    si no esta opción para agregarlo */}
          <button onClick={favoriteHandler}>Add to favorites</button>
        </div>
        
        <div className={style.description}>
          <h2 className={style.title}>{movie.name}</h2>
          <h3>Duration: {movie.duration} min</h3>
          <p>Rating: 7/10</p>
          <p>{movie.description}</p>
          <button onClick={addToCart}>Add to cart</button>
          <p>{addedToCart ? "Movie has been added to your cart" : ""}</p>
        </div>

        {/* <div className="reviews hiddendiv nr2">
          { reemplazar pepito por un user name, 
                y el review traerlo de la base de datos a un estado local por ej}
          <div>
            <p>Pepito:</p>
            <p>Que buena peli!</p>
            <p>Rating: 7/10</p>
          </div>
          <label name="review">
            Deja una review
            <textarea name="review"></textarea>
            <button onClick={addReview}>Enviar</button>
          </label>
        </div> */}
      </div>
    </div>
  );
};
export default Detail;
