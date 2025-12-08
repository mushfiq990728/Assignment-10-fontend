import React from 'react';
import { Outlet } from 'react-router-dom'; // Fixed: react-router-dom not react-router
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;