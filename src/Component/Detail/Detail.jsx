import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import style from "./Detail.module.css";
import { getDetailMovie, cleanDetail } from "../../Redux/actions/actions";
import { addToCart } from "../../Redux/actions/actions";
import axios from "axios";
import Swal from "sweetalert2";

const Detail = () => {
  const [movie, setMovie] = useState({});

  const [reviews, setReviews] = useState([
    {title: "Great Movie",
    description:<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit, voluptate ullam modi tempora libero magnam culpa. Incidunt harum hic reiciendis. Possimus, enim fugiat iusto architecto dolores ratione cumque nemo.</p>,
    rating: 9
    },
    {title: "Bad Movie",
    description: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore dolorum, adipisci quasi ipsa natus laudantium itaque non incidunt. Accusantium consequatur optio animi quos quaerat placeat nostrum esse deserunt enim.</p>,
    rating: 3
    }
  ]);

  const [newReview, setNewReview] = useState({
    title: "",
    description: "",
    rating: ""
  });
 
  const [addedToCart, setAddedToCart] = useState(false);
  const handleAddCart = () => {
    setAddedToCart(true);
    dispatch(addToCart(selectedMovie))
    //agregar a carrito de compras
  };

  const favoriteHandler = () => {
    //agregar a Db
  };

  const handleChange = (e) => {
    setMovie({...movie, [e.target.name]: e.target.value});
  };

  const addReview = async() => {
    if(Object.values(newReview).some((value)=>value==="")){
      return Swal.fire({
        icon: "warning",
        title: "You haven't completed all fields",
        text: "Please complete all 3 fields of the review"
      })
    }
    try {
      await axios.post("", newReview)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message
      });
    }
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movieDetail);
  useEffect(() => {
    dispatch(getDetailMovie(id));

    return ()=> {
      dispatch(cleanDetail())
    }

  }, [id]);

  return (
    <div className={style.main}>
      <SideBar />
      <div>
      <div className={style.detail}>
        <div className={style.poster}>
          <img src={selectedMovie.image}></img>
          {/* acá podría haber un render condicional, si ya esta en favorites: opción para sacarlo,
                    si no esta opción para agregarlo */}
          {/* <button onClick={favoriteHandler}>Add to favorites</button> */}
        </div>

        <div className={style.description}>
          <h2 className={style.title}>{selectedMovie.title}</h2>
          <h3>Duration: <label>{selectedMovie.duration} min</label></h3>
          {/* <p>Rating: 7/10</p> */}
          <p>{selectedMovie.description}</p>
          <p className={style.price}>Price: <label>$5.00 USD</label></p>
          <button onClick={handleAddCart} type="submit">Add to cart</button>
          <p>{addedToCart ? "Movie has been added to your cart" : ""}</p>
        </div>
      </div>
      <div className={style.review}>
          {reviews?<div><h2>Reviews</h2>
            {reviews.map((review)=>(
              <div>
                <h3>{review.title}</h3>
                <p>Rating: {review.rating}/10</p>
                <p>{review.description}</p>
              </div>
            ))}
          </div>:""}
          <br></br>
          <h2 name="review">Share your Review and Rating of this Movie</h2>
          <label name="title">Title of your Review</label><br></br>
          <input name="title" value={newReview.title} onChange={handleChange} type="text"></input><br></br><br></br>
          <label name="description">Description</label><br></br>
          <textarea value={newReview.description} name="description" onChange={handleChange} placeholder="Share your opinion about this movie..."></textarea><br></br><br></br>
          <label>Rating</label><br></br>
          <select name="rating" value={newReview.rating} onChange={handleChange}>
            <option value="">Select a rating</option>
            <option value={1}>1/10</option>
            <option value={2}>2/10</option>
            <option value={3}>3/10</option>
            <option value={4}>4/10</option>
            <option value={5}>5/10</option>
            <option value={6}>6/10</option>
            <option value={7}>7/10</option>
            <option value={8}>8/10</option>
            <option value={9}>9/10</option>
            <option value={10}>10/10</option>
          </select><br></br><br></br>
          <button onClick={addReview}>Send Review</button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
