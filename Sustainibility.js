//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';

const urlString = ""
const urlString2 = ""

export default function Sustainibility() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            <div style={{"display": "flex", "width": "90%", "marginLeft": "auto", "marginRight": "auto", "flexDirection": "column"}}>
                <a style={{"marginBottom": "2vh"}} href={urlString2 + "/#/about"}>❮ BACK TO ABOUT</a>
                <img src={urlString + "IMG_5465.jpg"} style={{"width": "100%"}} alt=""></img>
                <h1 style={{"fontSize": "36px"}}>Sustainable Practices</h1>
                <div style={{"display": "grid", "gridTemplateColumns": "50% 50%", "marginBottom": "5vh"}}>
                    <p2 style={{"fontSize": "20px", "lineHeight": "150%", "width": "90%"}}>We believe that every new home must be built sustainably. Currently, our home construction reduces wasted materials by 90% which we reflect back to our customers by the further slashing the cost of constructing a new home. Any excess wood that is too small and thereby cannot be used safely in home construction is repurposed to build desks and donated to </p2>
                    <p2 style={{"fontSize": "20px", "lineHeight": "150%", "width": "90%"}}>students across America. We truly believe that our planet is special place and want to do our best to ensure that future generations have the opportunity to enjoy our planet just as much as we have.</p2>
                </div>
            </div>
        <Footer/>
    </>)
}