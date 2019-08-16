import React from 'react';
import NavList from '../../Components/NavList'
import './Header.scss'




const Header = () => (
        <header className='main-header'>
            <div className="container grid">
                <div className="logo">
                    <img src='/Ninja-icon.png' alt="Ninjalogo"></img>
                </div>
               <NavList />
            </div>
        </header>

);

export default Header;