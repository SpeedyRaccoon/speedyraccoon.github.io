import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import "./css/homes.css";

const urlString = ""

const images = [
    "1196top3.png",
    "103301.PNG",
    "103303.PNG",
    "103305.PNG",
    "103306.PNG",
    "103307.PNG",
    "103308.PNG",
    "103309.PNG",
    "103310.PNG",
];

export default function Riverside() {

    window.scrollTo(0, 0)

    const [display, setDisplay] = useState(0);

    function backDisplay()
    {
        if (display === 0)
        {
            return <></>
        }
        else
        {
            return (
                <button style={{"position": "absolute", "marginLeft": "6%", "marginTop": "2%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}} onClick={() => {
                    setDisplay(0);
                }}>❮ BACK</button>
            )
        }
    }

    function positionDisplay()
    {
        if (display === 0)
        {
            // return (
            //     <>
            //         <button style={{"position" : "absolute", "marginLeft": "21%", "marginTop": "11%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(1);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "6%", "marginTop": "33%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(2);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "26%", "marginTop": "15%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(3);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "30%", "marginTop": "28.5%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(4);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "52%", "marginTop": "11%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(5);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "53%", "marginTop": "30%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(6);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "57.5%", "marginTop": "13.5%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(7);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //         <button style={{"position" : "absolute", "marginLeft": "58.5%", "marginTop": "27.5%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
            //             setDisplay(8);
            //         }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
            //     </>
            // )
        }
        else
        {
            return <></>
        }
    }

    return (<>
        <Navbar/>
            <div style={{"display": "grid", "gridTemplateColumns": "75% 25%"}}>
                <img src={urlString + "1196/" + images[display]} className="homesMainImage" alt=""></img>
                {backDisplay()}
                {positionDisplay()}
                <div style={{"display": "flex", "flexDirection": "column", "marginLeft": "20px"}}>
                    <h1 style={{"fontSize": "40px"}}>Sunflower</h1>
                    <h2>$200,000 - $280,000</h2>
                    <h2>4 bedrooms</h2>
                    <h2>4 full baths</h2>
                    <h2>Interior: 1000-1200 sq. feet (approx)</h2>
                    <p1 style={{"width": "80%"}}>Sunflower is the largest of our homes. It is offers the best price for it's size and features a large main room with many bedrooms for a family to comfortably live together.</p1>
                </div>
            </div>
        <Footer/>
    </>)
}