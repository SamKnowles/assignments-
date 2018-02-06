import React from 'react';
import {connect} from 'react-redux';


function Game(props) {
    let {index, title, description} = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default Game