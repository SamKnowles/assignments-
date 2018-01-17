import React, { Component } from "react";


class SuperHeros extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick () {
        alert(this.props.catchphrase);
    }

    render() {
        let { name, catchphrase, imgUrl } = this.props;
        return (
            <div onClick={this.handleClick}>
                <h1>{name}</h1>
                <h1>{catchphrase}</h1>
                <img src={imgUrl} />
            </div>
        )
    }
}

export default SuperHeros;