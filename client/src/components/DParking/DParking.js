import React from 'react';
import DParkingCard from './DParkingCard';

const DParking = () => {

    const sampleParking = [
            {
                "parking_id": 1,
                "parking_name": "Parking Lot 1 - Hongqi Dadao",
                "address": "86号红旗大道 章贡区 赣州 江西 341000",
                "img" : "https://carnewschina.com/wp-content/uploads/2012/11/audi-pl-china-1.jpg",
                "parking_number": "P1",
                "slots": "19",
                "ip_address": "242.154.71.186"
            },
            {
                "parking_id": 2,
                "parking_name": "Parking Lot 2 - Hongqi Dadao",
                "address": "86号红旗大道 章贡区 赣州 江西 341000",
                "img" : "https://thumbs.dreamstime.com/b/parking-lot-nanning-china-nov-large-modern-city-transport-gateway-travellers-to-vietnam-140803253.jpg",
                "parking_number": "P2",
                "slots": "17",
                "ip_address": "242.154.71.187"
            },
            {
                "parking_id": 3,
                "parking_name": "Parking Lot 3 - Hongqi Dadao",
                "address": "86号红旗大道 章贡区 赣州 江西 341000",
                "img" : "https://blog.way.com/wp-content/uploads/2021/12/off-site-parking2.jpg",
                "parking_number": "P3",
                "slots": "19",
                "ip_address": "242.154.71.188"
            },
    ]

    return (
        <div className='flex gap-4'>
            {sampleParking.map(item => <DParkingCard key={item.parking_id} data={item}></DParkingCard>)}
        </div>
    );
};

export default DParking;