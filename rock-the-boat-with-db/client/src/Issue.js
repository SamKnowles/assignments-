import React, { Component } from 'react';
import Form from './Form';


class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            count: 0
        }
       
    }
    toggleDisplay = () => {
        this.setState((prevState) => {
            return {
                isEditing: !this.state.isEditing,
            }
        })
    }
    addOne = () => {
        this.setState((prevState) => {
            return {
                count: this.state.count + 1
            }
        })
    }
    minusOne = () => {
        this.setState((prevState) => {
            return {
                count: this.state.count - 1
            }
        })
    }

    render() {
        let { title, description, issueDelete, _id, issueEdit } = this.props;
        return (
            <div>
                <div>
                    <p>Title: {title}</p>
                    <p>Description: {description}</p>
                    <p>Comment section</p>
                    <div>
                        <button type='button' onClick={this.addOne}>↑</button>
                        <h1>{this.state.count}</h1>
                        <button type='button'onClick={this.minusOne}>↓</button>
                        <button type='button' className='issue-delete-button' onClick={() => { issueDelete(_id) }}>DELETE</button>
                        <button type='button' className='issue-edit-button' onClick={() => { issueEdit(_id); this.toggleDisplay() }}>Edit</button>
                        <div style={{ display: this.state.isEditing ? 'initial' : 'none' }}>
                            <Form submit={issueEdit} id={_id} options={{ toggleDisplay: this.toggleDisplay }}></Form>
                        </div>
                        <input type="text" className='comment-input' placeholder='Leave a comment'/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Issue;