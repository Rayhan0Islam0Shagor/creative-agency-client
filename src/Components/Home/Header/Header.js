import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import ServiceInfo from '../ServicePartner/ServicePartner';

const Header = () => {
    return (
        <section className="container">
            <Navbar />
            <HeaderMain />
        </section>
    );
};

export default Header;