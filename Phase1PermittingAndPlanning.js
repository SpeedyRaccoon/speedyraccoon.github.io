//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/morningGlory.css'


const urlString = ""
const urlString2 = ""



export default function phase1PermittingAndPlanning() {

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
             <img src={"Phase1-PermittingAndPlanning.jpg"} style={{"width": "100%", "height": "35vh", "objectFit": "scale-down"}} alt=""></img>
        </div>
        <div>
            <h1>Let's Get Started</h1>
            <div class="container">
                <div class="left-panel">
                    <p>We have a large <a href="#/LibraryPlan">library of expedited ADU plans </a> for your review and selection. Pre-Approved and 
                        Pre-Engineering Plans are designed to meet local building codes and zoning requirements, simplifying the process of obtaining 
                        permits and starting construction.</p>
                    <p>During our initial discovery and consultation, let’s determine the ideal square footage and layout for your ADU.</p>
                                    
                    <p>With your selection, we will come back to you with in expertly designed 3D rendering of your ADU.  We will make any other 
                        last minute modification as needed to align to budget expectation for the entire project.</p></div>
                <div class="right-panel">
                    <img src={"Approved.jpg"} style={{"marginTop": "0%", "height": "40vh", "width": "40vh", "objectFit": "contain"}} alt=""></img></div>
            </div>
            <div>
                <p>At LOV ADU, we offer flexible design options to suit your needs. Choose from our pre-approved plans for the fastest permitting process, 
                    our pre-engineered plans for a balance of speed and customization, or opt for a fully customized ADU to bring your unique vision to 
                    ßlife. Whatever your preference, we have the perfect solution to make your ADU project seamless and stress-free!</p>
                <ul><li><strong>Pre-Approved Plans </strong> refer to architectural and engineering designs for ADUs that have already been 
                        reviewed and approved by local zoning authorities and/or building departments.
                        Pre-Approved ADU plans are a great option for homeowners who want to build an ADU or other structures quickly and efficiently.                             By choosing a plan that's already been reviewed and approved by local authorities, customers can save time, reduce costs, 
                        and avoid the complexity of custom design and approval processes. With Pre-Approved ADU Plans and a completed Feasibility Study, 
                        we will directly jump to Step 3 of Phase 1 – Permitting and Planning. </li>
                    <li><strong>Pre-engineering Plans </strong> refer to a set of standardized, ready-to-use architectural and structural 
                        designs that have been engineered but not yet approved for construction in specific areas or jurisdictions. Pre-Engineering 
                        ADU plans are often used as starting points for homeowners who wish to build an ADU without going through the 
                        lengthy process of designing one from scratch.  The bulk of the work for Step 1 and Step 2 in the Phase 1 – Permitting and 
                        Planning process is already completed.</li>
                    <li><strong>Fully Customized Plans</strong> allow you to tailor the design to your vision and needs. We will bring your 
                        ideas to life with our expert guidance and personalized designs. We are committed to helping you create the perfect custom design.</li></ul>
                <p>After permit issuance, we are ready to begin <a href="#/phase2Construction">Phase 2 – Construction Administration.</a></p>
            </div>
        </div>
        <Footer/>
    </>)
}