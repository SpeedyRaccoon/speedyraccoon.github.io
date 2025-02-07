//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function partnerCustomers() {

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
                <h1>Why Build an ADU?</h1>
                <p>Are you sitting on untapped potential in your own backyard? Accessory Dwelling Units (ADUs) are quickly becoming one 
                    of the most lucrative ways to generate passive income, boost property value, and maximize space. An ADU is a smart 
                    way to earn extra cash without sacrificing privacy or lifestyle.  ARE YOU READY?</p></div>
        </div>

        <div class="container">
            <div class="left-panel">
                <p style={{"marginLeft": "15%"}}>Unlock Extra Income with an ADU</p>
                <ul>
                    <li><a>Extra Rental Income:</a> The most straightforward benefit is the potential for rental income. Rent out your ADU on a 
                        long-term basis, or even explore short-term rentals like Airbnb. With demand for flexible housing options growing, 
                        this is a great way to tap into a profitable market.</li>
                    <li><a>Increase Property Value</a>: Studies show that homes with ADUs can appreciate by 20% or more. Adding an ADU not only 
                        gives you additional income opportunities but can also make your property more attractive to future buyers. It's 
                        an investment that pays off.</li>
                    <li><a>Housing Demand:</a> With the rising cost of rent and limited affordable housing, the need for ADUs has never been 
                        greater. As a homeowner, you can provide much-needed housing in a way that benefits both you and the community.</li>
                    <li><a>Tax Benefits:</a> Depending on where you live, there may be tax incentives and rebates for building ADUs, including 
                        reduced property taxes or deductions for construction expenses. Always check with a local tax professional to 
                        understand your specific benefits.</li>
                    <li><a>Flexible Use:</a> Use your ADU however you see fit! It's perfect for a rental unit, a home office, a private retreat 
                        for family members, or a space for visiting friends or relatives. The flexibility in how the space can be 
                        utilized makes ADUs a win-win.</li>
                    <li><a>Sustainability and Green Living:</a> Building an eco-friendly ADU can provide a sustainable living solution while 
                        reducing your environmental footprint. Many ADUs are built with green materials and energy-efficient designs, 
                        making them attractive to environmentally conscious renters.</li></ul></div>
            <div class="right-panel">
                <img src={"Homeowner1.png"} style={{"height": "50vh", "width": "60vh", "objectFit": "contain"}} alt=""></img></div>
        </div>

        <div class="container">
            <div>
                <h1>How Can I Get Started?</h1>
                <ul>
                    <li><a>Check Local Regulations:</a> ADU laws and regulations vary from city to city. Find out what zoning laws apply to your 
                        property, the permits required, and any specific restrictions. This will ensure that your investment is compliant 
                        with local guidelines and minimizes any future headaches.</li>
                    <li><a>Design Your Dream ADU:</a> Work with an architect or designer to create a space that aligns with your goals. Whether 
                        it's a studio apartment, a 1-bedroom unit, or a detached guest house, make sure the design maximizes the available 
                        space and adds value to your property.</li>
                    <li><a>Find a Contractor:</a> Once you have your design, hire a trusted contractor with experience in ADU construction. This 
                        ensures the job gets done right the first time and that your ADU is built to last.</li>
                    <li><a>Market and Rent:</a> Once your ADU is completed, market it to potential renters. Leverage online rental platforms, 
                        social media, and word of mouth to find the right tenants. If you're considering short-term rentals, professional 
                        photography and listing optimization will help you attract high-quality guests.</li></ul></div>
        </div>

        <div class="container">
            <div>
            <h1>Building Your ADU Faster Than You Can Find a Tenant</h1>
            <p>No one build it faster! Our innovative, patent-pending framing process streamline construction, saving time and reduce costs 
                without compromising on quality.  Check out typical <a href="#/phase2Construction">ADU construction timeline.</a></p>
            <p>Turn your property into profit with expert guidance, seamless design, and streamlined construction.  We simplify the process 
                of adding an ADU to your property. From navigating local regulations to designing the perfect space and managing construction, 
                we’re here to help you unlock extra income, increase your property value, and create flexible living solutions.  LOV ADU takes 
                the guesswork out of getting started, so you can start earning sooner.  We look forward to partnering with you to realize your 
                dream! <a href="#/ContactUs">Contact us </a>for a free consultation!</p></div>
        </div>
        <Footer/>
    </>)
}