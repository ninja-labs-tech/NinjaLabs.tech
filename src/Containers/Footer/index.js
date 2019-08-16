import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons' 
import './Footer.scss'
library.add([faFacebook, faLinkedin, faGoogle, faGithub])




const Footer = () => (
    <footer>
            <div className="container-footer container ">
                <p className="title-footer">feel free to contact us!</p>
                <ul className="social-links">
                    <li>
                    <FontAwesomeIcon icon={faFacebook} className="icon"/>

                    </li>
                    <li>
                    <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faGoogle} className="icon"/>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </li>
                </ul>

            </div>
        </footer>
);

export default Footer;