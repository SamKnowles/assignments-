import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGame, loadGames } from '../Redux/games';
import Game from './Game';
import Form from './Form';

class Games extends Component {
 
    componentDidMount() {
        this.props.loadGames();
    }
    render() {
        let { data } = this.props;
        let gameComponents = data.map((game, i) => {
            console.log(game)
            return <Game key={i + game.title} {...game} index={i} ></Game>
        })
        return (
            <div>
                <Form add submit={this.props.addGame}></Form>
                {gameComponents}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.games
}

export default connect(mapStateToProps, { addGame, loadGames })(Games);
