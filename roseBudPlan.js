//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function roseBudPlan() {

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
            <div class="container">
                <div class="left-panel">
                    <h1>Spacious Living, Open-space Design</h1>
                    <h2>Studio / Private Office | less than 400 sq. ft<br></br>
                        <p>Cozy and Innovative Studio ADU—A Smart, Profitable Solution for Homeowners</p></h2>
                    <p>Looking for a way to maximize your property’s potential? A <strong>Studio ADU </strong>maximizes the space 
                        while minimizing the footprint, especially if you have a smaller lot or prefer to have more green space.  
                        It is the perfect solution for spacious living with a compact design! Whether you're looking to earn extra 
                        rental income, create a private retreat, or offer flexible living space for family and friends, a Studio ADU 
                        provides the ideal balance of functionality and affordability.
                        <li><strong>Maximize Rental Income: </strong>Rent out your studio on a long-term or short-term basis, such as 
                            through platforms like Airbnb, and create a reliable income stream with minimal hassle.</li>
                        <li><strong>Increase Property Value: </strong>Adding a Studio ADU can increase your home’s value by up to 20%, 
                            making it a smart investment that pays off.</li>
                        <li><strong>Efficient & Flexible Design: </strong>A Studio ADU offers a compact, all-in-one living space that 
                            fits seamlessly into your property, perfect for renters, guests, or even a home office.</li>
                        <li><strong>Affordable & Sustainable: </strong>A smaller, more affordable building option that can be built 
                            efficiently while incorporating eco-friendly and energy-efficient materials, lowering your environmental   
                            footprint.</li>
                        <li><strong>Private & Versatile: </strong>Provide a private living space with its own entrance, giving renters 
                            or family members autonomy while still staying close to home.</li></p>
                    <p>Whether you’re interested in boosting your property’s income potential, creating a guest suite, or building 
                        a quiet home office, a Studio ADU is the ultimate way to unlock value and flexibility. </p>
                    <p>Ready to do our part in alleviating the housing crisis and unlock extra income with an ADU? 
                        Let’s make your vision a reality!</p>
                    <p><strong><a href="#/ContactUs">Contact us </a></strong> for a free consultation.</p>
                </div>

                <div class="right-panel">
                    <h1>Rosebud Library</h1>
                    <table>
                        <thead>
                            <tr>
                            <th>Floor Plan</th>
                            <th>3-D Rendering</th>
                            <th>Download Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><a href="#">FP_A1</a></td>
                            <td><a href="#">3-D_A1</a></td>
                            <td><a href="#">Plan A1</a></td>
                            </tr>
                            <tr>
                            <td>FP_A2</td>
                            <td>3-D_A2</td>
                            <td><a href="#">Plan A2</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        <Footer/>
    </>)
}