import { useState } from 'react';
import Navbar from './navigationbar';
import "./css/homes.css"

const urlString = ""        //very unusual case

const images = [
    "412top1c.png",
    "41208c.png",
    "41202.png",
    "41206c.png",
    "41204c.png",
    "40205c.png",
];

export default function Avalon() {

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
                <button style={{"position": "absolute", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}} id="avalon0" onClick={() => {
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
                    <button style={{"position" : "absolute", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}} id="avalon4" onClick={() => {
                        setDisplay(4);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}} id="avalon5" onClick={() => {
                        setDisplay(5);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}} id="avalon3" onClick={() => {
                        setDisplay(3);
                    }}><img src={urlString + "camera-solid.svg"} alt=""></img></button>
                    <button style={{"position" : "absolute", "backgroundColor": "transparent", "border": "none", "cursor": "pointer"}} id="avalon1" onClick={() => {
                        setDisplay(1);
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
            <div style={{"display": "grid", "gridTemplateColumns": "60% 40%"}}>
                <div style={{"display": "flex"}}>
                    <img src={urlString + "412/" + images[display]} alt="" className="homesMainImage"></img>
                    {backDisplay()}
                    {positionDisplay()}
                </div>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <h1 style={{"fontSize": "40px"}}>Morning Glory</h1>
                    <h2>$100,000 - $150,000</h2>
                    <h2>1 bedroom</h2>
                    <h2>1 full bath</h2>
                    <h2>Interior: 400-600 sq. feet (approx)</h2>
                    <p1 style={{"width": "80%"}}>Morning Glory is the perfect place for any individual or young couple that want to own a home that they can call their's. It is our lowest price option and features a decent-sized main room with enough space to store all the essentials needed for comfortable living.</p1>
                </div>
            </div>
    </>)
}