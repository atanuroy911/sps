import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12'>
                <Sidebar></Sidebar>
                <Dashboard></Dashboard>
            </div>
            
        </div>
    );
};

export default Home;