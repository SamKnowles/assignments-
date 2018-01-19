import React from 'react';
import { addOne, minusOne } from '../redux';
import { connect } from 'react-redux';

function App(props) {
    return (
        <div>
            <button onClick={props.addOne}>Plus One</button>
            <h2>{props.count}</h2>
            <button onClick={props.minusOne}>Minus One</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state
    }
}

export default connect(mapStateToProps, { addOne, minusOne })(App);
