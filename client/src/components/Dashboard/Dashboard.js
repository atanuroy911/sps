import React from 'react';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='p-4 col-span-10 m-4'>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;