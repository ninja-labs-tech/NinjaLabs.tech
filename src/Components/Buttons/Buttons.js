import React from 'react';
import './Buttons.scss'




const Button = ({ buttonClass, text }) => (
    <a href="#1" className={buttonClass}>{text}</a>

);

export default Button;