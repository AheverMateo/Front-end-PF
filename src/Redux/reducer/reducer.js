import {
  GET_MOVIES,
  GET_DETAIL, GET_NAME,
  GET_MOVIES_BY_GENRE,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../actions/actionsTypes";
const initialState = {
  Allmovies: [],
  Cart : [],
  movieDetail: [],
  filteredMovies: [],
    movies_name: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        Allmovies: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        filteredMovies: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        movies_name: action.payload
      }
    case ADD_TO_CART:
      return {
        ...state,
        Cart: [],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        Cart:[]
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
