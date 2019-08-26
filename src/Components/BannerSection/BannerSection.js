import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import CustomButton from '../UIElements/CustomButton/CustomButton';

import styles from './BannerSection.module.scss';

const BannerSection = () => {
    return (
        <section className={styles['banner-section-container']}>
            <AppHeader />
            <section className={styles['banner-content']}>
                <div className={styles["ninja-pic"]}>

                </div>

                <div className={styles["ninja-text"]}>
                    <div className={styles["shurikens"]}>
                        <div className={styles["shurikens-link"]}>
                            <h1>Why to pick us?</h1>
                        </div>
                    </div>
                    <p className={styles['ninja-description']}>
                    We jump from technology to another, we play with tools, enhance practices, explore software world exponentially. Simply We will do whatever it takes to hit our targets.
                    </p>
                    <CustomButton type="secondary" action={() => console.log('Action Placeholder')}>Tell Us About Your Idea</CustomButton>
                    <CustomButton type="primary" action={() => console.log('Action Placeholder')} icon="handshake-o">Get in Touch</CustomButton>

                    <div className={styles["brief-features"]}>
                        <div className={styles["single-feature"]}>
                            <h1>UX</h1>
                            <p>UX Perfection</p>
                        </div>

                        <div className={styles["single-feature"]}>
                            <h1>IS</h1>
                            <p>Privacy & Security</p>
                        </div>

                        <div className={styles["single-feature"]}>
                            <h1>CC</h1>
                            <p>Clean Code</p>
                        </div>

                        <div className={styles["single-feature"]}>
                            <h1>PC</h1>
                            <p>Perfect Collaboration</p>
                        </div>
                    </div>
                    {/* <Button buttonClass="btn btn-primary" text="tell us about your idea" /> */}
                </div>
            </section>
        </section>
    );
}

export default BannerSection;