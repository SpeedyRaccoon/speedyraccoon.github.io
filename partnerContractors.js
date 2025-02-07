//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import './css/partnerContractors.css'


export default function partnerContractors() {

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
            <div>
                <h1>Let's Partner to Expand Your Business and Deliver High-Impact ADU Solutions</h1>
                <p>At LOV ADU, we specialize in transforming underutilized spaces into high-value, income-generating Accessory 
                    Dwelling Units (ADUs). By partnering with us, contractors and builders can expand their service offerings 
                    and help homeowners unlock the full potential of their properties – quickly and efficiently! Our innovative, 
                    patent-pending framing process streamline construction, saving time and reduce costs without compromising  
                    on quality.</p>
                <p>From navigating local zoning laws to providing streamlined design and construction services, we guide 
                    homeowners through every step of the ADU process.  Together, we deliver high-quality ADUs and a seamless 
                    experience, empowering homeowners to maximize their property’s value and create lasting income streams.</p></div>
        </div>
        <div class="container">
            <div class="left-panel">
                <p style={{"marginLeft": "15%"}}>As a trusted partner, you'll benefit from:</p>
                <ul>
                    <li><a><strong>Increased Project Volume:</strong></a> ADUs are in high demand, creating new revenue streams 
                        for your business.</li>
                    <li><a><strong>End-to-End Support:</strong></a> LOV ADU provides the engineering expertise and tools to simplify 
                        design, permits, and construction, allowing you to focus on what you do best.</li>
                    <li><a><strong>Stronger Client Relationships:</strong></a> Help homeowners make informed decisions while 
                        delivering a valuable service that increases their property value and generates passive income.</li>
                    <li><a><strong>Competitive Edge:</strong></a> Stand out in a growing market by specializing in ADU construction 
                        and becoming a key player in the ADU revolution and leveraging our innovative, patent-pending framing 
                        process to save time and reduce costs without compromising on quality.</li>
                    <li><a><strong>In-House Engineering Support:</strong></a> Access our expert in-house team of Structural 
                        Engineers (SE) and Professional Engineers (PE) to assist with planning, permits, and ensuring 
                        structural integrity, making your projects smoother and more efficient.</li></ul></div>
            <div class="right-panel">
                <img src={"Contractor1.png"} style={{"height": "45vh", "width": "50vh", "objectFit": "contain"}} alt=""></img></div>
        </div>
        <div class="container">
            <div>
                <h1>Let's Help Homeowners Unlock Their Property's Potential!</h1>
                <p>Join us at LOV ADU and become a part of the future of housing. Together, we’ll help homeowners transform their 
                    properties. Explore our <strong>patent-pending framing process</strong> in action by visiting our demo site.  
                    See firsthand how our innovative approach can save time, reduce costs, and maximize property value, all while 
                    maintaining the highest standards of quality.</p>
                <p><a href="#/ContactUs"> Contact us </a> for a live in-person demo today!</p></div>
        </div>
        <Footer/>
    </>)
}