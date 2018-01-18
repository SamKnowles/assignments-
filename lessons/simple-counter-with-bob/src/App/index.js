import React from 'react';
import { addOne, minusOne, double } from '../redux';
import { connect } from 'react-redux';


function App(props) {
    return (
        <div>
            <button onClick={props.addOne}>Plus</button>
            <h1>{props.count}</h1>
            <button onClick={props.minusOne}>Minus</button>
            <button onClick={props.double}>Double</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state
    }
}

export default connect(mapStateToProps, {addOne, minusOne})(App);
