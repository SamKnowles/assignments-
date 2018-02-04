import React, { Component } from 'react'
import axios from 'axios';
import Issue from './Issue';
import Form from './Form';


export default class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            loading: true
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.issueDelete = this.issueDelete.bind(this);
        this.issueEdit = this.issueEdit.bind(this);
    }
    componentDidMount() {
        axios.get('/issue/')
            .then((response) => {
                this.setState({
                    issues: (response.data),
                    loading: false
                })
            })
    }
    formSubmit(newIssue) {
        axios.post('/issue/', newIssue)
            .then((response) => {
                console.log(response);
                this.setState(prevState => {
                    let { issues } = prevState;
                    return {
                        issues: [...issues, response.data],
                    };
                })
            });
    }
    issueDelete(id) {
        let { issues } = this.state;
        axios.delete('/issue/' + id)
            .then(response => {
                this.setState({
                    issues: issues.filter((issue, index) => {
                        return issue._id !== id
                    }),
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
    issueEdit(updatedIssue, id) {
        let {issues} = this.state;
        axios.put('/issue/' + id, updatedIssue)
        .then(response => {
            this.setState({
                issues: issues.map((issue) => {
                    if (issue._id === id){
                        return response.data;
                    }
                    else {
                        return issue;
                    }
                }),
                loading: false
            })
        })
    }
    render() {
        let { issues } = this.state;
        return (
            <div>
                <Form add submit={this.formSubmit}></Form>
                {issues.map((issue, index) => {
                    return <Issue {...issue} key={index} issueDelete={this.issueDelete} issueEdit={this.issueEdit}></Issue>
                })}
            </div>
        )
    }
}
