import React from 'react';
import Pet from "./Pet";

function Friends(props) {
    let { name, age, pets } = props;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            {pets.map((pet, index) => {
               return <Pet {...pet} key={index}></Pet>
            })}
        </div>
    )
}

export default Friends;
