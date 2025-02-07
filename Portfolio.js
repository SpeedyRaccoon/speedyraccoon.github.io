//import { useState } from 'react';
import Navbar from './navigationbar';
import Footer from './footer';
import './css/portfolio.css'

const urlString = ""

export default function Portfolio() {

    const images = [
        "001_Residence-One-Entry_2500px-1536x1024.jpg",
        //"004_Residence-Two-Garage_2500px-1536x1024.jpg",
        "01-Plan-1-Front-Exterior_2500px-1536x1022.jpg",
        "031_Residence-Two-Kitchen_2500px-1536x1024.jpg",
        "123_2500px-1536x1024.jpg",
        "130_2500px-1536x1024.jpg",
        "1724-Newport-Hills-10_2500px-1536x1026.jpg",
        "1724-Newport-Hills-11_2500px-1536x1025.jpg",
        "1724-Newport-Hills-12_2500px-1536x1018.jpg",
        "1724-Newport-Hills-13_2500px-1536x1056.jpg",
        "1801-Newport-Hills-6_2500px-1536x1025.jpg",
        "1801-Newport-Hills-7_2500px-1536x1030.jpg",
        "421-Dahlia_homefront_2500px-1536x1030.jpg",
        "421-Dahlia_kitchen-light-fixture_2500px-1536x1025.jpg",
        "421-Dahlia_Kitchen_2500px-1536x1017.jpg",
        "421-Dahlia_office-space_2500px-1536x1046.jpg",
        "421-Dahlia_stove_Backsplash_2500px-1536x1025.jpg",
        "Etiwanda_homefront-2_2500px-1536x1024.jpg",
        "Etiwanda_homefront-4_2500px-1536x1024.jpg",
        //"Gallery_Header-Photo_2500px-1536x864.jpg",
        "ManningHomes_15Deerwood_Entry_9712-4x200_2500px-1365x2048.jpg",
        "ManningHomes_15Deerwood_Office_6833-4x200_2500px-1536x1024.jpg",
        "ManningHomes_15Deerwood_RearYard_2094-4x200_2500px-1536x1024.jpg",
        "ManningHomes_15Deerwood_RearYard_2152-11x8_2500px-1536x1024.jpg",
        "ManningHomes_15Deerwood_WineRoom_7108-4x200_2500px-1365x2048.jpg",
        "ManningHomes_SilverRidge_PlanTwo-DiningRoom_5311c-11x8_2500px-1536x1034.jpg",
        "ManningHomes_SilverRidge_PlanTwo-ExteriorAM_8741b-11x8_2500px-1536x1022.jpg",
        "ManningHomes_SilverRidge_PlanTwo-Exterior_8377c-11x8_2500px-1536x1001.jpg",
        "ManningHomes_SilverRidge_PlanTwo-Patio_7496b-11x8_2500px-1536x1038.jpg",
        "ManningHomes_SilverRidge_PlanTwo-xCameo_8241-11x8_2500px-1536x1024.jpg",
        "ManningHomes_SilverRidge_PlanTwo-xCameo_8249-11x8_2500px-1536x1024.jpg",
        "ManningHomes_SilverRidge_PlanTwo-xCameo_8256-11x8_2500px-1365x2048.jpg",
        //"Newport-Hills_homefront-f_2000px.jpg",
        "Newport-Hills_living-2_2500px-1536x1030.jpg",
        "Oakhill-Bungalow_2500px-1536x1022.jpg",
        "Port-Bristol_bathroom-faucet_2500px-1536x1024.jpg",
        "Port-Bristol_bathroom-tub-2_2500px-1536x1024.jpg",
        "Port-Bristol_fireplace-Copy_2500px-1365x2048.jpg",
        "Port-Bristol_front-exterior-lighting_2500px-1365x2048.jpg",
        "Port-Bristol_kitchen-2_2500px-1536x1024.jpg",
        "Port-Bristol_kitchen-faucet-2_2500px-1536x1024.jpg",
        "San-Miguel-Summer-House_summer-house-sign-3_2500px-1536x1024.jpg",
    ];

    return (<>
        <Navbar/>
            <div style={{"display": "flex", "flexDirection": "column"}}>
                <h1 style={{"textAlign": "center", "fontSize": "48px"}}>Portfolio</h1>
                <p1 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "fontSize": "20px", "lineHeight": "150%", "marginBottom": "2vh"}}>LOV ADU is committed to the art and design of building new homes. Homes that embrace your everyday life and reflect our clients’ unique timeless character.</p1>
                <div className="portfolioGrid">
                    {images.map((picture) => (
                        <div className="portfolioImage">
                            <img src={urlString + "portfolio/" + picture} loading="lazy" style={{"width": "100%", "height": "100%", "objectFit": "cover", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                        </div>
                    ))}
                </div>
            </div>
            <div className="testimonialWidth">
                <h1 style={{"textAlign": "center", "fontSize": "48px"}}>Customer Testimonials</h1>
                <div className="markKevin">
                    <img src={urlString + "mark.png"} style={{"borderRadius": "999px", "width": "150px", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <p1 className="markKevinParagraph">“I couldn't believe how easy and affordable it was to get our dream home with LOV ADU. The innovative approach they use made the whole process a breeze, and we were able to save a significant amount of money. The best part is how seamlessly our new home blends into the community. LOV ADU truly delivered on their promise!”<br></br>- Mark Cuban</p1>
                </div>
                <div className="lori">
                <p1 style={{"marginLeft": "70px", "fontSize": "18px", "lineHeight": "150%", "marginTop": "auto", "marginBottom": "auto"}} className="loriBig">“LOV ADU has made our dream of homeownership a reality. Their commitment to saving us money while delivering a beautiful, quality home is truly remarkable. We can't thank them enough for their innovative approach and dedication to making the process stress-free.”<br></br>- Lori Greiner</p1>
                    <img src={urlString + "lori.jpg"} style={{"borderRadius": "999px", "width": "150px", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <p1 className="markKevinParagraph loriSmall">“LOV ADU has made our dream of homeownership a reality. Their commitment to saving us money while delivering a beautiful, quality home is truly remarkable. We can't thank them enough for their innovative approach and dedication to making the process stress-free.”<br></br>- Lori Greiner</p1>
                </div>
                <div className="markKevin">
                    <img src={urlString + "kevin.jpg"} style={{"borderRadius": "999px", "width": "150px", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <p1 className="markKevinParagraph">“LOV ADU has transformed the way we think about homeownership. Their commitment to affordability and innovation is evident in every aspect of their homes. We're thrilled with the seamless integration into our community and the savings we enjoyed. Thank you, LOV ADU!”<br></br>- Kevin O’Leary</p1>
                </div>
            </div>
        <Footer/>
    </>)
}