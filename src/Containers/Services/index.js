import React from 'react';
import './Services.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faDesktop, faDatabase } from '@fortawesome/free-solid-svg-icons'




const Services = () => (
    <section className="services">
        <div className="container grid services-grid">
            <h1 className="col col-full services-header">Our Services</h1>
            <div className="service col col-1-3">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faDesktop} className="icon" />
                </div>
                <h2>Elegant Design</h2>
                <p>dfsa asdfasdf loreagm asdfaj jklasdjfu cxlkkawe asdk; wejkljklasdf fcioer sdkfa weior ds,fk;laa jasdfjklwejl,cv</p>
            </div>
            <div className="service col col-1-3">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faMobileAlt} className="icon" />
                </div>
                <h2>Robust Functionality</h2>
                <p>dfsa asdfasdf loreagm asdfaj jklasdjfu cxlkkawe asdk; wejkljklasdf fcioer sdkfa weior ds,fk;laa jasdfjklwejl,cv </p>
            </div>
            <div className="service col col-1-3">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faDatabase} className="icon" />
                </div>
                <h2>Easy To Use</h2>
                <p>dfsa asdfasdf loreagm asdfaj jklasdjfu cxlkkawe asdk; wejkljklasdf fcioer sdkfa weior ds,fk;laa jasdfjklwejl,cv</p>
            </div>

        </div>

    </section>

);

export default Services;