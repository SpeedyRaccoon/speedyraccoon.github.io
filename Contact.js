import React, { useState } from 'react';
import Navbar from './navigationbar';
import axios from 'axios';
import './css/contact.css'

const url2 = "https://speedyraccoon.github.io/#/form"
//const api = "https://tiny-blue-sparrow-robe.cyclic.app/"
const api = "https://backend-rho-umber-83.vercel.app/"

const questions = [
    {question: "What makes LOV ADU unique in the real estate market?", answer: "LOV ADU stands out for its innovative, patented approach to delivering high-quality, affordable homes quickly in the Greater Southern California area. Our commitment to efficiency and affordability sets us apart."},
    {question: "How do you ensure that LOV ADU are truly affordable?", answer: "LOV ADU prioritizes affordability through a combination of innovative technology, streamlined construction methods, and strategic partnerships. Our goal is to save our customers money while delivering top-notch homes."},
    {question: "What types of homes does LOV ADU offer?", answer: "We offer a diverse range of homes to cater to various needs, lifestyles, and budgets. Whether you're looking for a starter home, a family-sized dwelling, or something in between, we have options to suit you."},
    {question: "How quickly can I move into a LOV ADU?", answer: "LOV ADU' innovative approach allows for a faster home delivery process compared to traditional methods. The exact timeline may vary depending on the specific home and location, but our goal is to get you settled into your new home as quickly as possible."},
    {question: "What areas in Greater Southern California do you serve?", answer: "We aim to make high-quality, affordable homes accessible throughout the Greater Southern California area. Please contact us for specific locations and availability."},
    {question: "What is the quality of LOV ADU like?", answer: "LOV ADU is committed to delivering high-quality homes that meet or exceed industry standards. Our innovative approach ensures that you don't have to compromise on quality to attain affordability."},
    {question: "How can I get more information or start the process of owning a LOV ADU?", answer: "To get started or learn more about LOV ADU, contact our team, and or check out our about page to explore available options."}
]

let firstLoad = true;

export default function Contact() {
    
    if (firstLoad)
    {
        window.scrollTo(0, 0);
        firstLoad = false;
    }

    const [clientEmailInterest, setClientEmailInterest] = useState("");
    const [faqButton, setFaqButton] = useState(["none", "none", "none", "none", "none", "none", "none"]);
    const [sent, setSent] = useState(false);
    const handleChangeEmailInterest = (event) => {setClientEmailInterest(event.target.value);}

    function setButton(number)
    {
        let faq = ["none", "none", "none", "none", "none", "none", "none"];
        if (faqButton[number] === "none"){faq[number] = "";}
        else{faq[number] = "none";}
        setFaqButton(faq);
    }

    function symbol(number)
    {
        if (faqButton[number] === "none"){return "+";}
        else{return "-";}
    }

    function sentMessage()
    {
        if (sent)
        {
            return (
                <p1 style={{"textAlign": "center", "fontSize": "18px", "color": "grey", "marginBottom": "10px", "marginTop": "20px"}}>Thank you for your interest! We will update you when there are new things happening within the company!</p1>
            )
        }
        else
        {
            return (<></>)
        }
    }

    return (<>
        <Navbar/>
        <div style={{"display": "grid", "width": "85%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "50px"}}>
            <h3 style={{"fontSize": "36px", "textAlign": "center"}}>Frequently Asked Questions</h3>
            {questions.map((qa, index) => (
                <>
                    <button className="faqButton" onClick={() => {setButton(index)}}><div style={{"display": "grid", "gridTemplateColumns": "2% 98%"}}><div>{symbol(index)}</div><div>{qa.question}</div></div></button>
                    <p1 className="faqAnswer" style={{"display": faqButton[index]}}>{qa.answer}</p1>
                </>
            ))}
            <h3 style={{"textAlign": "center", "marginTop": "50px"}}>HAVE SOMETHING NOT BEING ADDRESSED?</h3>
            <button className="redButton" id="contactUsButton" onClick={() => window.location.href=url2}>Contact Us HereNow</button>
        </div>
        <div style={{"display": "grid", "width": "800px", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "50px"}}>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Subscribe</h1>
            <p1 style={{"textAlign": "center", "fontSize": "18px", "color": "grey", "marginBottom": "10px"}}>Sign up to hear about all the latest promotions!</p1>
            <div style={{"display": "grid", "gridTemplateColumns": "80% 5% 15%"}}>
                <input placeholder="Email" style={{"height": "40px", "fontSize": "18px"}} value={clientEmailInterest} onChange={handleChangeEmailInterest}></input>
                <div></div>
                <button className="redButton" onClick={() => {
                    axios.post(api + "subscribe", {
                        email: clientEmailInterest
                    })
                    .then((response) => {
                        setClientEmailInterest("");
                        setSent(true);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }}>Sign Up</button>
            </div>
            {sentMessage()}
        </div>        
    </>)
}