
export const FETCH_CHAR = "fetch_character";
export const SET_CHARS = "set_characters";
export const CHAR_FETCHED = "char_fetched";

function handleResponse(response) {
    if(response.ok) {
        // debugger
        return response.json()
        // return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function charFetched(data) {
    debugger
    return {
        type: CHAR_FETCHED,
        data
    }
}

export function fetchChar(name) {
    debugger
    return dispatch => {
        fetch(`/api/characters/${name}`)
        .then(handleResponse)
        // .then(res => {
        //     debugger
        //     return res.json()
        // })
        // .then(res => res.json())
        // .then(res => JSON.stringify(res))
        // .then(data => console.log(data))
        .then(data => {
            debugger
            return dispatch(charFetched(data))
        })
        
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
        fetch('/api/characters')
        .then(handleResponse)
        .then(data => dispatch(setCharacters(data)))
    }
}


// export function fetchChars() {
//     return dispatch => {
//         fetch('/api/characters')
//         // .then(res => res.json())
//         // .then(handleResponse)
//         .then(res => {
//             // debugger
//             // return res.text()
//             return res
//             // return JSON.stringify(res)
//             // return JSON.parse(res)
//         })
//         .then(data => {
//             // console.log(JSON.parse(data))
//             debugger
//             return dispatch(setMovies(data.characters))
//         })
//     }
// }