import { GET_MOVIES, GET_DETAIL, GET_NAME } from "../actions/actionsTypes";
const initialState = {
    Allmovies: [],
    details: [],
    movies_name: [],

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
                details: action.payload
            }
        case GET_NAME:
            return {
                ...state,
                movies_name: action.payload
            }
        default:
            return {
                ...state
        }
    }
}

export default rootReducer