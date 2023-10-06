import {
  GET_MOVIES,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_DETAIL,
  GET_NAME,
  SET_CURRENT_PAGE,
  SET_FILTER_PARAMETERS,
  FILTER,
  USER_DATA
} from "../actions/actionsTypes";
const initialState = {
  Allmovies: [],
  Cart: [],
  movieDetail: [],
  currentPage: 1,
  itemsPerPage: 12,
  filterParameters: ["Home", null, null],
  filteredMovies: [],
  user: {},
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

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
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
    case ADD_TO_CART:{

      const repeated = [...state.Cart].find(movie => movie.id === action.payload.id)
      return {
        ...state,
        Cart: repeated ?  [...state.Cart] : [...state.Cart, action.payload]
      }
    }
    case REMOVE_FROM_CART: {
      const deleteCart = [...state.Cart].filter(movie => movie.id !== action.payload)
      return {
        ...state,
        Cart: deleteCart
      }
    }   
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
