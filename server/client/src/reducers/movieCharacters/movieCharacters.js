import {
    SET_CHARS,
    CHAR_FETCHED,
    FETCH_CHARS_FAILURE,
    FETCH_CHARS_BEGIN,
    DATA_FETCHED
} from '../../actions/movies';

// import _ from 'lodash';
const initialState = {
    items: [],
    isLoading: false,
    error: null,
    info: {}
}
export default function( state = initialState, action = {}) {
    switch(action.type) {
        case DATA_FETCHED:
            return {
                ...state,
                info: action.data,
                isLoading: false
            }

        case CHAR_FETCHED:

            const index = state.items.findIndex(item => item.name === action.data.name)

            if(index > -1) {
                return {
                    ...state,
                    info: action.data,
                    isLoading: false,
                    error: null
                }
            } else {
                return {
                    ...state,
                    info: action.data,
                    isLoading: false,
                    error: null
                }
            }
            
        case FETCH_CHARS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case SET_CHARS:
            return {
                ...state,
                items: action.characters,
                isLoading: false,
                error: null
            }

        case FETCH_CHARS_FAILURE:
            return {
                ...state,
                items: [],
                isLoading: false,
                error: action.error
            }
        
        // return { ...state, ...[action.characters]}
        // return _.unionBy(state, action.characters, 'url')

        default:
            return state
    }
}