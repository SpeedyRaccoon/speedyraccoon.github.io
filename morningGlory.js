//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function morningGlory() {

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
                    <h1>Generous Space, Perfectly Sized</h1>
                    <h2>1-BR / 1-BA | 350 - 499 sq. ft. <br></br>
                        <p>Spacious and Contemporary 1-Bedroom, 1-Bath ADU—Your Perfect Solution for Extra Income or Private Living.</p></h2>
                    <p>Imagine a beautifully designed, fully equipped <strong>1-Bedroom, 1-Bath ADU</strong> that provides the 
                        perfect blend of comfort, style, and privacy. This versatile living space is ideal for homeowners looking to 
                        generate extra rental income, create a peaceful retreat for guests or family, or even set up a private office 
                        with room to grow.

                        <li><strong>Private & Comfortable:</strong> A separate entrance and dedicated living space make this 1-Bedroom, 
                            1-Bath ADU perfect for renters, family members, or guests seeking their own space.</li>
                        <li><strong>Stylish and Efficient Design:</strong> Modern finishes and smart design maximize every square foot, 
                            making it a cozy yet spacious living environment.</li>
                        <li><strong>Generate Income:</strong> Rent it out for steady passive income or use it for short-term stays like 
                            Airbnb and watch your earnings grow.</li>
                        <li><strong>Sustainable & Affordable:</strong> Built with eco-friendly materials and energy-efficient systems, 
                            this ADU is both cost-effective and kind to the environment.</li>
                        <li><strong>Increase Property Value:</strong> Adding a well-designed 1-Bedroom ADU can increase your property’s 
                            value and make it more appealing to future buyers.</li></p>
                    <p>This 1-Bedroom, 1-Bath ADU is the perfect way to unlock hidden potential in your property, whether you’re looking 
                        for extra income, more living space, or a quiet retreat.</p>
                    <p>Ready to turn your vision into reality? Let's get started!</p>
                    <p><strong><a href="#/ContactUs">Contact us </a></strong>for a free consultation.</p>
                </div>

                <div class="right-panel">
                    <h1>Morning Glory Library</h1>
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