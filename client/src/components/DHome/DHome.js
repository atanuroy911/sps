import React from 'react';
import DashboardCard01 from '../DashboardCards/DashboardCard01';
import DashboardCard02 from '../DashboardCards/DashboardCard02';
import DashboardCard03 from '../DashboardCards/DashboardCard03';

const DHome = () => {
    return (
        <>
            <div className="grid grid-cols-3 grid-flow-col-dense gap-2">
                {/* Line chart (Parking Lot 1) */}
                <DashboardCard01 />
                {/* Line chart (Parking Lot 2) */}
                <DashboardCard02 />
                {/* Line chart (Parking Lot 3) */}
                <DashboardCard03 />


            </div>
            {/* <div className='grid grid-cols-2 grid-flow-col-dense gap-2 mt-4'>
                <DashboardCard04 />

                <DashboardCard05 />
            </div> */}
        </>
    );
};

export default DHome;