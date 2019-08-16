import React, {useState} from 'react';
import './NavList.scss'




const NavList = () => {
    const [isOpen, setNavState] = useState(false);
    const navState = isOpen ? 'is-open' : ''

    return(
    <>
        <nav className={`main-nav ${navState}`}>
            <ul className="unstyled-list">
                <li>
                    <a href="#1">Home</a>
                </li>
                <li>
                    <a href="#1">About</a>
                </li>
                <li>
                    <a href="#1">Blog</a>
                </li>
                <li>
                    <a href="#1">Services</a>
                </li>
                <li>
                    <a href="#1">Contact</a>
                </li>
            </ul>
        </nav>
        <div className="nav-toggle" onClick={() => setNavState(!isOpen)}>
            <div className={`hamburger ${navState}`} ></div>
        </div>
    </>

);}

export default NavList;