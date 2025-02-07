//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function phase2Construction() {

    window.scrollTo(0, 0)

    // script.js
    document.querySelectorAll('table td a').forEach(link => {
        link.addEventListener('click', event => {
        event.preventDefault();
        const url = event.target.href;
        window.open(url, '_blank');
        });
    });


    return (<>
        <Navbar/>
        <div style={{"display": "flex"}}>
            <p><h1>Phase 2: Construction Administration
                <img src={"Phase2-Construction.jpg"} style={{"marginTop": "1em", "width": "100%", "height": "40vh", "objectFit": "scale-down"}} alt=""></img></h1></p>
        </div>
        <div class="container">
            <div class="left-panel">
            <h1>Construction to Rent-Ready in Record Time</h1>
            <p>At <strong>LOV ADU</strong>, we're dedicated to delivering your ADU quickly and efficiently, so you can start earning rent 
                as soon as possible. No one can develop it faster!</p>
            <p>Our patent-pending construction framing process ensures faster, cost-effective builds with minimal waste, eliminating delays 
                caused by weather and reducing overall construction time. Outfitted with utilities for quicker builds, we deliver high-quality 
                housing, ensuring your property is ready for tenants in record time. With a team of in-house Professional Engineers and 
                Structural Engineers, we guide you through every step of the city’s ADU planning and construction process, ensuring a smooth, 
                hassle-free experience from start to finish.</p>
            <p>Our cutting-edge designs and innovative construction methods accelerate homebuilding, while maintaining exceptional quality. 
                With our dedicated teams from each of the professions, we are committed to making homeownership more accessible, efficient, 
                and affordable than ever!</p>
            </div>
            <div class="right-panel">
                <img src={"Contractor1.png"} style={{"height": "60vh", "width": "60vh", "objectFit": "contain"}} alt=""></img></div>
        </div>
        <div class="container">
            <div class="left-panel">
            <img src={"diy.png"} style={{"height": "50vh", "width": "80vh", "objectFit": "contain"}} alt=""></img></div>
            <div class="right-panel">
            <p>For those who love a hands-on approach, once we complete the full ADU framing, you have the exciting opportunity to take over 
                and bring your vision to life in the final phase, giving you flexibility and control over the final stages of construction.  
                You customize the finishes, select unique interior details, and manage the final build-out yourself. </p> 
            <p>With the structural foundation expertly completed, you can focus on the fun part—turning your ADU into a space that reflects 
                your style and needs. It’s the perfect balance of efficiency and personalization, empowering you to create a home that truly 
                feels like yours!</p>
            <p>Visit our <a href="#/LibraryPlan">Design Library </a> for free plans.
                LOV ADU can help you move in to your new home in as little as 2 months!</p>
            </div>
        </div>
        <Footer/>
    </>)
}