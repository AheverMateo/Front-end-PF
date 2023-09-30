import axios from "axios";
import { GET_MOVIES, GET_DETAIL } from "./actionsTypes";


export const getMovies = () => {
   
    return async (dispatch) =>{
        try {
            
            const movie = await axios.get("http://localhost:3001/Nonflix/movies")
            const dataMovie = movie.data
            dispatch({
                type: GET_MOVIES,
                payload: dataMovie
            }) 
        } catch (error) {
            console.log(error.response);
        }
    }
}

export const getDetailMovie = () => {
    return async (dispatch) => {
        try {
            const detail = await axios.get("http://localhost:3001/Nonflix/movies/")
            const dataDetail = detail.data
            dispatch({
                type: GET_DETAIL,
                payload: dataDetail
            })
        } catch (error) {
            
        }
    }
}