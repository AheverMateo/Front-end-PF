import { Link } from "react-router-dom";
import style from "./MoviesCart.module.css"
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/actions/actions";

const MoviesCart = ({title, image, id}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className={style.divMoviesCart}>
            <Link to ={`/Detail/${id}`}>
                <img src={image} alt="image" />
            </Link>
            <Link to ={`/Detail/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p>precio</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MoviesCart;