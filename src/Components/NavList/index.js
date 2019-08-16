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
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <div className="nav-toggle" onClick={() => setNavState(!isOpen)}>
            <div className={`hamburger ${navState}`} ></div>
        </div>
    </>

);}

export default NavList;