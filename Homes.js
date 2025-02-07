import React, { useState, useEffect } from 'react';
//import Navbar from './navigationbar';
import Footer from './footer';
import "./css/homes.css"

const urlString = ""
const urlString2 = ""

export default function Homes() {

    //window.scrollTo(0, 0)
    const [dropboxState, setDropboxState] = useState(false);
    const [dropbox, setDropbox] = useState(() => {
        return <div></div>;
    })
    const [color, setColor] = useState("white");

    function toggleDropboxState()
    {
        setDropboxState(!dropboxState)
    }

    useEffect(() => {
        if (dropboxState)
        {
            setDropbox(<header>
                <nav>
                    <ul1 style={{"paddingTop": "40px"}}>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">HOME</a></li>
                        <li><a href={urlString2 + "/#/portfolio"} className="hover-underline-animation">PORTFOLIO</a></li>
                        <li><a href={urlString2 + "/#/homes"} className="hover-underline-animation">YOUR NEW HOMES</a></li>
                        <li><a href={urlString2 + "/#/process"} className="hover-underline-animation">HOW IT WORKS</a></li>
                        <li><a href={urlString2 + "/#/plans"} className="hover-underline-animation">DOWNLOAD FREE PLANS</a></li>
                    </ul1>
                </nav>
            </header>)
            setColor("black")
        }
        else
        {
            setDropbox(<div></div>);
            setColor("white");
        }
    }, [dropboxState])


    return (
    <>
        <button onClick={toggleDropboxState} className="toggle-button" style={{"position": "absolute", "marginLeft": "0", "marginTop": "5px"}}>
            <span className="bar" style={{"backgroundColor": color}}></span>
            <span className="bar" style={{"backgroundColor": color}}></span>
            <span className="bar" style={{"backgroundColor": color}}></span>
        </button>
        {dropbox}
        <div style={{"display": "flex"}}>
            <div className="topGrid" id="specialHeader">
                <div>
                    <a href={urlString2} style={{"width": "80px"}}><img src={urlString + "logo.png"} alt="" className="fitSize"></img></a>
                    <header className="navigationBar">
                        <nav>
                            <ul>
                                <li><a href={urlString2 + "/#/portfolio"} className="hover-underline-animation-white">PORTFOLIO</a></li>
                                <li><a href={urlString2 + "/#/homes"} className="hover-underline-animation-white">YOUR NEW HOMES</a></li>
                                <li><a href={urlString2 + "/#/process"} className="hover-underline-animation-white">HOW IT WORKS</a></li>
                                <li><a href={urlString2 + "/#/plans"} className="hover-underline-animation-white">DOWNLOAD FREE PLANS</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
        
        <div style={{"display": "flex", "flexDirection": "column"}}>
            <img src={urlString + "portfolio/Newport-Hills_homefront-f_2000px.jpg"} className="homesImage" alt="" style={{"objectPosition": "50% 30%"}}></img>
            <h1 className="bigHeader" id="morningGloryHeader">2Morning Glory</h1>
            <div className="learnMoreOutlineAbout morningGloryLearnMore">
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/morning_glory"}>Learn More</a>
            </div>
            <img src={urlString + "portfolio/004_Residence-Two-Garage_2500px-1536x1024.jpg"} alt="" className="homesImage"></img>
            <h1 className="bigHeader" id="lotusHeader">Lotus</h1>
            <div className="learnMoreOutlineAbout lotusLearnMore">
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/lotus"}>Learn More</a>
            </div>
            <img src={urlString + "portfolio/Gallery_Header-Photo_2500px-1536x864.jpg"} alt="" className="homesImage"></img>
            <h1 className="bigHeader" id="sunflowerHeader">Sunflower</h1>
            <div className="learnMoreOutlineAbout" style={{"position": "absolute", "marginTop": "255vh", "marginLeft": "11vw"}}>
                <a className="learnMoreBoxAbout hover-highlight-animation-about" href={urlString2 + "/#/sunflower"}>Learn More</a>
            </div>
        </div>
            
        <Footer/>
    </>)
}