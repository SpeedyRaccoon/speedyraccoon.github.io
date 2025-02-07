//import {  useRef, useEffect } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

import "./css/home.css"


export default function Home() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
        <div className="homepageStructure">
            <div>
                <video style={{"width": "80%","marginTop":"10%", "marginRight": "0%"}} autoPlay muted controls loop defaultPlaybackRate="4.0" title="Built in 6 hrs">
                    <source src="Camera2_FramingInOneDay.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="paragraphText">
                <h1>Mission Statement</h1>
                <p1>At <strong>LOV ADU, </strong> our mission is to revolutionize the concept of homeownership by making high-quality, affordable homes accessible to all. 
                    We firmly believe that every individual and family deserves the opportunity to live in a place they can call their own - a home that 
                    provides comfort, security, and a sense of belonging. With this vision in mind, we are committed to transforming the real estate 
                    landscape by offering a range of innovative homes and ADUs that designed to meet diverse needs, lifestyles, and budgets.  Through 
                    our patent-pending construction framing process and forward-thinking designs, we empower individuals and families to achieve the 
                    dream of homeownership, making it not just a possibility, but a reality!</p1>
            </div>
        </div>

        <div className="homepageFooter">
            <div className="paragraphText">
                <h1>Patent-Pending Innovative Approach</h1>
                <p1><strong>LOV ADU </strong> is your one-stop solution for Accessory Dwelling Units (ADUs), offering a diverse portfolio
                     of engineering plans and services tailored to meet every homeowner’s needs. We specialize in attached, 
                     detached, and garage-conversion ADUs designed to seamlessly complement existing homes. With a large 
                     selection of pre-engineered and pre-approved ADU plans, we provide quick, hassle-free solutions. If 
                     none of our pre-designed plans meet your needs, we also offer fully customized options.</p1>
                <br></br> <br></br> 
                <p1>Our <strong style={{"color": "blue"}}>patent-pending construction framing process </strong> ensures faster, cost-effective builds with minimal waste, 
                    eliminating delays caused by weather and reducing overall construction time. Outfitted with utilities for 
                    quicker builds, we deliver high-quality housing at a fraction of the cost. With a team of in-house 
                    Professional Engineers and Structural Engineers, we guide you through every step of the city’s ADU 
                    planning and construction process, ensuring a smooth, hassle-free experience from start to finish.</p1>
                <br></br> <br></br> 
                <p1>Our innovative construction approach accelerates homebuilding, significantly lowering costs while 
                    maintaining exceptional quality.  At LOV ADU, we are committed to making homeownership more accessible, 
                    efficient, and affordable with our cutting-edge designs and construction methods.</p1>
                <br></br> <br></br>
                <p1>Let’s explore our <strong style={{"color": "blue"}}><a href={"#/aduPlanBenefits"}>ADU Plans and Benefits</a></strong>…</p1>
            </div>
        </div>

        <br></br>>
        <div>
            <video style={{"width": "85%", "height": "40%", "marginRight": "5%"}} autoPlay muted controls loop defaultPlaybackRate="4.0" title="Built in 6 hrs">
                <source src="NikonMotionPics2.mp4" type="video/mp4"/>
            </video>
        </div>
        <Footer/>
    </>)
}