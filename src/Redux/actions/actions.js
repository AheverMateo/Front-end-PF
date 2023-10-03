import axios from "axios";
import {
  GET_MOVIES,
  GET_DETAIL,
  SET_CURRENT_PAGE,
  GET_NAME,
  FILTER,
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
export const getByName = (parameters) => {
  const name = parameters[0];
  const year = parameters[1];
  const lang = parameters[2];

  return async (dispatch) => {
    try {
      let url = `http://localhost:3001/Nonflix/movies/name?name=${name}`;

      if (year !== undefined && year !== null) {
        url += `&year=${year}`;
      }

      if (lang !== undefined && lang !== null) {
        url += `&lang=${lang}`;
      }
      console.log(url);
      const getMovies = await axios.get(url);
      const response = getMovies.data;
      if (response.length > 0) {
        dispatch({
          type: GET_NAME,
          payload: response,
        });
      } else {
        dispatch({
          type: GET_NAME,
          payload: "No movies found",
        });
      }
    } catch (error) {
      const errorMsg = error.message;
      window.alert(errorMsg);
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
    } catch (error) {console.log(error.message)}
  };
};

export const filterParameters = (parameters) => {
  const origin = parameters[0];
  const year = parameters[1];
  const lang = parameters[2];

  return async (dispatch) => {
    try {
      let url = `http://localhost:3001/Nonflix/movies/filters?origin=${origin}`;

      if (year !== undefined && year !== null) {
        url += `&year=${year}`;
      }

      if (lang !== undefined && lang !== null) {
        url += `&lang=${lang}`;
      }
      const getMovies = await axios.get(url);
      const moviesFiltered =
        origin === "Home" ? getMovies.data : getMovies.data.Movies;

      if (moviesFiltered.length > 0) {
        dispatch({
          type: FILTER,
          payload: moviesFiltered,
        });
      } else {
        dispatch({
          type: FILTER,
          payload: "No movies found",
        });
      }
    } catch (error) {
      const errorMsg = error.response.data.message;
      return errorMsg;
    }
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
