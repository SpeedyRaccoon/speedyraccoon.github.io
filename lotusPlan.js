//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function lotusPlan() {

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
                    <h1>Expansive Living, Smart Design</h1>
                    <h2>2-Br / 2-Ba | 500 – 749 sq. ft.<br></br>
                        <p>Stylist and Modern 2-Bedroom, 2-Bath ADU—Perfect for Income, Privacy, or Multigenerational Living</p></h2>
                    <p>Unlock the full potential of your property with a beautifully designed <strong>2-Bedroom, 2-Bath ADU</strong>
                        —a perfect balance of comfort, privacy, and modern style. Whether you're looking to generate rental income, 
                        provide a private space for family members, or create a high-end guest suite, this ADU offers endless possibilities.</p>
                    <p>Smartly designed to maximize space and natural light, this 2-bedroom, 2-bath ADU is ideal for small families, 
                        roommates, or anyone who needs more room to spread out. With two private bedrooms and two stylish bathrooms, 
                        it provides the privacy and convenience of a full-sized home in a compact footprint.
                        <li><strong>Private & Spacious:</strong>Two separate bedrooms and bathrooms offer ultimate privacy and comfort 
                            for tenants, family, or guests.</li>
                        <li><strong>Modern and Functional Design:</strong>Featuring a well-thought-out floor plan with a spacious kitchen, 
                            living area, and high-quality finishes, this ADU feels like a true home.</li>
                        <li><strong>High Rental Potential:</strong>Whether for long-term leases or short-term rentals like Airbnb, this 
                            ADU generates solid income potential in today’s high-demand rental market.</li>
                        <li><strong>Ideal for Multigenerational Living:</strong> Perfect for adult children, aging parents, or guests who 
                            need their own space, while still being close to home.</li>
                        <li><strong>Eco-Friendly & Affordable:</strong>Built with sustainable materials and energy-efficient systems, 
                            this ADU is a smart investment for both your wallet and the environment.</li>
                        <li><strong>Boost Property Value:</strong>A 2-Bedroom, 2-Bath ADU can significantly increase your property’s value, 
                            offering a high return on investment and making your property more desirable to future buyers.</li></p>
                            
                    <p>Transform your property with a 2-Bedroom, 2-Bath ADU that blends style, function, and income potential. Whether for 
                        personal use or as a rental unit, this ADU is an investment that will pay off for years to come</p>
                    <p>Ready to start your ADU journey? Let’s make it happen!</p>
                    <p><strong><a href="#/ContactUs">Contact us </a></strong>for a free consultation.</p>
                </div>

                <div class="right-panel">
                    <h1>Lotus Library</h1>
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