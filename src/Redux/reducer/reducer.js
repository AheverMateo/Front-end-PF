import { GET_MOVIES, GET_DETAIL } from "../actions/actionsTypes";
const initialState = {
    Allmovies: [],
    details: [],
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
        default:
            return {
                ...state
        }
    }
}

export default rootReducer