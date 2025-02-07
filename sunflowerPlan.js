//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function sunflowerPlan() {

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
                    <h1>Luxury Living, Infinite Possibilities</h1>
                    <h2>3 Br / 2.5-3 Ba | 750 – 1200 sq. ft.<br></br>
                        <p>Luxurious and State-of-the-Art 3-Bedroom, 3-Bath ADU—The Ultimate in Space, Privacy, and Income Potential.</p></h2>
                    <p>Maximize your property’s potential with a stunning <strong>3-Bedroom, 3-Bath ADU </strong>that offers ample space, 
                        modern design, and ultimate privacy. Perfect for homeowners looking to generate significant rental income, 
                        accommodate a growing family, or create a high-end guest house, this ADU provides everything you need for 
                        comfortable and luxurious living. With three spacious bedrooms and up to three bathrooms, this ADU offers the 
                        kind of room and functionality typically found in a full-sized home—ideal for families, long-term tenants, or 
                        anyone who needs more space while maintaining privacy.
                        <li><strong>Spacious & Private: </strong>Three generous bedrooms, multiple bathrooms, and an open layout provide 
                            a luxurious living experience, perfect for families or guests.</li>
                        <li><strong>High-Quality, Modern Design: </strong>Thoughtfully designed with premium finishes, a large kitchen, 
                            and expansive living areas, this ADU combines style and functionality.</li>
                        <li><strong>Maximized Rental Income: </strong>With ample space and separate bathrooms, this ADU is perfect for 
                            high-demand rental opportunities—whether long-term tenants, vacation rentals, or multi-family use.</li>
                        <li><strong>Ideal for Multigenerational or Extended Living:</strong> A perfect solution for housing multiple 
                            generations or providing a private space for relatives while staying close to home.</li>
                        <li><strong>Eco-Friendly & Efficient: </strong>Built with sustainable materials and energy-efficient systems, 
                            this ADU is not only affordable but also environmentally conscious.</li>
                        <li><strong>Increase Property Value: </strong>Adding a 3-Bedroom, 3-Bath ADU can significantly increase your 
                            property’s value, offering a strong return on investment and making your home more attractive to potential 
                            buyers.</li></p>
                    <p>A 3-Bedroom, 3-Bath ADU is the perfect way to elevate your property’s potential, whether you’re looking to 
                        maximize income, create flexible living arrangements, or simply add more space.</p>
                    <p>Ready to transform your backyard into a high-demand, income-generating asset? Let’s make it happen!</p>
                    <p><strong><a href="#/ContactUs">Contact us </a></strong>for a free consultation.</p>
                </div>

                <div class="right-panel">
                    <h1>Sunflower Library</h1>
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