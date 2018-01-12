import React, { Component } from 'react';
import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
import "./index.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <Nav></Nav>
            <Section></Section>
            <Footer></Footer>
        </div>
    );
}

export default App;