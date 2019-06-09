import {
    SET_CHARS,
    CHAR_FETCHED
} from '../../actions/movies';

// import _ from 'lodash';

export default function( state = {}, action = {}) {
    switch(action.type) {
        case SET_CHARS:
            // const characters = Object.entries(action.characters).map((name, url) => {
            //     return { name, url }
            // })

            return { ...state, ...[action.characters]}
            // return _.unionBy(state, action.characters, 'url')

        case CHAR_FETCHED:
            return { ...state, [action.data]: action.data }

        default:
            return state
    }
}