import React, { Component } from 'react';
import { getJoke } from './redux/joke'
import { connect } from 'react-redux'
import './Jokes.css';
import { addJoke } from './redux/jokes';
import mintwo from './images/twoMinions.jpg';


class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            showing: false,
            disabled: true
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.questionJoke = this.questionJoke.bind(this);
        // this.clickyclick = this.clickyclick.bind(this);

    }

    componentDidMount() {
        this.props.getJoke();
        this.setState({
            showing: false
        })
    }

    componentWillReceiveProps(nextProps) {
        let { id } = this.props.joke;
        let nextId = nextProps.joke.id;
        if (id !== nextId) {
            this.setState({
                loading: false,
                showing: true,
                disabled: false
            })
        }
    }


    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            disabled: false,
            showing: false,
            loading: false
        });
        this.props.getJoke();
    }

    clickyclick = (joke) => {
        this.props.addJoke(joke);
        let showing = this.state.showing;
        this.setState({
            showing: false,
            disabled: true
        });
    }

    questionJoke = (str) => {
        let index = str.indexOf('?');
        if (index >= 0) {
            let question = str.slice(0, index + 1);
            let answer = str.slice(index + 2);
            return [question, answer];
        }
        return [str];
    }

    render() {
        let { loading, showing } = this.state;
        return (
            !loading ?
                <div className='buttNjokes-wrapper'>
                    <div className='buttons-wrapper'>
                        <button className='jokeButton' onClick={this.handleClick}>Click for Jokes</button>
                        <button className='saveButton' disabled={(this.state.disabled) ? "disabled" : ""} onClick={() => { this.clickyclick(this.props.joke.joke) }}>LOL SAVE THIS</button>
                    </div>
                    <div className='jokeyjoke-wrapper'>
                        <h1 style={{ display: (showing ? 'block' : 'none') }}>{this.questionJoke(this.props.joke.joke)[0]}</h1>
                        <h2 style={{ display: (showing ? 'block' : 'none') }} className='answer'>{this.questionJoke(this.props.joke.joke)[1]}</h2>
                    </div>
                    <div className='hoverAnswer-wrapper' style={{ display: (this.questionJoke(this.props.joke.joke).length > 1 && showing) ? 'block' : 'none' }}>
                        <h3 className='hover-words' >Hover over the box to see the answer!</h3>
                        <img id='pointyMinion' src={mintwo} />
                    </div>

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