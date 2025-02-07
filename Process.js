//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import './css/process.css'

const urlString = ""

export default function Process() {

    window.scrollTo(0, 0)

    return (<>
        <Navbar/>
            
            <div style={{"display": "flex", "width": "90%", "marginLeft": "auto", "marginRight": "auto", "flexDirection": "column"}}>
                <img src={urlString + "timeline2.jpg"} style={{"marginLeft": "auto", "marginRight": "auto", "width": "100%"}} alt=""></img>
                <h1 style={{"fontSize": "36px", "marginBottom": "100px", "marginTop": "50px"}}>The Three Stages</h1>
                <div className="threeStagesGrid">
                    <div style={{"display": "flex", "flexDirection": "column"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Stage 1: Laying a Robust Foundation</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            The new home begins by laying a robust foundation for lasting structural integrity. This phase involves meticulous attention to detail where electrical wires are pulled, plumbing pipes are connected, and the concrete foundation is poured. This critical step ensures that your home's essential systems are in place, setting the groundwork for functionality and efficiency. By carefully orchestrating the plumbing and electrical components, we ensure that the foundation of your new home will remain strong for decades to come.
                        </p2>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Stage 2: Constructing the Core Structure</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>The second step focuses on constructing the core structure of your home. First, the roof of the house is assembled on the ground, ensuring each component fits seamlessly and greatly expediting the process of roof construction compared to traditional methods. Next, a series of pulleys will raise the roof and hold it in place just above the height of the panels. Finally, the pre-engineered wall panels will be slid into position, creating the skeletal framework of your future home.</p2>
                    </div>
                    <div style={{"display": "flex", "flexDirection": "column"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Stage 3: Architectural Finishes that Harmonize</p1>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>In the final phase, our focus shifts to the architectural finishes that harmonize your new home with the surrounding community and create a welcoming living environment. Windows are installed that flood your space with natural light, beautifully crafted roof tiles are added that protect your home against the elements, and insulation is fixed into place ensuring that every inch of your home is properly insulated for energy efficiency. Finally, the interior and exterior painting is completed with meticulous attention to detail, ensuring that your new home is built exactly to your specifications. Our three-step process is not only cost-effective but also results in a high-quality, energy-efficient home that's built to last. We pride ourselves on delivering not just houses, but homes where families can create cherished memories for generations to come.</p2>
                    </div>
                </div>
                <h1 style={{"fontSize": "36px", "marginBottom": "100px", "marginTop": "100px"}}>Options for Building Your New Home</h1>
                <div className="oddOptions">
                    <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Option 1: Building Through Us</p1>
                        <img src={urlString + "us.png"} className="widthImage" alt=""></img>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            Our fastest option. Our professional team will overlook the entire process and ensure that everything is built according to your desires. Be ready to move into your new home in two months time.
                        </p2>
                    </div>
                    <img src={urlString + "us.png"} className="us" alt=""></img>
                </div>
                <div className="evenOptions">
                    <img src={urlString + "contractor.png"} className="contractors" alt=""></img>
                    <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Option 2: Going Through Our Contractors</p1>
                        <img src={urlString + "contractor.png"} className= "widthImage" style={{"width": "150px"}}alt=""></img>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            Our most flexible option. After deciding that you want to build a home, you choose the contractor that you would like to help build your home. They will meet with you to discuss their pricing and the best course of action for your new home. All the contractors on our list have worked with us for years and we fully trust in their work.
                        </p2>
                    </div>
                </div>
                <div className="oddOptions">
                    <div style={{"display": "flex", "flexDirection": "column", "marginTop": "auto", "marginBottom": "auto"}}>
                        <p1 style={{"fontSize": "28px", "fontWeight": "bold", "marginBottom": "20px"}}>Option 3: Do It Yourself</p1>
                        <img src={urlString + "diy.png"} className="widthImage" alt=""></img>
                        <p2 style={{"fontSize": "20px", "marginBottom": "50px", "marginRight": "70px", "lineHeight": "150%"}}>
                            The best option for creating an unforgettable family project. We will send you all the materials for the house structure that you need, including detailed plans for how to assemble your new home and an engineer to visually inspect your home once it is completed to have it certified and ready to move in.
                        </p2>
                    </div>
                    <img src={urlString + "diy.png"} className="diy" alt=""></img>
                </div>
                <p1></p1>
            </div>
        <Footer/>
        {//Discover a unique opportunity to realize your dream home with minimal upfront costs. With our assistance, we will cover a significant portion, typically around 50% of the construction expenses. Following completion, we'll facilitate renting out the new home and compensate you with a portion of the rental income. After a period of 10-20 years, depending on the percentage agreement, ownership of the ADU home will be transferred back, making you the proud proprietor. Don't miss out on this chance to achieve homeownership with ease and financial benefits along the way. Note: This option only applies to homeowners of select locations.
        }
    </>)
}