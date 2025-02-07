import React, { useState } from 'react';
import './css/footer.css';

export default function Footer()
{
    return (<>
        <header><div>
            <img src="logo.png" alt="Logo" style={{ margin: '0 auto'}}/>
        </div></header>

        <div class="contact">
            <h><a href="#/ContactUs">Contact us</a> for a free consultation and free estimates</h>
        </div>
        
        <div class="details">
            <div>
                <h3>Our Address</h3>
                <p>7950 Cherry Avenue Suite #114</p>
                <p>Fontana, California 92336</p>
            </div>

            <div>
                <h3>Hours of Operation</h3>
                <p>Mon – Sat</p>
                <p>7:00AM – 6:00PM</p>
                <p>Closed on Sunday</p>
            </div>

            <div>
                <h3>ADU Inquiries</h3>
                <p>Email: <a href="mailto:che@lovadu.com">che@lovadu.com</a></p>
                <p>Phone: (408) 431 – 6470</p>
            </div>

            <div>
                <h3>SE/PE Engineers</h3>
                <p>Email: <a href="mailto:che@tang-se.com">che@tang-se.com</a></p>
                <p>Phone: (909) 856 – 9967</p>
            </div>
        </div>
    </>)
}