import React from 'react';
import Cta from '../Cta'
import Hero from '../Hero';
import Promo from '../Promo';
import Footer from '../Footer'
import Header from '../Header';
import Services from '../Services';
import './index.scss'




const HomePage = () => (
    <>
        {/* header area */}
        <Header />

        {/* Hero Area */}
        <Hero />

        {/* Services */}
        <Services />

        {/* promo section */}
        <Promo />
        {/* CTA */}
        <Cta />
        {/* footer */}
        <Footer />
    </>
);

export default HomePage;