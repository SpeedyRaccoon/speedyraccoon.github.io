//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/aduPlanBenefits.css'


const urlString = ""
const urlString2 = ""



export default function aduPlanBenefits() {

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
        <main class="p-6 max-w-5xl mx-auto">
            <div class="container">
                <div class="left-panel">
                    <h1 class="section-title">Comprehensive Solution</h1>
                    <section class="mb-8" style={{"marginRight": "-10%"}}>
                        <p class="text-lg">LOV ADU offers an All-in-One Solution. We offer a full range of ADU services, from design and engineering to construction, all under one roof. Customers don’t need to look anywhere else for their ADU needs.</p>
                        <p class="mt-4">With a team of in-house <strong>Professional Engineers</strong> and <strong>Structural Engineers</strong>, we’ll guide you through every step of the city’s ADU planning and construction process, ensuring a smooth, hassle-free experience from start to finish. Our experienced Project Managers will proactively coordinate construction milestones with the contractors and efficiently track construction progress from start to finish to ensure a timely delivery.</p>
                    </section>

                    <section style={{"marginLeft": "10%"}}>
                        <h1 class="section-title">Plan Options</h1>
                        <div class="overflow-x-auto">
                            <table class="plans-table">
                                <thead>
                                    <tr>
                                        <th style={{"textAlign": "center"}}>Plan Type</th>
                                        <th style={{"textAlign": "center"}}>Permitting Speed</th>
                                        <th style={{"textAlign": "center"}}>Customizable Options</th>
                                        <th style={{"textAlign": "center"}}>Plan Cost*</th>
                                        <th style={{"textAlign": "center"}}>Additional Considerations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pre-Approved Plan</td>
                                        <td>Permit Approval in Days!</td>
                                        <td>Minor aesthetic modifications may be permissible.</td>
                                        <td>$ Less than $5,000</td>
                                        <td>The plan is ready for submission! The process of getting permits and starting construction is much simpler and quicker compared to designing a custom ADU that must go through the full approval process.</td>
                                    </tr>
                                    <tr>
                                        <td>Pre-Engineering Plan</td>
                                        <td>Permit Approval may take a few weeks.</td>
                                        <td>Some flexibility for customization.</td>
                                        <td>$$ Between $5,001 to $8,000</td>
                                        <td>The designs have been created to be easily adapted to various sites while still meeting local building codes and requirements.</td>
                                    </tr>
                                    <tr>
                                        <td>Custom Plan</td>
                                        <td>Custom plan takes longer for design and approval.</td>
                                        <td>Total flexibility</td>
                                        <td>$$$ Over $8,000</td>
                                        <td>Custom plans provide flexibility and the opportunity to create a space that perfectly fits your lifestyle.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    <p>Note: City fees, including but not limited to plan check, building permit, impact fees and school fees, may be extra. Please visit your city plan 
                    department website for more details.</p>
                </div>

                <div class="right-panel">
                    <section class="mb-8">
                        <h1 class="section-title">Key Service Offerings</h1>
                        <ul class="list-disc ml-8 space-y-2" style={{"marginLeft": "-20%"}}>
                            <li>Free Consultation and Estimates</li>
                            <li>Free 3D renderings of your new home*</li>
                            <li>Expedited ADU Plans from our library of pre-engineered and pre-approved ADU plans.</li>
                            <li>Customized ADU Plans to meet every need.</li>
                            <li>
                                <strong>Phase 1: Planning and Permitting</strong>
                                <ul class="nested-list" style={{"marginLeft": "-30%"}}>
                                    <li>Site Assessment and Feasibility Study</li>
                                    <li>Preliminary Design and Concept Plans</li>
                                    <li>Complete Plan Set Development including Plan Revision and Plan Check</li>
                                    <li>Permit Application and Issuance</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Phase 2: Construction Administration</strong>
                                <ul class="nested-list" style={{"marginLeft": "-30%"}}>
                                    <li>ADU E2E Construction with General Contractor (GC) to manage and oversee the entire construction project.</li>
                                    <li>Sustainability and Energy Efficiency with Eco-Friendly Design and Energy-Efficient Features.</li>
                                    <li>Efficient, Cost-Effective Construction with our Innovative, Patent-Pending Framing Process to accelerate the construction timeline while reducing material waste and costs.</li>
                                    <li>Post-Construction Support</li>
                                </ul>
                            </li>
                            <li>Consultation and advisory services during Design, Construction, and any Regulatory Guidance.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
        <Footer/>
    </>)
}