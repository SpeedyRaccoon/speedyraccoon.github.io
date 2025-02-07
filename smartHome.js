//import { useState } from 'react';
//import React, { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import './css/smartHome.css'


export default function smartHome() {
    return (<>
        <Navbar/>
        <div>
            <img src={"SmartIcons2.jpg"} style={{"height": "20vh", "width": "150vh", "objectFit": "contain"}} alt=""></img>
        </div>
            
        <div>
            <h1>Go Green, Go Smarter, Go Faster</h1>
            <p>Go Green!  We all are committed to our future generations.  LOV ADU can help you further reduce your carbon 
                footprint by increasing efficiency throughout your new home beyond the requirements of ADU Title 24.  In 
                addition to leveraging our innovative techniques and reimagining the construction process, our patent-pending 
                construction process significantly reduces waste and eliminates the unpredictable nature that is so often 
                associated with building a new home. By choosing LOV ADU, you get more value for your investment, a quicker 
                path to homeownership, and the satisfaction of knowing you've made the right choice.</p>

            <ul>
                <li><a><strong>Convenience at Your Fingertips </strong></a> - - Smart devices like thermostats, lighting, and doorbells 
                    give you control at home or on the go. With remote access and voice commands, you can adjust settings, monitor 
                    your home, and automate tasks—making daily life effortless.</li>
                <li><a><strong>Save Money and Energy </strong></a> - - Smart devices help you cut energy costs. Smart thermostats optimize 
                    heating and cooling based on your schedule, while smart lighting turns off when not needed. These devices save 
                    energy and lower utility bills, paying for themselves over time.</li>
                <li><a><strong>Enhanced Security </strong></a> - - Smart home security features—like video doorbells, cameras, and motion 
                    sensors—offer peace of mind by alerting you to unusual activity, even when you’re not home. Smart locks provide 
                    secure, keyless entry, while remote monitoring helps you stay in control.</li>
                <li><a><strong>Comfort Tailored to You </strong></a> - - Smart devices adapt to your preferences. Smart thermostats learn 
                    your temperature needs, while smart lighting creates the perfect ambiance with customizable settings. Your home 
                    automatically adjusts to provide comfort when you need it most.</li>
                <li><a><strong>Boost Your Home’s Value </strong></a> - - Smart homes are more attractive to buyers. Installing smart devices 
                    increases your home’s appeal by offering modern convenience, enhanced security, and energy efficiency—features 
                    that can elevate your home’s market value</li>
                <li><a><strong>Health and Safety </strong></a> - - Smart devices improve your well-being. Air quality monitors and smart 
                    smoke detectors help ensure a safer, healthier environment, while motion-sensing lights prevent accidents. Plus, 
                    smart lighting supports better sleep by aligning with natural circadian rhythms.</li>
                <li><a><strong>Seamless Integration </strong></a> - - Smart devices work together. From controlling lighting and thermostats 
                    to monitoring security cameras, everything syncs to create a smarter, more efficient home. Set routines and 
                    automate daily tasks for a hassle-free lifestyle</li></ul>

            <p>Overall, installing smart devices can significantly enhance your home’s convenience, security, energy efficiency, 
                and comfort. These technologies offer a range of benefits that not only improve your day-to-day life but also 
                have long-term advantages, such as reducing utility costs, enhancing safety, and increasing your home’s value. 
                As these devices continue to evolve and integrate with one another, the potential for creating a truly smart 
                home—one that adapts to your needs and routines—becomes an increasingly compelling reason to make the upgrade.</p>
        </div> 
        <Footer/>
    </>)
}