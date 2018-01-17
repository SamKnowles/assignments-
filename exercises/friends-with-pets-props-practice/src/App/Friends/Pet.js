import React from 'react'

function Pet(props) {
    let { name, breed } = props;
    return (
        <div>
            <h3>{name}</h3>
            <h4>{breed}</h4>
        </div>
    )
}

export default Pet
