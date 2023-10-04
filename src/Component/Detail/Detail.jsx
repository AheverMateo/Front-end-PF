import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";

import style from "./Detail.module.css";
import { getDetailMovie } from "../../Redux/actions/actions";

const Detail = () => {
  const [movie, setMovie] = useState({});
 
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

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getDetailMovie(id));
  }, [id]);

  return (
    <div className={style.main}>
      
      <div className={style.detail}>
        <div className={style.poster}>
          <img src={selectedMovie.image}></img>
          {/* acá podría haber un render condicional, si ya esta en favorites: opción para sacarlo,
                    si no esta opción para agregarlo */}
          {/* <button onClick={favoriteHandler}>Add to favorites</button> */}
        </div>

        <div className={style.description}>
          <h2 className={style.title}>{selectedMovie.title}</h2>
          <h3>Duration: {selectedMovie.duration} min</h3>
          {/* <p>Rating: 7/10</p> */}
          <p>{selectedMovie.description}</p>
          <p>Price: </p><p>$5.00 USD</p>
          <button onClick={addToCart} type="submit">Add to cart</button>
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
