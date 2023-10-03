import {
  GET_MOVIES,
  GET_DETAIL,
  GET_NAME,
  SET_CURRENT_PAGE,
  SET_FILTER_PARAMETERS,
  FILTER,
} from "../actions/actionsTypes";
const initialState = {
  Allmovies: [],
  movieDetail: [],
  byGenre: [],
  genreFilter: [],
  currentPage: 1,
  itemsPerPage: 12,
  homeFilters: [],
  filterParameters: ["Home", null, null],
  filteredMovies: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
