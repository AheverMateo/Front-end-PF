import SideBar from "../SideBar/SideBar";
import style from "./Cart.module.css"
import BackButton from "../BackButton/BackButton";
import { useSelector } from "react-redux";
import MoviesCart from "../MoviesCart/MoviesCart";




import axios from "axios"



const Cart = () => {
    
    const user = useSelector((state) => state.user )
    const stateCart = useSelector((state) => state.Cart )
    const total = stateCart.reduce((acc, movie) => acc +  movie.price ,0)

    
    const handleShopping = async () => {
        
        try {
            stateCart.forEach(movie => movie.user = user.id)
            const { data } = await axios.post('/Nonflix/shopping/create-order',{movies:[...stateCart]})
            location.href = data.body.init_point
        } catch (error) {
            console.log(error.message)
        }
        
    }
   
    
    return (
        <div className={style.main}>
            <SideBar />
            <div className={style.divCart}>
                <div className={style.backButtonContainer}>
                    <BackButton/> 
                </div>
                <h1>Your cart</h1>
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
                                        price = {movie.price}
                                    />
                                    
                                )
                            })
                        }
                    </div>
                    {

                        !stateCart.length > 0 
                            ? <h3>Empty car</h3>
                            :   <div className={style.summary}>
                                    <h3>Purchase Summary</h3>
                                    <h4>You have <label>{stateCart.length} </label>movies in your cart</h4>
                                    <h4>Total to pay: <label>${total.toFixed(2)} USD</label></h4>
                                    <button onClick={handleShopping}>Proceed to checkout</button>
                            
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart;