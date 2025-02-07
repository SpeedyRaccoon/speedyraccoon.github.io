import React, { useState, useEffect } from 'react';
import './css/navbar.css'
import axios from 'axios';

const urlString = "";
const urlString2 = "";
//const api = "https://tiny-blue-sparrow-robe.cyclic.app/"
const api = "https://backend-rho-umber-83.vercel.app/"

// Get all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Add event listeners to each dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function(event) {
    // Toggle the dropdown
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

    // Prevent event from propagating to parent elements
    event.stopPropagation();
  });
});

// Close all dropdowns if the user clicks outside
document.addEventListener('click', function(event) {
  dropdowns.forEach(dropdown => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    if (dropdownContent && !dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
});


export default function Navigationbar()
{
    // axios.get(api + "mainlogo")
    const [dropboxState, setDropboxState] = useState(false);
    const [dropbox, setDropbox] = useState(() => {
        return <div></div>;
    })

    function toggleDropboxState()
    {
        setDropboxState(!dropboxState)
    }

    useEffect(() => {
        if (dropboxState)
        {
            setDropbox(<header>
                <nav>
                    <ul1>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">HOME</a></li>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">Welcome</a></li>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">Let's Partner</a></li>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">Get Started</a></li>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">Smart Home</a></li>
                        <li><a href={urlString2 + "/#/plans"} className="hover-underline-animation">DOWNLOAD FREE PLANS</a></li>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">About</a></li>
                        <li><a href={urlString2 + "/"} className="hover-underline-animation">Contact Us</a></li>
                        
                        <li><a href={urlString2 + "/#/portfolio"} className="hover-underline-animation">PORTFOLIO</a></li>
                        <li><a href={urlString2 + "/#/homes"} className="hover-underline-animation">YOUR NEW HOMES</a></li>
                        <li><a href={urlString2 + "/#/process"} className="hover-underline-animation">HOW IT WORKS</a></li>
                        
                    </ul1>
                </nav>
            </header>)
        }
        else
        {
            setDropbox(<div></div>);
        }
    }, [dropboxState])

    return (
        <React.Fragment>
            {/* - Commented out on Jan 8, 2025.  Not sure what it is for...
            <button onClick={toggleDropboxState} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {dropbox}
            */}


            <div>
                <a href={"#"}><img src="originallogo.png" alt="" className="fitSize" ></img></a>
                <header className="navigationBar">
                        <nav>
                            <ul class="nav-links">
                                <li><a href={"#"} className="hover-underline-animation">Mission</a></li>
                                <li class="dropdown">
                                    <a href="#/partnerCustomers" className="dropbtn">Let's Partner</a>
                                    <ol class="dropdown-content">
                                        <li><a href="#/partnerCustomers" className="hover-underline-animation">Homeowners</a></li>
                                        <li><a href="#/partnerContractors" className="hover-underline-animation">Contractors</a></li>
                                    </ol></li>
                                <li class="dropdown">
                                    <a href={"#/phase1PermittingAndPlanning"} className="hover-underline-animation">Get Started</a>
                                    <ol class="dropdown-content">
                                        <li><a href="#/phase1PermittingAndPlanning" className="hover-underline-animation">Permitting</a></li>
                                        <li><a href="#/phase2Construction" className="hover-underline-animation">Construction</a></li>
                                    </ol></li>
                                <li><a href={"#/smartHome"} className="hover-underline-animation">Smart Home</a></li>
                                <li class="dropdown">
                                    <a href={"#/plans"} className="hover-dropbtn-animation">Free Plans</a>
                                    <ol class="dropdown-content">
                                        <li><a href="files/412.pdf" className="hover-underline-animation">1-BR/1-BA Plans</a></li>
                                        <li><a href="files/755.pdf" className="hover-underline-animation">2-BR/2-BA Plans</a></li>
                                        <li><a href="files/1033.pdf" className="hover-underline-animation">3-BR/3-BA Plans</a></li>
                                        <li><a href="#/LibraryPlan" className="hover-underline-animation">Design Library</a></li>
                                    </ol></li>
                                <li><a href={"#/About"} className="hover-underline-animation">About</a></li>
                                {/* January 7, 2025:  Exclude "Contact Us" from the Menu Bar. */}
                                {/* <li><a href={"/"} className="hover-underline-animation">Contact Us</a></li> */} 
                            </ul>
                        </nav>
                </header>
             </div>

        </React.Fragment>
    )
}