import { GET_MOVIES, GET_DETAIL } from "../actions/actionsTypes";
const initialState = {
    Allmovies: [],
    movieDetail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                Allmovies: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        default:
            return {
                ...state
        }
    }
}

export default rootReducer