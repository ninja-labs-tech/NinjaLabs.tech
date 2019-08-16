import React from 'react';
import Button from '../../Components/Buttons/Buttons'
import './Hero.scss'




const Hero = () => (
        <section className="hero">
            <div className="container grid">
                <div className="hero-text col">
                    <h1 className="title-large">
                        <span>Take your development process to the </span>
                        <span>next level</span>
                   </h1>
                    <p className="text-intro">The perfect solutions lay within our hands, just tell us about your idea and let us to the rest. </p>
                <Button buttonClass="btn btn-secondary" text="check our projects"/>
                <Button buttonClass="btn btn-primary" text="tell us about your idea"/>
                </div>

            </div>
            

        </section>

);

export default Hero;