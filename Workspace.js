import { useState } from 'react';

export default function Workspace() {

    const [expand, setExpand] = useState([false, false, false]);
    const [clientEmail, setClientEmail] = useState("");

    const handleChangeEmail = (event) => {setClientEmail(event.target.value);}

    function leng()
    {
        if (expand[0])
        {
            return (
                <>
                    <p2 style={{"textAlign": "center", "fontSize": "18px", "color": "grey"}}>Che is a highly accomplished structural engineer with over twenty years of invaluable experience in the field. His impressive career has been marked by a prolific portfolio of successful projects throughout the greater Southern California area. Throughout his career, Che has consistently demonstrated his expertise in designing and overseeing the construction of buildings that are not only aesthetically pleasing but also built to withstand the unique challenges of the region, such as seismic activity. His dedication to creating safe and resilient structures has earned him a reputation as a distinguished structural engineer. Che's work has made a significant impact on the community, as the buildings he has designed and constructed have contributed to the well-being and safety of countless residents in Southern California. His commitment to excellence in structural engineering has played a vital role in ensuring the structural integrity of essential facilities, such as schools and hospitals, where the safety of occupants is of paramount importance. Che's legacy as a structural engineer in Southern California is marked by his dedication to excellence, a commitment to safety, and a portfolio of outstanding projects that have left a lasting impact on the region. His contributions to the field continue to be celebrated, making him a respected and distinguished figure in structural engineering.<br></br><button style={{"color": "rgb(210, 47, 37)", "fontSize": "18px", "backgroundColor": "transparent", "border": "none", "cursor": "pointer", "marginTop": "3vh"}} onClick={() => {setExpand([false, expand[1], expand[2]])}}>- Show Less</button></p2>
                </>
            )
        }
        else
        {
            return (
                <>
                    <p2 style={{"textAlign": "center", "fontSize": "18px", "color": "grey"}}>Che is a highly accomplished structural engineer with over two decades of invaluable experience in the field. His impressive career has been marked by a prolific portfolio of successful projects throughout the greater Southern California area.<button style={{"color": "rgb(210, 47, 37)", "fontSize": "18px", "backgroundColor": "transparent", "border": "none", "cursor": "pointer", "marginTop": "3vh"}} onClick={() => {setExpand([true, expand[1], expand[2]])}}>+ Show More</button></p2>
                </>
            )
        }
    }

    function phey()
    {
        if (expand[1])
        {
            return (
                <>
                    <p2 style={{"textAlign": "center", "fontSize": "18px", "color": "grey"}}>Che Tang boasts over two decades of experience as a distinguished software engineer. His career has been marked by a remarkable journey through the ever-evolving landscape of technology. Che's expertise and dedication have made him an integral part of the teams he's worked with, leaving an indelible mark on the companies fortunate enough to have him. One significant chapter in Che's career was his tenure at Cisco Systems, a global leader in networking technology. During his time at Cisco, Che played a pivotal role in driving innovation and excellence in software engineering. His contributions ranged from developing cutting-edge solutions to solving complex technical challenges, all of which contributed to the success of the company's products and services. As a software engineer, Che demonstrated an uncanny ability to navigate the intricacies of coding, software architecture, and system design. His proficiency in various programming languages and frameworks allowed him to adapt to the ever-changing demands of the tech industry with ease. Che Tang's journey as a software engineer is a testament to the enduring spirit of innovation that drives the tech industry forward. His contributions at Cisco and throughout his career serve as an inspiration to aspiring engineers and a reminder of the impact that dedication and expertise can have in shaping the future of technology. Che's legacy continues to shine as he remains a recognized and respected figure in the software engineering community.<br></br><button style={{"color": "rgb(210, 47, 37)", "fontSize": "18px", "backgroundColor": "transparent", "border": "none", "cursor": "pointer", "marginTop": "3vh"}} onClick={() => {setExpand([expand[0], false, expand[2]])}}>- Show Less</button></p2>
                </>
            )
        }
        else
        {
            return (
                <>
                    <p2 style={{"textAlign": "center", "fontSize": "18px", "color": "grey"}}>Che Tang boasts over two decades of experience as a distinguished software engineer. His career has been marked by a remarkable journey through the ever-evolving landscape of technology. Che's expertise and dedication have made him...<button style={{"color": "rgb(210, 47, 37)", "fontSize": "18px", "backgroundColor": "transparent", "border": "none", "cursor": "pointer", "marginTop": "3vh"}} onClick={() => {setExpand([expand[0], true, expand[2]])}}>+ Show More</button></p2>
                </>
            )
        }
    }

    function pek()
    {
        if (expand[2])
        {
            return (
                <>
                    <p2 style={{"textAlign": "center", "fontSize": "18px", "color": "grey"}}>Betty Tang is a highly accomplished real estate investor with an impressive and diverse portfolio spanning over 30 years. Her journey in the real estate industry has been marked by astute investments, strategic acquisitions, and a deep understanding of the intricacies of property markets both in the United States and overseas. Throughout her career, Betty has displayed a remarkable ability to identify lucrative real estate opportunities. Her keen eye for market trends, coupled with her extensive network of industry contacts, has allowed her to make sound investment decisions that have consistently yielded positive returns. One of the distinguishing features of Betty's real estate career is her broad geographical reach. She owns properties not only across the United States but also in international markets. This global perspective has afforded her the advantage of diversifying her investment portfolio and mitigating risks associated with regional market fluctuations. Betty's extensive experience has also made her a respected figure within the real estate community. She is often sought after for her insights and expertise, and her willingness to mentor and share her knowledge has helped aspiring investors navigate the complexities of the real estate market. Betty Tang's legacy in the real estate industry is one of exemplary success and foresight. Her ability to identify, acquire, and manage properties with precision has not only secured her financial prosperity but has also solidified her reputation as a prominent figure in the world of real estate investing. With over three decades of experience, Betty continues to thrive in an ever-evolving market, setting an inspiring example for both seasoned professionals and newcomers in the field.<br></br><button style={{"color": "rgb(210, 47, 37)", "fontSize": "18px", "backgroundColor": "transparent", "border": "none", "cursor": "pointer", "marginTop": "3vh"}} onClick={() => {setExpand([expand[0], expand[1], false])}}>- Show Less</button></p2>
                </>
            )
        }
        else
        {
            return (
                <>
                    <p2 style={{"textAlign": "center", "fontSize": "18px", "color": "grey"}}>Betty Tang is a highly accomplished real estate investor with an impressive and diverse portfolio spanning over 30 years. Her journey in the real estate industry has been marked by astute investments, strategic acquisitions...<button style={{"color": "rgb(210, 47, 37)", "fontSize": "18px", "backgroundColor": "transparent", "border": "none", "cursor": "pointer", "marginTop": "3vh"}} onClick={() => {setExpand([expand[0], expand[1], true])}}>+ Show More</button></p2>
                </>
            )
        }
    }
    return (<>
        <div style={{"display": "grid", "height": "90vh"}}>
            <img src="mansion.jpg" style={{"width": "100%", "height": "90vh", "objectFit": "cover", "objectPosition": "50% 50%", "position": "absolute", "zIndex": "-1", "filter": "brightness(80%)"}} alt=""></img>
            <h2 style={{"color": "white", "textAlign": "center"}}>ADU HOME</h2>
            <h2 style={{"color": "white", "textAlign": "center", "marginTop": "14vh", "marginBottom": "0"}}>T&T Home</h2>
            <h1 style={{"color": "white", "textAlign": "center", "marginTop": "0vh", "fontSize": "60px", "marginBottom": "-10vh", "fontWeight": "normal"}}>FASTER, SMARTER, SAFER</h1>
            <hr style={{"width": "900px", "color": "white", "borderTop": "none", "borderLeft": "none", "borderRight": "none", "marginTop": "0", "borderBottomWidth": "1px"}}></hr>
            <h2 style={{"color": "white", "textAlign": "center", "marginTop": "2vh", "fontWeight": "lighter"}}>We make owning a home easy!</h2>
            <button style={{"width": "160px", "marginLeft": "auto", "marginRight": "auto", "backgroundColor": "rgb(210, 47, 37)", "border": "none", "color": "white", "cursor": "pointer", "marginBottom": "19vh", "fontWeight": "bolder", "fontSize": "16px"}} onClick={() => {
                window.scrollTo(0, 1500);
            }}>View Plans</button>
        </div>
        <div style={{"display": "grid"}}>
            <p1 style={{"textAlign": "center", "marginTop": "7vh", "fontSize": "24px", "marginBottom": "24px"}}>Welcome</p1>
            <p2 style={{"textAlign": "center", "marginBottom": "15vh", "fontSize": "18px", "color": "grey"}}>There's so much to see here. So, take your time, look around, and learn all there is to know about us. We hope<br></br>you enjoy our plans and take a moment to drop us a line.</p2>
        </div>
        <div style={{"display": "grid", "width": "1235px", "marginLeft": "auto", "marginRight": "auto"}}>
            <h3 style={{"marginBottom": "1vh", "fontSize": "24px"}}>MEET THE TEAM</h3>
            <hr style={{"width": "100%", "marginBottom": "6vh", "opacity": "30%"}}></hr>
            <div style={{"display": "grid", "gridTemplateColumns": "33% 33% 33%", "width": "100%"}}>
                <div style={{"display": "grid"}}>
                    <img src="IMG_3240.jpg" style={{"width": "90%", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "1000px", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <p1 style={{"fontSize": "24px", "textAlign": "center", "marginBottom": "3vh", "marginTop": "3vh"}}>Che L. Tang</p1>
                </div>
                <div style={{"display": "grid"}}>
                    <img src="IMG_3240.jpg" style={{"width": "90%", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "1000px", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <p1 style={{"fontSize": "24px", "textAlign": "center", "marginBottom": "3vh", "marginTop": "3vh"}}>Che K. Tang</p1>
                </div>
                <div style={{"display": "grid"}}>
                    <img src="IMG_3240.jpg" style={{"width": "90%", "objectFit": "cover", "objectPosition": "50% 50%", "borderRadius": "1000px", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                    <p1 style={{"fontSize": "24px", "textAlign": "center", "marginBottom": "3vh", "marginTop": "3vh"}}>Betty P. Tang</p1>
                </div>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "33% 33% 33%", "width": "100%"}}>
                <div style={{"display": "grid", "width": "90%", "marginLeft": "auto", "marginRight": "auto"}}>{leng()}</div>
                <div style={{"display": "grid", "width": "90%", "marginLeft": "auto", "marginRight": "auto"}}>{phey()}</div>
                <div style={{"display": "grid", "width": "90%", "marginLeft": "auto", "marginRight": "auto"}}>{pek()}</div>
            </div>
        </div>
        <div style={{"display": "grid", "width": "1235px", "marginLeft": "auto", "marginRight": "auto", "height": "400px"}}>
            <h3 style={{"marginBottom": "0", "fontSize": "24px"}}>OUR HOMES</h3>
            <hr style={{"width": "100%", "marginBottom": "0", "opacity": "30%", "marginTop": "-70px", "borderLeft": "none", "borderRight": "none", "borderBottom": "none"}}></hr>
            <div style={{"display": "grid", "gridTemplateColumns": "33% 33% 33%", "width": "100%", "marginTop": "-120px"}}>
                <div style={{"display": "grid"}}>
                    <img src="house1.jpg" className="testing" alt=""></img>
                    <h1 style={{"color": "white", "textAlign": "center", "marginTop": "10vh", "marginBottom": "0"}}>Listing #1 412 S.F</h1>
                    <h2 style={{"color": "white", "textAlign": "center"}}>1 Bedroom, 1 Bath</h2>
                </div>
                <div style={{"display": "grid"}}>
                    <img src="house2.jpg" className="testing" alt=""></img>
                    <h1 style={{"color": "white", "textAlign": "center", "marginTop": "10vh", "marginBottom": "0"}}>Listing #2 775 S.F</h1>
                    <h2 style={{"color": "white", "textAlign": "center"}}>3 Bedroom, 2 Bath</h2>
                </div>
                <div style={{"display": "grid"}}>
                    <img src="house3.jpg" className="testing" alt=""></img>
                    <h1 style={{"color": "white", "textAlign": "center", "marginTop": "10vh", "marginBottom": "0"}}>Listing #3 1033 S.F</h1>
                    <h2 style={{"color": "white", "textAlign": "center"}}>4 Bedroom, 2 Bath</h2>
                </div>
            </div>
        </div>
        <div style={{"display": "grid", "width": "1235px", "marginLeft": "auto", "marginRight": "auto"}}>
            <h3 style={{"marginBottom": "1vh", "fontSize": "24px"}}>OUR SERVICES</h3>
            <hr style={{"width": "100%", "marginBottom": "6vh", "opacity": "30%"}}></hr>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%", "marginBottom": "40px"}}>
                <img src="counter.jpg" style={{"width": "90%", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                <div style={{"display": "grid", "gridTemplateRows": "50% 50%"}}>
                    <h2 style={{"textAlign": "center", "marginBottom": "0", "marginTop": "70px"}}>Real Estate Done Right</h2>
                    <p2 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "width": "90%", "fontSize": "18px", "color": "grey"}}>Nervous about your property adventure? Don’t be. Whether you're getting ready to move into a new home, earn passive income, or just looking for some answers, our top-notch skills ensure you get the best experience possible. It’s what we love to do.</p2>
                </div>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%", "marginBottom": "40px"}}>
                <div style={{"display": "grid", "gridTemplateRows": "50% 50%"}}>
                    <h2 style={{"textAlign": "center", "marginBottom": "0", "marginTop": "70px"}}>Quick, Safe, and Easy</h2>
                    <p2 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "width": "90%", "fontSize": "18px", "color": "grey"}}>Our home designs allow for your new home to be constructed in record time. Our new and innovative technology transforms how future homes will be built thereby decreasing both the cost and build time while improving upon the safety of the new home.</p2>
                </div>
                <img src="interor.jpg" style={{"width": "90%", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "50% 50%", "marginBottom": "40px"}}>
                <img src="window.jpg" style={{"width": "90%", "marginLeft": "auto", "marginRight": "auto"}} alt=""></img>
                <div style={{"display": "grid", "gridTemplateRows": "50% 50%"}}>
                    <h2 style={{"textAlign": "center", "marginBottom": "0", "marginTop": "70px"}}>Rely on Expertise</h2>
                    <p2 style={{"textAlign": "center", "marginLeft": "auto", "marginRight": "auto", "width": "90%", "fontSize": "18px", "color": "grey"}}>We have an extensive team of engineers, contractors and architects here to assist whether you choose our team to help with the construction or decide to turn this into a fun DIY project with the family. You can always trust us to find you what you need fast. We want you to feel confident and educated every step of the way.</p2>
                </div>
            </div>
        </div>
        <div style={{"display": "grid", "width": "800px", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "50px"}}>
            <h1 style={{"textAlign": "center", "fontSize": "40px"}}>Subscribe</h1>
            <p1 style={{"textAlign": "center", "fontSize": "18px", "color": "grey", "marginBottom": "10px"}}>Sign up for real estate news.</p1>
            <div style={{"display": "grid", "gridTemplateColumns": "80% 5% 15%"}}>
                <input placeholder="Email" style={{"height": "40px", "fontSize": "18px"}} value={clientEmail} onChange={handleChangeEmail}></input>
                <div></div>
                <button style={{ "backgroundColor": "rgb(210, 47, 37)", "border": "none", "color": "white", "cursor": "pointer", "fontWeight": "bolder", "fontSize": "18px"}}>Sign Up</button>
            </div>  
        </div>
        <div style={{"display": "grid", "width": "100%", "backgroundColor": "black", "height": "125px"}}>
            <p1 style={{"color": "rgb(169, 169, 169)", "marginTop": "55px", "marginLeft": "10%", "fontSize": "18px"}}>Copyright © 2023 ADU Home - All Rights Reserved.</p1>
        </div>
    </>)
}