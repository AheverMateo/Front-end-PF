import SideBar from "../SideBar/SideBar";
import style from "./Cart.module.css"
import { useSelector } from "react-redux";
import MoviesCart from "../MoviesCart/MoviesCart";

const Cart = () => {
    const stateCart = useSelector((state) => state.Cart )
    
    return (
        <div className={style.divCart}>
            <SideBar />
            <div>

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

                    :   <div>
                            <h3>Resumen de compra</h3>
                            <h4>Movies({stateCart.length})</h4>
                            <h4>Total $45323</h4>
                            <button>Continuar Compra</button>
                        </div>
            }
        
        </div>
    )
}
export default Cart;