import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar/page";
import "./BlogpageStyle.css"
import firstImg from "../../../../public/blog-2.webp";
import secondImg from "../../../../public/blog-1.webp";
import thirdImg from "../../../../public/blog-3.webp";
import Footer from "@/app/components/footer/page";

const About = () => {

    return (
        <>
        <div style={{ backgroundColor: '#FCF7EE' }} >
            <Navbar />
            {/* First container  */}

            <div className="aboutmain_container" >
                <div className="aboutcontent_container" >
                    <p className="acoutcontent_paraone">TIPS FOR YOU</p>
                    <h1>Why Skin Care is Important!</h1>
                    <p className="acoutcontent_paratwo">Quickly pursue granular synergy after just-in-time niche markets. Phosfluorescently syndicate sticky
                        content whereas robust resources. Uniquely target integrated meta-services and inexpensive process
                        meta-services and inexpensive processmeta-services and inexpensive process
                        improvements. Distinctively matrix robust ideas through customer-directed leadership skills. Efficiently
                        evolve.</p>
                    <p className="paraborder" ></p>
                </div>
                <div className="aboutimage_container"  >
                    <Image className="about_pageimage" src={firstImg} alt="img"/>
                </div>
            </div>


            {/* second Container  */}
            <div className="aboutmain_container" >
            <div className="aboutimage_container"  >
                    <Image className="about_pageimage" src={secondImg} alt="img"/>
                </div>
                
                <div className="aboutcontent_container" >
                    <p className="acoutcontent_paraone">TIPS FOR YOU</p>
                    <h1>Why Moisture Cream used Before Facing!</h1>
                    <p className="acoutcontent_paratwo">Quickly pursue granular synergy after just-in-time niche markets. Phosfluorescently syndicate sticky
                        content whereas robust resources. Uniquely target integrated meta-services and inexpensive process
                        meta-services and inexpensive processmeta-services and inexpensive process
                        improvements. Distinctively matrix robust ideas through customer-directed leadership skills. Efficiently
                        evolve.</p>
                    <p className="paraborder" ></p>
                </div>
            </div>


            {/* third container  */}
            <div className="aboutmain_container" >
                <div className="aboutcontent_container" >
                    <p className="acoutcontent_paraone">TIPS FOR YOU</p>
                    <h1>Best Care Of Your Skin!</h1>
                    <p className="acoutcontent_paratwo">Quickly pursue granular synergy after just-in-time niche markets. Phosfluorescently syndicate sticky
                        content whereas robust resources. Uniquely target integrated meta-services and inexpensive process
                        meta-services and inexpensive processmeta-services and inexpensive process
                        improvements. Distinctively matrix robust ideas through customer-directed leadership skills. Efficiently
                        evolve.</p>
                    <p className="paraborder" ></p> 
                </div>
                
                <div className="aboutimage_container"  >
                    <Image className="about_pageimage" src={thirdImg} alt="img"/>
                </div>
            </div>
            <div style={{height:'100px'}} ></div>
            <Footer />
        </div>111
        </>
        
    );
};

export default About;

 