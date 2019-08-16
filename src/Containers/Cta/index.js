import React from 'react';
import Button from '../../Components/Buttons/Buttons'
import './Cta.scss'




const Cta = () => (
    <section className="cta">
      <div className="container container-cta">
      {/* <p className="text-large">You made it to the bottom and you still aren’t sure?</p> */}
      <h1 className="title-large">we deliver the elegant</h1>
      <Button buttonClass="btn btn-secondary-2" text="check our projects" />

      </div>
  </section>
);

export default Cta;