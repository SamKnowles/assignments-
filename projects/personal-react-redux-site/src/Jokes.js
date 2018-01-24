import React, { Component } from 'react';
import { getJoke } from './redux/joke'
import { connect } from 'react-redux'


class Jokes extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getJoke();
    }

    handleClick(event) {
        this.props.getJoke();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click for Jokes</button>
                <h1>{this.props.joke.joke}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jokes: state.jokes,
        joke: state.joke
    }
}

export default connect(mapStateToProps, { getJoke })(Jokes);