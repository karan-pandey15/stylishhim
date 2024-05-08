import Image from "next/image";
import firstImg from "../../../../public/registerImg.png";
import "./Contactus.css";
import Navbar from "@/app/components/navbar/page";

const Contactus = () => {


    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: '#FCF7EE' }} >
                {/* <h1 className="register_heading" >SignUp Now</h1> */}
                <div className="register_main_container">
                    <div className="register_child_container" >
                        <div className="register_formcontainer" >
                            <form  >
                                <h1 className="form_heading"  >Contact Us</h1>
                                <h1  className="form_heading_two" >Ask Us Anything</h1>
                                <input className="form_input" placeholder="Your Name - Here" />
                                <input className="form_input" placeholder="Your Email Here" />
                                <input className="form_messageinput" placeholder="Your messge" />
                                <button className="form_button" >Submit</button>
                            </form>
                        </div>

                        <div className="register_first_container" >
                            <div className="contact_container" >
                                <h1>Address</h1>
                                <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                                <p>54 Cunningham Street, Joanna, Australia, 6236.</p>
                            </div>

                            <div className="contact_container">
                                <h1>Phone</h1>
                                <p>+91 9999781282</p>
                                <p>+91 8887796224</p>
                            </div>
                            
                            <div className="contact_container">
                                <h1>Email</h1>
                                <p>support@stylish.com</p>
                                <p>support@example.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;

