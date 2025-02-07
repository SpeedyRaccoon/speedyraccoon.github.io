import React from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import './css/plans.css'

const urlString = ""   //for some reason, behaves the opposite as others

export default function Plans() {

    window.scrollTo(0, 0)
    return (<React.Fragment>
        <Navbar/>
            <div class="planHeader">
                <h2> Your Dream ADU Starts Here – With Free Engineering Plans! </h2>
                <p><strong>We’re thrilled to offer free engineering plans for our most popular ADU sizes! </strong>
                For more options and inspiration, explore our <strong><a href="#/LibraryPlan">Design Library. </a></strong> 
                
                Whether you’re looking for something unique to match your vision, 
                property layout, or specific needs, we’ll partner with you every 
                every step of the way. 

                Let’s bring your vision to life with a custom design that’s as unique as you are.
                <a href="#/ContactUs"> Contact our Engineers</a> to help you create the perfect custom design.</p>
            </div>

            {/*<div class="container"> */}

            <div class="plan">
                <div>
                    <h2><img src={"PlanMorningGlory2.jpg"} style={{"height": "10vh", "width": "10vh", "objectFit": "cover"}} alt=""></img>
                        <a href="#/morningGlory">Morning Glory</a>
                        <p1>(1-Br / 1-Ba | 412 sqft)</p1></h2>
                    <p><strong>Generous Space, Perfectly Sized.</strong>Imagine a beautifully designed, fully equipped 
                        <strong style={{"color": "black"}}> 1-Bedroom, 1-Bath ADU</strong> that provides the perfect blend 
                        of comfort, style, and privacy. This versatile living space is ideal for homeowners looking to 
                        generate extra rental income or create a peaceful retreat for guests or family with room to grow.
                        </p>
                    <p>
                        With a thoughtful layout that maximizes both functionality and aesthetic appeal, this ADU features 
                        a spacious bedroom, a well-appointed bathroom, and an open living area with plenty of natural 
                        light. Whether you're renting it out on a long-term lease or using it as a short-term vacation 
                        rental, this ADU offers a high return on investment.</p>
                </div>
                <div class="plan-download">
{/*                    <img src="412/4124.PNG" alt="Morning Glory"> */}
                    <p><a href="./files/412.pdf">Download Morning Glory</a></p>
                </div>
            </div>

            <div class="plan">
                <div>
                    <h2><img src={"PlanLotus.jpg"} style={{"height": "10vh", "width": "10vh", "objectFit": "cover"}} alt=""></img>
                        <a href="#/lotusPlan">Lotus</a> 
                        <p1>(2-Br / 2-Ba | 738 sqft)</p1></h2>
                    <p><strong>Expansive Living, Smart Design.</strong>Unlock the full potential of your property with a 
                        beautifully designed <strong style={{"color": "black"}}>2-Bedroom, 2-Bath ADU</strong>. Whether you're 
                        looking to generate rental income, provide a private space for family members, or create a high-end 
                        guest suite, this ADU offers endless possibilities.</p>
                    <p>Designed with an open floor plan that maximizes space and natural light, this 2-bedroom, 2-bath ADU 
                        is ideal for small families, roommates, or anyone who needs more room to spread out. With two private 
                        bedrooms and two stylish bathrooms, it provides the privacy and convenience of a full-sized home in a 
                        compact footprint.</p>
                </div>
                <div class="plan-download">
{/*                    <img src="https://via.placeholder.com/100" alt="Lotus"> */}
                    <p><a href="./files/755.pdf">Download Lotus</a></p>
                </div>
            </div>

            <div class="plan">
                <div>
                    <h2><img src={"PlanSunflower1.jpg"} style={{"height": "10vh", "width": "10vh", "objectFit": "cover"}} alt=""></img>
                        <a href="#/sunflowerPlan">Sunflower</a>
                        <p1>(3-Br / 2-Ba | 1,192 sqft)</p1></h2>
                    <p><strong>Luxury Living, Infinite Possibilities.</strong>Maximize your property’s potential with a stunning
                        <strong style={{"color": "black"}}>3-Bedroom, 3-Bath ADU</strong> that offers ample space, modern design, 
                        and ultimate privacy. Perfect for homeowners looking to generate significant rental income or accommodate 
                        a growing family, or create a high-end guest house, this ADU provides everything you need for comfortable 
                        and luxurious living.</p>
                    <p>With three spacious bedrooms and up to three bathrooms, this ADU offers the kind of room and functionality 
                        typically found in a full-sized home—ideal for families, long-term tenants, or anyone who needs more space 
                        while maintaining privacy.</p>
                </div>
                <div class="plan-download">
{/*                    <img src="https://via.placeholder.com/100" alt="Sunflower"> */}
                    <p><a href="./files/1033.pdf">Download Sunflower</a></p>
                    <p><a style={{"background": "blue"}} href="./files/1033.pdf">Sunflower Gallery</a></p>
                </div>
        </div>
        <Footer/>
    </React.Fragment>)
}