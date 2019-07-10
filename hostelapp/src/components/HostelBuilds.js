import React from 'react';
import HostelBuild from './HostelBuild';
import myImage1 from '../img/hotel1.jpg';
import myImage2 from '../img/hotel2.jpg';
import myImage3 from '../img/hotel3.jpg';
import myImage4 from '../img/hotel4.jpg';


const hostels = [
    {id: 1,image: myImage1, type: 'hostel1', alt: 'hostel1' ,prices: 400},
    {id: 2,image: myImage2, type: 'hostel2', alt: 'hostel2' ,prices: 600},
    {id: 3,image: myImage3, type: 'hostel3', alt: 'hostel3' ,prices: 800},
    {id: 4,image: myImage4, type: 'hostel4', alt: 'hostel4', prices: 1000}
];

const hostelBuilds = (props) => (
         hostels.map(ctrl => (
        <HostelBuild key={ctrl.id} image={ctrl.image} 
        alt={ctrl.alt} prices={ctrl.prices +'€'} added={ () => props.nightsAdded(ctrl.type)}/>
        ))
);


export default hostelBuilds;