import {
    LOGOUT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST
} from "./loginTypes"

const initialState = {
    loading: false,
    loggedIn: false,
    user: {},
    error:''
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: {}
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                loggedIn: true,
                error: ''
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                loggedIn: false,
                error: action.payload
            }

        default: return state
    }
}

export default loginReducer