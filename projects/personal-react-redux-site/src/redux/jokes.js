const jokesReducer = (prevJokes = [], action) => {
    switch (action.type) {
        case 'ADD_JOKE':
            return [...prevJokes, action.joke];

        default:
            return prevJokes;
    }
}

export function addJoke(joke) {
    return {
        type: 'ADD_JOKE',
        joke
    }
}

export default jokesReducer;