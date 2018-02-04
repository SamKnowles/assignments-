import React, { Component } from 'react';
import Bounty from './Bounty';
import Form from '../Form';
import axios from 'axios'


export default class Bounties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: [],
            loading: true
        };
        this.formSubmit = this.formSubmit.bind(this);
        this.bountyDelete = this.bountyDelete.bind(this);
        this.bountyEdit = this.bountyEdit.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8000/bounty')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    bounties: response.data,
                    loading: false
                })
            })
    }

    formSubmit(newBounty) {
        axios.post('http://localhost:8000/bounty', newBounty)
            .then((response) => {
                console.log(response);
                this.setState(prevState => {
                    let { bounties } = prevState;
                    return {
                        bounties: [...bounties, response.data],
                    };
                })

            });

    }

    bountyEdit(updatedBounty, id) {
        let {bounties} = this.state;
        axios.put('http://localhost:8000/bounty/' + id, updatedBounty)
            .then(response => {
                this.setState({
                    bounties: bounties.map((bounty) => {
                        if (bounty._id === id){
                            return response.data;
                        }
                        else {
                            return bounty;
                        } 
                    }),
                    loading: false
                })
            })
    }

    bountyDelete(id) {
        let { bounties } = this.state;
        axios.delete('http://localhost:8000/bounty/' + id)
            .then(response => {
                this.setState({
                    bounties: bounties.filter((bounty, index) => {
                        return bounty._id !== id
                    }),
                    loading: false
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        let { bounties } = this.state;
        return (
            <div className='bounties-wrapper'>
                <Form add submit={this.formSubmit}></Form>
                {bounties.map((bounty, index) => {
                    return <Bounty {...bounty} key={index} bountyDelete={this.bountyDelete} bountyEdit={this.bountyEdit}></Bounty>;
                })}
            </div>
        )
    }
}        