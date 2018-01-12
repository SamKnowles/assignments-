import React from "react";

function SuperHeros(props) {
    let { name, catchphrase, imgUrl } = props;
    return (
        <div>
           <h1>{name}</h1>
           <h1>{catchphrase}</h1>
           <h1>{imgUrl}</h1>
        </div>
    )
}

export default SuperHeros;