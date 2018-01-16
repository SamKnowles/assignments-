import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, editRecipe } from "../Redux/recipes"

class Form extends Component {
    constructor(props) {
        super(props);
        let { name, category, cookTime } = props;
        this.state = {
            inputs: {
                name: name || "",
                category: category || "",
                cookTime: cookTime || ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                category: "",
                cookTime: ""
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let {editRecipe, addRecipe, add, edit, index} = this.props;
            if(add){
                addRecipe(this.state.inputs);
            }
            else {
                editRecipe(this.state.inputs, index);
            }
        // check whether props includes 'edit' or 'add' and call the corresponding action creator
        // call the action creator that adds a recipe
        // we don't know which action creator to use here
        if (this.props.clear) {
            this.clearInputs();
        }

    }
    render() {
        let { name, category, cookTime } =
            this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={name} name="name" type="text" placeholder="Name" />
                <input onChange={this.handleChange} value={category} name="category" type="text" placeholder="Category" />
                <input onChange={this.handleChange} value={cookTime} name="cookTime" type="text" placeholder="Cook Time" />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return { recipes: state.recipes }
}

export default connect(null, { addRecipe, editRecipe }) (Form);