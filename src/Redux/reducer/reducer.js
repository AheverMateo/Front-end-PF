import {
  GET_MOVIES,
  GET_DETAIL,
  GET_MOVIES_BY_GENRE,
} from "../actions/actionsTypes";
const initialState = {
  Allmovies: [],
  movieDetail: [],
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
    case GET_MOVIES_BY_GENRE:
      return {
        ...state,
        filteredMovies: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
