import React from 'react';

import AppHeader from '../AppHeader/AppHeader';

import styles from './BannerSection.module.scss';

const BannerSection = () => {
    return (
        <section className={styles['banner-section-container']}>
            <AppHeader />
        </section>
    );
}

export default BannerSection;