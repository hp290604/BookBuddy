import React from 'react';
import './feature.css';
import bgn from './bgn.png';
import jpr from './jpr.png';
import mbm from './mumbai.png';

export default function Feature(){

    return(
        <>
        <div className="features">
            <div className="featureItem">
                <img src={bgn} alt="1"/>
                <div className="featureTitle">
                    <h1>Bengaluru</h1>
                    <h3>324 properties</h3>
                </div>
            </div>
            <div className="featureItem">
                <img src={mbm} alt="2"/>
                <div className="featureTitle">
                    <h1>Mumbai</h1>
                    <h3>376 properties</h3>
                </div>
            </div>
            <div className="featureItem">
                <img src={jpr} alt="3"/>
                <div className="featureTitle">
                    <h1>Jaipur</h1>
                    <h3>254 properties</h3>
                </div>
            </div>
        </div>

        </>
    );
}
