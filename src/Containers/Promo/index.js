import React from 'react';
import Button from '../../Components/Buttons/Buttons'
import './Promo.scss'




const Promo = () => (
    <section className="promo">
                <div className="title-box">
                    <h1>We're here to make your life easier</h1>
                    {/* <p>Oh yes we do</p> */}
                </div>
            <div className="grid">

                <div className="col col-1-2 bg-primary">
                    <h1>Doing great things for you</h1>
                    <h2>Phasellus henrerit psoeuere</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit posuere finibus. Phasellus nibh lorem, cursus eu justo in, bibendum rutrum diam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur. Phasellus hendrerit posuere finibus. Phasellus nibh lorem, cursus eu justo in, bibendum rutrum diam. </p>
                    <Button buttonClass="btn btn-primary" text="meet our team"/>

              </div>
            <div className="col col-1-2 img-box lg-screen">

            </div>

            </div>

        </section>
);

export default Promo;