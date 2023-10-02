import axios from "axios";
import {
  GET_MOVIES,
  GET_DETAIL,
  GET_MOVIES_BY_GENRE,
  CLEAR_FILTER,
  GET_MOVIES_BY_YEAR,
  GET_MOVIES_BY_LANG,
  SET_CURRENT_PAGE,
  GET_NAME
} from "./actionsTypes";


export const getMovies = () => {
  return async (dispatch) => {
    try {
      const movie = await axios.get("http://localhost:3001/Nonflix/movies");
      const dataMovie = movie.data;
      dispatch({
        type: GET_MOVIES,
        payload: dataMovie,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};


export const getDetailMovie = (id) => {
  return async (dispatch) => {
    try {
      const detail = await axios.get(
        `http://localhost:3001/Nonflix/movies/${id}`
      );
      const dataDetail = detail.data;
      dispatch({
        type: GET_DETAIL,
        payload: dataDetail,
      });
    } catch (error) {}
  };
};
export const getMoviesByGenre = (genre) => {
  return async (dispatch) => {
    try {
      const genreCall = await axios.get(
        `http://localhost:3001/Nonflix/movies/genre?genre=${genre}`
      );
      const moviesFiltered = genreCall.data.Movies;

      dispatch({
        type: GET_MOVIES_BY_GENRE,
        payload: moviesFiltered,
      });
    } catch (error) {}
  };
};
export const filterByYear = (year) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_MOVIES_BY_YEAR,
        payload: year,
      });
    } catch (error) {}
  };
};
export const filterByLang = (lang) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_MOVIES_BY_LANG,
        payload: lang,
      });
    } catch (error) {}
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
export const clearFilter = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLEAR_FILTER,
      });
    } catch (error) {}
  };
};
