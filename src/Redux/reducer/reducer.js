import { CLEAR_USER_DATA, GET_FAVS, REMOVE_FAV } from '../actions/actionsTypes';
import {
  GET_MOVIES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DETAIL,
  GET_NAME,
  SET_CURRENT_PAGE,
  SET_FILTER_PARAMETERS,
  FILTER,
  RESET_CART,
  USER_DATA,
  GET_GENRES,
  CLEAN_DETAIL,
  CLEAN_FAVS,
  DISABLE_ENABLE,
  GET_PURCHASED_MOVIES
} from '../actions/actionsTypes';

const initialState = {
  Allmovies: [],
  Cart: [],
  movieDetail: [],
  currentPage: 1,
  itemsPerPage: 12,
  filterParameters: ["Home", null, null],
  filteredMovies: [],
  user: {},
  genres: [],
  FavoriteMovies: [],
  shoppingHistory: []
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
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        movieDetail: {}
      }
    case GET_NAME:
      return {
        ...state,
        filteredMovies: action.payload,
      };
    case SET_FILTER_PARAMETERS:
      return {
        ...state,
        filterParameters: action.payload,
      };

    case FILTER: {
      return {
        ...state,
        filteredMovies: action.payload,
      };
    }
    case USER_DATA: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case CLEAR_USER_DATA: {
      return {
        ...state,
        user: {},
        filteredMovies: [],
        filterParameters: ['Home', null, null]
      }
    }
    case ADD_TO_CART: {
      action.payload.price = 5.00
      const repeated = [...state.Cart].find(movie => movie.id === action.payload.id)
      return {
        ...state,
        Cart: repeated ? [...state.Cart] : [...state.Cart, action.payload]
      }
    }
    case REMOVE_FROM_CART: {
      const deleteCart = [...state.Cart].filter(movie => movie.id !== action.payload)
      return {
        ...state,
        Cart: deleteCart
      }
    }
    case RESET_CART:
      return {
        ...state,
        Cart: []
      }
    case GET_FAVS:
      return {
        ...state,
        FavoriteMovies: action.payload,
      }
    case REMOVE_FAV:
      return {
        ...state,
        FavoriteMovies: action.payload
      }
    case CLEAN_FAVS:
      return {
        ...state, FavoriteMovies: []
      }
    case DISABLE_ENABLE:{

      const movies = [...state.Allmovies]
      for (const movie of movies) {
        if (movie.id === action.payload) {
          movie.disabled = !movie.disabled
        }
      }
      return {
        ...state,
        Allmovies: movies
      }
    }
    case GET_PURCHASED_MOVIES:
      return {
        ...state,
        shoppingHistory: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
