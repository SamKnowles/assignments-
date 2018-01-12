import React, { Component } from "react";
import "./index.css";

function Body(props) {
    let {parentStyle, title, subtitle, information} = props;
    return (
        <div style={parentStyle}>
            <p>{title}</p>
            <p>{subtitle}</p>
            <p>{information}</p>
        </div>
    )
}

export default Body;