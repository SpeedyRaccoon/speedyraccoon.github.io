import React, { useState } from 'react';
import Navbar from './navigationbar';
import './css/contactUs.css';

export default function ContactUs()
{

    return (
        <>
            <Navbar/>
            <div class="container">
                <div class="left-panel">
                    <div class="header">
                        <strong>LOV ADU</strong> is committed to providing you with detailed information, answering all your questions, and creating 
                        effective solutions tailored specifically to your ADU construction needs. Our comprehensive, multi-phase approach focuses on 
                        delivering smart, high-value results. Our dedicated teams of Engineers and Developers are here to serve you every step of the way.
                    </div>
                    <div class="contact-info">
                        <div class="contact-group">
                            <p style={{"fontSize": "22px"}}><strong>Our Address</strong></p>
                            <p>7950 Cherry Avenue Suite #114</p>
                            <p>Fontana, California 92336</p>
                        </div>
                        <div class="contact-group">
                            <p style={{"fontSize": "22px"}}><strong>Hours of Operation</strong></p>
                            <p>Mon – Sat</p>
                            <p>7:00AM – 6:00PM</p>
                            <p>Closed On Sunday</p>
                        </div>
                        <div class="contact-group">
                            <p style={{"fontSize": "22px"}}><strong>ADU Inquiries</strong></p>
                            <p>Email: <a href="mailto:che@lovadu.com">che@lovadu.com</a></p>
                            <p>Phone: (408) 431 – 6470</p>
                        </div>
                        <div>
                            <p style={{"fontSize": "22px"}}><strong>Structural/Professional Engineers</strong></p>
                            <p>Email: <a href="mailto:che@tang-se.com">che@tang-se.com</a></p>
                            <p>Phone: (909) 856 – 9967</p>
                        </div>
                    </div>
                </div>

                <div class="right-panel">
                    <form>
                        <div class="form-group">
                            <label for="name">Name*</label>
                            <input type="text" id="name" name="name" placeholder="Full Name" required></input>
                        </div>
                        <div class="form-group">
                            <label for="email">Email*</label>
                            <input type="email" id="email" name="email" placeholder="Email_ID@domain.com" required></input>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone*</label>
                            <input type="tel" id="phone" name="phone" placeholder="555-555-5555" required></input>
                        </div>
                        <div class="form-group">
                            <label for="message">Message*</label>
                            <textarea id="message" name="message" placeholder="Tell us your thoughts..." required></textarea>
                        </div>
                        <div>
                        <button type="submit" class="submit-button">Send</button></div>
                    </form>
                    <div class="disclaimer">
                        By submitting this email, you acknowledge that you have read and agree to our Privacy Policy and Terms of Service, 
                        and consent to us collecting and using your personal information to respond to your inquiry. Message and data rates may apply. 
                        You can opt-out at any time by following the instructions provided in the messages.
                    </div>
                </div>
            </div>
        </>
    )
}