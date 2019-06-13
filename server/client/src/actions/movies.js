
export const FETCH_CHAR = "fetch_character";
export const SET_CHARS = "set_characters";
export const CHAR_FETCHED = "char_fetched";
export const ERROR_MESSAGE = "error_message";
export const FETCH_CHARS_BEGIN = "fetch_begin";
export const FETCH_CHARS_FAILURE = "fetch_faulure";
export const DATA_FETCHED = "data_fetched";

function handleResponse(response) {
    // debugger
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        // debugger
        error.response = response;
        throw error;
    }
}

export const fetchBegin = () => ({
    type: FETCH_CHARS_BEGIN
});

export function fetchFailure(error) {
    return {
        type: FETCH_CHARS_FAILURE,
        error
    }
}

export function urlFetched(data) {
    // debugger
    return {
        type: DATA_FETCHED,
        data
    }
}

export function fetchMoreUrl(url) {
    // debugger
    return dispatch => {
        fetch(`/api/data/${encodeURIComponent(url)}`)
            .then(handleResponse)
            .then(data => dispatch(urlFetched(data)))
            .catch(error => dispatch(fetchFailure(error)))
    }
}

export function charFetched(data) {
    // debugger
    return {
        type: CHAR_FETCHED,
        data
    }
}

export function fetchChar(name) {
    // debugger
    return dispatch => {
        // dispatch(fetchBegin());
        fetch(`/api/characters/${name}`)
            .then(handleResponse)
            .then(data => dispatch(charFetched(data)))
            .catch(error => dispatch(fetchFailure(error)))
    }
}

export function setCharacters(characters) {
    return {
        type: SET_CHARS,
        characters
    }
}

export function fetchChars() {
    return dispatch => {
        dispatch(fetchBegin());
        return fetch('/api/characters')
            .then(handleResponse)
            .then(data => dispatch(setCharacters(data)))
            .catch(error => dispatch(fetchFailure(error)))
    }
}
