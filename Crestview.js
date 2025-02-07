import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import "./css/homes.css"

const urlString = ""

const images = [
    "738top.PNG",
    "73801.PNG",
    "73802.PNG",
    "73803.PNG",
    "73804.PNG",
    "73805.PNG",
    "73806.PNG",
    "73807.PNG"
];

export default function Crestview() {

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
            return (
                <>
                    <button style={{"position" : "absolute", "marginLeft": "22%", "marginTop": "10%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(1);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "marginLeft": "45%", "marginTop": "15%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(3);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "marginLeft": "26%", "marginTop": "12%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(2);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "marginLeft": "53.5%", "marginTop": "29%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(4);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "marginLeft": "47.5%", "marginTop": "34%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(5);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "marginLeft": "34%", "marginTop": "26%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(6);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "marginLeft": "30%", "marginTop": "31%", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}}onClick={() => {
                        setDisplay(7);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                </>
            )
        }
        else
        {
            return <></>
        }
    }

    return (<>
        <Navbar/>
            <div style={{"display": "grid", "gridTemplateColumns": "70% 30%"}}>
                <img src={urlString + "738/" + images[display]} className="homesMainImage" alt=""></img>
                {backDisplay()}
                {positionDisplay()}
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <h1 style={{"fontSize": "40px"}}>Lotus</h1>
                    <h2>$150,000 - $200,000</h2>
                    <h2>3 bedrooms</h2>
                    <h2>2 full baths</h2>
                    <h2>Interior: 600-1000 sq. feet (approx)</h2>
                    <p1 style={{"width": "80%"}}>Lotus is the ideal place for the young family. It features a spacious main room decent amount of space for everyone in the household to enjoy.</p1>
                </div>
            </div>
        <Footer/>
    </>)
}