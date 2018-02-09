import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteGame } from '../Redux/games';
import Form from './Form';
import '../Styles/Game.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false
        }
    }

    toggleDisplay = () => {
        this.setState((prevState) => {
            return {
                displayForm: !prevState.displayForm
            }
        })
    }
    render() {
        let { _id, title, description, deleteGame } = this.props;
        let formStyle = { display: this.state.displayForm ? "inherit" : "none" }
        let dataStyle = {display: this.state.displayForm ? "none" : "inherit"}

        return (
            <div className='game-wrapper'>
                <div style={dataStyle}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div style={formStyle}>
                    <Form edit {...this.props} options={{ toggleDisplay: this.toggleDisplay }}></Form>
                </div>
                <button onClick={() => { deleteGame(_id) }}>DELETE</button>
                <button onClick={this.toggleDisplay}>EDIT</button>
            </div>
        )
    }
}

export default connect(null, { deleteGame })(Game);