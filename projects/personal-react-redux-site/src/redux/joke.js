import axios from 'axios';


const jokeReducer = (joke = {}, action) => {
    switch (action.type) {
        case 'GET_JOKE':
            return action.joke
        default:
            return joke;
    }
}

export function getJoke() {
    return function (dispatch){
        axios.get(`https://icanhazdadjoke.com/`, { headers: { Accept: "application/json" } })
        .then(response => {
            dispatch({
                type: 'GET_JOKE',
                joke: response.data
            })
        })
        .catch(err => {
            console.error(err);
        })
    }
}

export default jokeReducer;