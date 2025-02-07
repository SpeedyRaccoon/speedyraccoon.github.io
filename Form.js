import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navigationbar';
//import Footer from './footer';

const urlString2 = ""
//const api = "https://tiny-blue-sparrow-robe.cyclic.app/"
const api = "https://backend-rho-umber-83.vercel.app/"

export default function Form() {

    window.scrollTo(0, 0);

    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientMessage, setClientMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleChangeName = (event) => {setClientName(event.target.value);}
    const handleChangeEmail = (event) => {setClientEmail(event.target.value);}
    const handleChangeMessage = (event) => {setClientMessage(event.target.value);}

    function sentForm()
    {
        if (sent)
        {
            return (
                <div style={{"display": "grid", "height": "50vh"}}>
                    <h1 style={{"textAlign": "center", "marginTop": "50px"}}>Thank you for your question. We will get back to you as soon as possible!</h1>
                    <a href={urlString2}><h3 style={{"textAlign": "center"}}>Click here to be directed back to the home page</h3></a>
                </div>
            )
        }
        else
        {
            return (
                <div className="contactTable">
                    <p1>Name</p1>
                    <input placeholder="Name" style={{"marginBottom": "10px"}} value={clientName} onChange={handleChangeName}></input>
                    <p1>Email</p1>
                    <input placeholder="Email" style={{"marginBottom": "10px"}} value={clientEmail} onChange={handleChangeEmail}></input>
                    <p1>Message</p1>
                    <textarea placeholder="Message" resize="none" value={clientMessage} onChange={handleChangeMessage}></textarea>
                    <button  className="redButton" id="contactUsButton" onClick={() => {
                        axios.post(api + "sendemail", {
                            name: clientName,
                            email: clientEmail,
                            message: clientMessage,
                        })
                        .then((response) => {
                            setClientName("");
                            setClientEmail("");
                            setClientMessage("");
                            setSent(true);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    }}>Send</button>
                </div>
            )
        }
    }

    return (
        <>
            <Navbar/>
            <h1 style={{"textAlign": "center"}}>Contact Us 2</h1>
            {sentForm()}
            <div style={{"display": "grid", "height": "200px", "backgroundColor": "black", "gridTemplateColumns": "25% 25% 20% 30%", "bottom": "0", "position": "absolute", "width": "100%"}}>
            <div>
                <a href={urlString2 + "/#/about"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">About Us</h3></a><br></br>
                <a href={urlString2 + "/#/plans"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Learn More</h3></a><br></br>
                <a href={urlString2 + "/#/process"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Let's Get Started</h3></a><br></br>
                <a href={urlString2 + "/#/directory"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Our Strategic Partners</h3></a>
            </div>
            <div>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Popular Projects and Plans</h3><br></br>
                <a href={urlString2 + "/#/morning_glory"}><h4 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px", "marginTop": "0"}} className="hover-underline-animation-white">1 bedroom, 1 bath</h4></a><br></br>
                <a href={urlString2 + "/#/lotus"}><h4 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">3 bedrooms, 2 baths</h4></a><br></br>
                <a href={urlString2 + "/#/sunflower"}><h4 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">4 bedrooms, 4 baths</h4></a><br></br>
            </div>
            <div>
                <a href={urlString2 + "/#/contact"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">FAQ</h3></a><br></br>
                <a href={urlString2 + "/#/contact"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Subscribe</h3></a><br></br>
                <a href={urlString2 + "/#/form"}><h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}} className="hover-underline-animation-white">Contact Us</h3></a><br></br>
            </div>
            <div>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Address: 7950 Cherry Ave. Suite 114 Fontana, California 91739</h3>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Phone: (909)-856-9967</h3>
                <h3 style={{"color": "white", "marginBottom": "0", "marginLeft": "30px"}}>Email: che@tang-se.com</h3>
            </div>
        </div>
        </>
    )
}