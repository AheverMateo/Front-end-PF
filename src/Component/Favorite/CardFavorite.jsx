import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";//para usar el estilo originqal de las card
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CardFav = ({ name, id, price, stock, valoration, characteristics }) => {
    const [isFav, setIsFav] = useState(false);
  
    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.myFavorites);
  
    const handleFavorite = () => {
      isFav
        ? dispatch(removeFav(id))
        : dispatch(
            addFav({name, id, price, stock, valoration, characteristics })
          );
      setIsFav(!isFav);
    };
  
    useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);
  
    return (
      <div className={style.tarjeta}>
        <Link to={`/detail/${id}`}>
          <img src={image} alt="" />
        </Link>
        {
          <button className={style.btnFiltro} onClick={handleFavorite}>
            {isFav ? "❤️" : "♡"}{" "}
          </button>
        }
        <h2>{id}</h2>
        <h2>{price}</h2>
        <h2>{stock}</h2>
        <h2>{valoration}</h2>
        <h2>{name}</h2>
        <br />
      </div>
    );
  };
  
  export default CardFav;// esto se debe convinar con la card original....