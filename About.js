//import { useState } from 'react';
import Navbar from './navigationbar';
import './css/about.css'
import Footer from './footer'

const urlString = ""
const urlString2 = ""

export default function Contact() {

    window.scrollTo(0, 0)

    return (
    <>
        <Navbar/>
        <div>
            <h1 style={{"textAlign": "center"}}>Building the Future of Living, One ADU at a Time</h1>
            <p>
                At LOV ADU, we are passionate about creating high-quality, functional, and sustainable Accessory Dwelling Units (ADUs) 
                that make a lasting impact. We are driven by a mission to revolutionize homeownership by making affordable homes 
                accessible to all. We provide expert construction solutions that add value to your property and enhance your living 
                space. With a focus on precision, innovation, and personalized service, we strive to turn your vision into reality, 
                whether you're building a rental unit, a guest house, or a family home extension. With this goal in mind, we focus 
                on creating innovative Accessory Dwelling Units (ADUs) that cater to diverse needs, lifestyles, and budgets. Our 
                approach is grounded in the belief that everyone deserves a home that offers comfort, security, and a sense of 
                belonging.</p>
            <p>
                To bring this vision to life, we’ve developed a patent-pending construction framing process that enables us to 
                deliver superior ADUs faster, more efficiently, and at a lower cost. This innovation, combined with our commitment 
                to forward-thinking designs, allows us to provide affordable, high-quality housing solutions that make the dream 
                of homeownership a reality for more individuals and families —making it possible for everyone to experience the 
                joy of owning a home.</p>
            <p>
                At LOV ADU, we don’t just build homes—we create spaces that reflect the needs and aspirations of the people who 
                live in them. We’re here to help make homeownership not just a dream, but a reality, for people from all walks of 
                life.</p>
        </div>
        <div>
            <h1>Your Complete ADU Solution</h1>
            <p>
                At LOV ADU, we’re turning your vision into reality, every step of the way. From concept to construction, we’ve got 
                you covered! We offer a full range of ADU Services, all under one roof. Customers don’t need to look anywhere else 
                for their ADU needs. </p>
            <p>
                With our dedicated teams from each of the professions, we are committed to making homeownership more accessible, 
                efficient, and affordable than ever! We will guide you through every step of the city’s ADU planning and construction 
                process, ensuring a smooth, hassle-free experience from start to finish. Our experienced Project Managers will 
                proactively coordinate construction milestones with the contractors and efficiently track construction progress from 
                start to finish to ensure a timely delivery.</p>
        </div>
        <div style={{"display": "flex"}}>
            <h1 style={{"color": "white", "position": "absolute", "marginTop": "42vh", "marginLeft": "11vw", "fontSize": "68px"}}>Meet the Team</h1>
            <img src={"IMG_8865.jpg"} style={{"width": "100%", "height": "50vh", "objectFit": "cover"}} alt=""></img>
        </div>
        <Footer/>
    </>)
}