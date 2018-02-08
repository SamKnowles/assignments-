import React, { Component } from "react";
import { connect } from "react-redux";
import { addGame, editGame, deleteGame  } from '../Redux/games';

class Form extends Component {
    constructor(props) {
        super(props);
        let { title, description } = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || "",
            },
            displayForm: false
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    clearInputs = () => {
        this.setState({
            inputs: {
                title: "",
                description: ""
            }
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        var { editGame, addGame, add, index } = this.props;
        if (add) {
            addGame(this.state.inputs);
        } else {
            editGame(this.state.inputs, index);
            this.props.options.toggleDisplay();
        }
        if (this.props.clear) {
            this.clearInputs();
        }
    }
    render() {
        let { title, description } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="Description" />
                <button className='submit' type='submit'>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addGame, editGame, deleteGame })(Form);