import React from 'react';
import {connect} from 'react-redux';

function Games(props) {
    let {games} = props;
    let gameComponents = games.map((game, i) => {
        return <Game key={i + game.name} {...game} index={i} ></Game>
    })
    return (
        <div>
            {gameComponents}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { games: state.games}
}

export default connect(mapStateToProps, {})(Games);