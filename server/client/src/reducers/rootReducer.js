import { combineReducers } from 'redux';
import movieCharacters from './movieCharacters/movieCharacters';

export default combineReducers({
    characters: movieCharacters
});