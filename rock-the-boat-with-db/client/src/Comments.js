import React, { Component } from 'react'

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    handleChange = (e) => {
        let {value} = e.target;
        this.setState = ({
            comment: value
        });
    }
    clearInput = () => {
        this.setState({
            comment: ''
        });
    }
    submitComment = (e) => {
        e.preventDefault();
        let {currentIssue} = this.props;
        let {comment} = this.state;
        currentIssue.comments.push(comment);
        this.props.issuseEdit(currentIssue);
        this.clearInput();
    }
    deleteComment = (comment) => {
        let {currentIssue} = this.props;
        for(let i = 0; i < currentIssue.comments.length; i++) {
            if (currentIssue.comments[i] === comment) {
                currentIssue.comments.splice(i, 1);
                break;
            }
        }
        this.props.issuseEdit(currentIssue);
    }
    render() {
        return (
            <div>
                <div>
                    {this.props.currentIssue.comments.map((comment, index) => {
                        return (
                            <div className='single-comment' key={index}>
                                <div className='comment-text'>{comment}</div>
                                <button className='delete-comment' onclick={() => {this.deleteComment(comment)}}>X</button>
                            </div>
                        );
                    })}
                </div>
                <form className='comment-form' onSubmit={this.submitComment}>
                    <textarea className='coment-box' onChange={this.handleChange} type='text' value={this.state.comment} placeholder='Please leave a comment' ></textarea>
                    <button className='post-comment'>POST</button>
                </form>
            </div>
        )
    }
}
