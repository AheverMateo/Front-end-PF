import {
  GET_MOVIES,
  GET_DETAIL,
  GET_NAME,
  GET_MOVIES_BY_GENRE,
  CLEAR_FILTER,
  GET_MOVIES_BY_YEAR,
  SET_CURRENT_PAGE,
  GET_MOVIES_BY_LANG,
} from "../actions/actionsTypes";
const initialState = {
  Allmovies: [],
  movieDetail: [],
  byGenre: [],
  genreFilter: [],
  currentPage: 1,
  itemsPerPage: 12,
  //checkSource: 0,
  homeFilters: [],
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
        byGenre: action.payload,
        genreFilter: action.payload,
      };
    case GET_MOVIES_BY_YEAR:
      let filteredByYear = [];

      if (state.byGenre.length > 0) {
        filteredByYear = state.byGenre.filter((movie) => {
          return movie.year === +action.payload;
        });
        return {
          ...state,
          genreFilter: filteredByYear,
        };
      } else {
        filteredByYear = state.Allmovies.filter((movie) => {
          return movie.year === +action.payload;
        });

        return {
          ...state,
          homeFilters: filteredByYear,
        };
      }
    case GET_MOVIES_BY_LANG:
      let filteredByLang = [];

      if (state.byGenre.length > 0) {
        filteredByLang = state.byGenre.filter((movie) => {
          return movie.language === action.payload;
        });
        return {
          ...state,
          genreFilter: filteredByLang,
        };
      } else {
        filteredByLang = state.Allmovies.filter((movie) => {
          return movie.language === action.payload;
        });

        return {
          ...state,
          homeFilters: filteredByLang,
        };
      }
    case CLEAR_FILTER:
      return {
        ...state,
        genreFilter: [],
        homeFilters: [],
        byGenre: [],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        movies_name: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
