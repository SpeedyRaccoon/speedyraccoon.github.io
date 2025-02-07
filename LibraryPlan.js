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
            <div> 
                <img src={"LibraryPlan2.jpg"} style={{"height": "25vh", "width": "100vh", "objectFit": "none"}} alt=""></img></div>
           
            <div>
                <h1>Discover the Ideal ADU -- Explore Our Versatile ADU Floor Plans</h1>
                <p>At <strong>LOV ADU</strong>, we understand that every property and homeowner is unique. We believe that the 
                    perfect living space is one that blends style, function, and efficiency. Whether you're looking to generate 
                    extra rental income, provide private living space for family members, or simply add more space to your 
                    property, we may already have a floor plan that fits your needs.</p>
                <p>What sets us apart? We offer a comprehensive library of each of our four ADU options, giving you the 
                    flexibility to explore various designs, layouts, and configurations until you find the one that’s just 
                    right for your property. If none of our existing designs match your vision, we’re happy to work with you to 
                    create a fully customized plan tailored to your specific requirements.</p>
                <p>Our thoughtfully designed ADU options are built to maximize both comfort and utility, all while enhancing the 
                    value of your property. Explore our range of sizes—from cozy and compact to spacious and versatile—and 
                    discover the ideal solution for your lifestyle.</p>
                <ul>
                    <li><strong><a href="#/roseBudPlan">Studio ADU:</a></strong> A smart, efficient space perfect for a private 
                        retreat or rental income. The Studio ADU is perfect for those seeking a low-maintenance, high-return 
                        investment.  Perfect for maximizing property potential in a compact footprint.</li>
                    <li><strong><a href="#/morningGlory">1-Bedroom, 1-Bath ADU:</a></strong> The perfect mix of coziness and 
                        functionality. This 1-Bedroom, 
                        1-Bath ADU is perfect for long-term rentals, a private guest suite, or a stylish home office. With its 
                        open layout and efficient design, it’s the ideal choice for those seeking comfort with minimal upkeep. 
                        This design offers comfort without the clutter, making it ideal for a wide range of uses.</li>
                    <li><strong><a href="#/lotusPlan">2-Bedroom, 2-Bath ADU:</a></strong> Spacious, private, and well-suited 
                        for small families or renters. The 2-Bedroom, 2-Bath ADU is the perfect solution. Its practical design 
                        delivers the ideal balance of privacy and comfort, while its efficient footprint ensures you get the 
                        most out of every square foot. Enjoy privacy and comfort in style.</li>
                    <li><strong><a href="#/sunflowerPlan">3-Bedroom, up to 3-Bath ADU:</a></strong> The ultimate in luxury, 
                        flexibility, and space. Whether for multigenerational living, additional rental units, or a home for a 
                        growing family, this expansive floor plan provides all the room you need for modern living. It’s the 
                        perfect investment in your property and your future.</li>
                    <li><strong><a href="#/ContactUs">Fully Customized Plan:</a></strong> Create your dream ADU! If you don’t 
                        find exactly what you’re looking for, our team will collaborate with you to design a customized floor 
                        plan tailored to your specific needs, property dimensions, and vision. We’re committed to helping you 
                        create the perfect custom design. Our team of experts will work with you to adjust existing plans or 
                        design something entirely unique that aligns with your vision, your property’s layout, and your specific 
                        needs. We’ll bring your idea to life with precision and expertise!</li></ul>
                <p>Whether you’re interested in boosting your property’s income potential, creating a guest suite, or building 
                    a quiet home office, an ADU is the ultimate way to unlock value and flexibility. </p>
                <p>Ready to do our part in alleviating the housing crisis and unlock extra income with an ADU? Let’s make your 
                    vision a reality!</p>
            </div>
        <Footer/>
    </>)
}