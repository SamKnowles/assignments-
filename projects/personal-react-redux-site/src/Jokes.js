import React, { Component } from 'react';
import { getJoke } from './redux/joke'
import { connect } from 'react-redux'
import './Jokes.css';
import { addJoke } from './jokes';


class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }

        this.handleClick = this.handleClick.bind(this);
        this.questionJoke = this.questionJoke.bind(this);
        this.clickyclick = this.clickyclick.bind(this);

    }

    componentDidMount() {
        this.props.getJoke();
    }

    componentWillReceiveProps() {
        this.setState({
            loading: false
        })
    }

    handleClick(event) {
        event.preventDefault();
        this.props.getJoke();
    }

    clickyclick(joke) {
        this.props.addJoke(joke);
    }

    questionJoke(str) {
        let index = str.indexOf('?');
        if (index >= 0) {
            let question = str.slice(0, index + 1);
            let answer = str.slice(index + 2);
            return [question, answer];
        }
        return [str];
    }

    render() {
        let { loading } = this.state;
        return (
            !loading ?
                <div>
                    <button onClick={this.handleClick}>Click for Jokes</button>
                    <div>
                        <h1>{this.questionJoke(this.props.joke.joke)[0]}</h1>
                        <h2 className='answer'>{this.questionJoke(this.props.joke.joke)[1]}</h2>
                    </div>
                    <button onClick={() => {this.clickyclick(this.props.joke.joke)}}>LOL SAVE THIS</button>
                </div>
                :
                <div>
                    loading
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

export default connect(mapStateToProps, { getJoke, addJoke })(Jokes);