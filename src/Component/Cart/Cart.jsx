import SideBar from "../SideBar/SideBar";
import style from "./Cart.module.css"
import { useSelector } from "react-redux";
import MoviesCart from "../MoviesCart/MoviesCart";

const Cart = () => {
    const stateCart = useSelector((state) => state.Cart )
    
    return (
        <div className={style.main}>
        <SideBar />
        <div className={style.divCart}>
            <h2>Your cart</h2>
            <div className={style.container}>
            <div className={style.movies}>

                {
                    stateCart.map( movie => {
                        return (
                            <MoviesCart
                                key = {movie.id}
                                id = {movie.id}
                                image = {movie.image}
                                title= {movie.title}
                            />
                            
                        )
                    })
                }
            </div>
            {

                !stateCart.length > 0 
                    ? <h3>Empty car</h3>

                    :   <div className={style.summary}>
                            <h3>Summary</h3>
                            <h4>You have <label>{stateCart.length} </label>movies in your cart</h4>
                            <h4>Total: <label>{stateCart.length * 5} USD</label></h4>
                            <button>Proceed to checkout</button>
                        </div>
            }
        </div>
        </div>
        </div>
    )
}
export default Cart;