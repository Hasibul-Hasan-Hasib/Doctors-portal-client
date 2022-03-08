import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import BannerInfo from '../BannerInfo/BannerInfo';
import TopHero from '../TopHero/TopHero';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner/>
            <BannerInfo/>
            <Services />
            <TopHero/>
            <AppointmentBanner />
            <Footer/>
        </div>
    );
};

export default Home;