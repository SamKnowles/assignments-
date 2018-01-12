import React, { Component } from 'react';
import "./index.css";
import pic1 from '../images/scarycroc.jpg';
import pic2 from '../images/dunkleosteus.jpg';
import pic3 from '../images/smilodon.jpg';
import pic4 from '../images/pelagornis.jpg';
import pic5 from '../images/gigantopithecus.jpg';
import pic6 from '../images/andrewsarchus.jpg';
import pic7 from '../images/helicoprion.jpg';
import pic8 from '../images/quetzalcoatlus.png';
import pic9 from '../images/shortfacedbear.jpg';
import pic10 from '../images/titanoboa.jpg';
import pic11 from '../images/cameroceras.jpg';
import pic12 from '../images/carbonemys.jpg';

function Section(props) {
    return (
        <div className="section-wrapper">
            <div className="blue-container">
                <h1>HERE ARE SOME WORDS ABOUT MY BUSINESS</h1>
            </div>
            <div className="sea1">
                <img src={pic1} height="100px" width="auto" />
            </div>
            <div className="sea2">
                <img src={pic2} height="100px" width="auto" />
            </div>
            <div className="sea3">
                <img src={pic3} height="100px" width="auto" />
            </div>
            <div className="sea4">
                <img src={pic4} height="100px" width="auto" />
            </div>
            <div className="sea5">
                <img src={pic5} height="100px" width="auto" />
            </div>
            <div className="sea6">
                <img src={pic6} height="100px" width="auto" />
            </div>
            <div className="sea7">
                <img src={pic7} height="100px" width="auto" />
            </div>
            <div className="sea8">
                <img src={pic8} height="100px" width="auto" />
            </div>
            <div className="sea9">
                <img src={pic9} height="100px" width="auto" />
            </div>
            <div className="sea10">
                <img src={pic10} height="100px" width="auto" />
            </div>
            <div className="sea11">
                <img src={pic11} height="100px" width="auto" />
            </div>
            <div className="sea12">
                <img src={pic12} height="100px" width="auto" />
            </div>
        </div>
    );
}

export default Section;