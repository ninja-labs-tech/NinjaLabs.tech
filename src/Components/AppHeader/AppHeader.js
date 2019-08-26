import React from 'react';

import CustomButton from '../UIElements/CustomButton/CustomButton';

import styles from './AppHeader.module.scss';

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <div className={styles["logo-image"]}>
                    <img src="/shuri.png" alt="logo" />
                </div>

                <div className={styles["logo-text"]}>
                    <h1>Ninja <span style={{ fontWeight: '200' }}>Labs</span></h1>
                </div>
            </div>

            <div className={styles['nav-menu-container']}>
                <nav className={styles["nav-menu"]}>
                    <ul>
                        <li><a href="#"><i className="fa fa-home" />Home</a></li>
                        <li><a href="#"><i className="fa fa-users" />Meet the Team</a></li>
                        <li><a href="#"><i className="fa fa-asterisk" />Services</a></li>
                        <li><a href="#"><i className="fa fa-coffee" />Contact Us</a></li>
                    </ul>
                </nav>
            </div>

            <div className={styles['controllers-container']}>
                <CustomButton type="secondary" action={() => console.log('Action Placeholder')} icon="check">Develop My Project</CustomButton>
                <button className={styles["toggle-nav"]}><i className="fa fa-bars" /></button>
            </div>
        </header>
    );
}

export default AppHeader;