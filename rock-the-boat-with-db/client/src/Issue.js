import React, {Component} from 'react';
import Form from './Form';


export default class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((prevState) => {
            return {
                isEditing: !this.state.isEditing
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
                        <button className='upVote-button'>↑</button>
                        <button className='downVote-button'>↓</button>
                        <button type='button' className='issue-delete-button' onClick={() => { issueDelete(_id) }}>DELETE</button>
                        <button type='button' className='issue-delete-button' onClick={() => {issueEdit(_id); this.toggleDisplay() }}>Edit</button>
                        <div style={{display: this.state.isEditing ? 'initial' : 'none'}}>
                            <Form submit={issueEdit} id={_id} options={{toggleDisplay: this.toggleDisplay}}></Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
