import axios from 'axios'

const gamesReducer = (games = { data: [], loading: true }, action) => {
    switch (action.type) {
        case "LOAD_GAMES":
            return {
                data: action.games,
                loading: false
            }
        case 'ADD_GAME':
            return {
                ...games,
                data: [...games.data, action.game],
            }
        case 'DELETE_GAME':
            let newGames = [...games.data];
            return {
                ...games,
                data: newGames.filter((game) => {
                    return action.id !== game._id;
                }),
            }
        case "EDIT_GAME":
            let editedGames = [...games];
            return {
                ...games,
                data: editedGames.map((game) => {
                    if (game._id === action.id) {
                        return Object.assign(games, action.games);
                    } else {
                        return games;
                    }
                })
            }
        default:
            return games
    }
}

export function loadGames() {
    return dispatch => {
        axios.get('/games/')
        .then(response => {
            dispatch({
                type: "LOAD_GAMES",
                games: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function addGame(newGame) {
    return dispatch => {
        axios.post('/games/', newGame)
            .then(response => dispatch({ type: "ADD_GAME", game: response.data }))
            .catch(err => console.log(err))
    }
}

export function deleteGame(id) {
    console.log(id)
    return dispatch => {
        axios.delete('/games/' + id)
            .then(response => dispatch({ type: 'DELETE_GAME', id }))
            .catch(err => console.log(err))
    }
}

export function editGame(editgame, id) {
    return dispatch => {
        axios.put('/games/' + id, editgame)
            .then(response => dispatch({ type: "EDIT_GAME", game: response.data }))
            .catch(err => console.log(err))
    }
}
export default gamesReducer;