import React, { Component } from "react";
import { connect } from "react-redux";
import { addGame, editGame, deleteGame } from '../Redux/games';
import '../Styles/Form.css';


class Form extends Component {
    constructor(props) {
        super(props);
        let { title, description, tags } = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || "",
                tags: tags || [false, false, false, false]
            },
            displayForm: false,
        }
    }
    handleChange = (e) => {
        let { value, checked, name, type } = e.target;
        this.setState(prevState => {
            let newTags = [...prevState.inputs.tags];
            if (type === "checkbox") {
                newTags[Number(name)] = checked;
                return {
                    inputs: {
                        ...prevState.inputs,
                        tags: newTags
                    }
                }
            } else {
                return {
                    inputs: {
                        ...prevState.inputs,
                        [name]: value
                    }
                }
            }
        })
    }

    clearInputs = e => {
        this.setState({
            inputs: {
                title: "",
                description: "",
                tags: [false, false, false, false]
            },
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        var { editGame, addGame, add, _id } = this.props;
        if (add) {
            addGame(this.state.inputs);
            this.clearInputs(e);
        } else {
            editGame(this.state.inputs, _id);
            this.props.options.toggleDisplay();
        }
    }

    render() {
        let { title, description, tags } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                    <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="Description" />
                    <div className="input-group">
                        <label>Option One</label>
                        <input name="0" type="checkbox" checked={tags[0]} onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Option Two</label>
                        <input name="1" type="checkbox" checked={tags[1]} onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Option Three</label>
                        <input name="2" type="checkbox" checked={tags[2]} onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Option Four</label>
                        <input name="3" type="checkbox" checked={tags[3]} onChange={this.handleChange} />
                    </div>
                    <button className='submit-button' type='submit'>Submit</button>
                    <button className='filter-button' type='submit'></button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addGame, editGame, deleteGame })(Form);

