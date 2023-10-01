import axios from "axios";
import { GET_MOVIES, GET_DETAIL, GET_NAME } from "./actionsTypes";

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

export const getDetailMovie = (id) => {
    return async (dispatch) => {
        try {
            const detail = await axios.get(`http://localhost:3001/Nonflix/movies/${id}`)
            const dataDetail = detail.data
            dispatch({
                type: GET_DETAIL,
                payload: dataDetail
            })
        } catch (error) {
            
        }
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const endpoint= await axios.get(`http://localhost:3001/Nonflix/movies/name?name=${name}`) 
            const response = endpoint.data
            dispatch({
                type: GET_NAME,
                payload: response,
            })
        } catch (error) {
            console.log(error);
        }
    }
}