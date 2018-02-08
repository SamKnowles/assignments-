import React, { Component } from "react";
import { connect } from "react-redux";
import { addGame, editGame, deleteGame } from '../Redux/games';

const tags = [];

class Form extends Component {
    constructor(props) {
        super(props);
        let { title, description, tags } = props;
        this.state = {
            inputs: {
                title: title || "",
                description: description || "",
                tags
            },
            displayForm: false,
            checked: false
        }
    }
    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked: e.target.value; 
        let {name} = e.target;
        if (e.target.type !== 'checkbox') {
            this.setState((prevState) => {
                return {
                    inputs: {
                        ...prevState.inputs,
                        [name]: value
                    }
                }
            });
        }   
        else if (e.target.type === 'checkbox' && e.target.checked) {
            tags.push(e.target.value);
            this.setState({checked: value, tags})
        }
        else if (e.target.type === 'checkbox' && !e.target.checked) {
            this.setState({checked: value})
            tags.splice((tags.indexOf(e.target.value)), 1)
        }
        console.log(tags);
        // let { name, value, checked } = e.target;
        // this.setState((prevState) => {
            
        //     let newTags = [...prevState.inputs.tags];
        //     if (checked !== undefined) {
        //         newTags[Number(name)] = checked
        //     }
        //     return {
        //         inputs: {
        //             ...prevState.inputs,
        //             [name]: value,
        //             tags: newTags
        //         }
        //     }
        // });
    }

    clearInputs = () => {
        this.setState({
            inputs: {
                title: "",
                description: "",
                tags: []
            },
            checked: false
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var { editGame, addGame, add, index } = this.props;
        if (add) {
            addGame(this.state.inputs);
            this.clearInputs();
        } else {
            editGame(this.state.inputs, index);
            this.props.options.toggleDisplay();
            this.clearInputs();
        }
    }

    render() {
        console.log('state: ' + this.state.inputs.tags)
        let { title, description } = this.state.inputs;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={title} name="title" type="text" placeholder="Title" />
                    <input onChange={this.handleChange} value={description} name="description" type="text" placeholder="Description" />
                    <div className="input-group">
                        <label>Option One</label>
                        <input name='0' type="checkbox" value='Zero' onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Option Two</label>
                        <input name='1' type="checkbox" value='One' onChange={this.handleChange} />
                    </div>
                    <div className="input-group">
                        <label>Option Three</label>
                        <input name='2' type="checkbox" value='Three' onChange={this.handleChange} />
                    </div>
                    <button className='submit' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addGame, editGame, deleteGame })(Form);

