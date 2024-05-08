"use client";
import React, { useState } from "react";
import Image from "next/image";
import firstImg from "../../../../public/registerImg.png";
import Link from "next/link";
import "./loginpagestle.css";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  axios.defaults.withCredentials = true;

   

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cust_login",
        loginData
      );
  
      if (response.data.Status === "Success") {
        localStorage.setItem("userEmail", response.data.email); // Store user email
        router.push("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("An error occurred during Sign In");
    }
  };
  
  return (
    <>
    <Navbar />
    <div style={{backgroundColor:'#FCF7EE'}} >
      <h1 className="register_heading" >Login Now</h1>
    <div className="register_main_container">
      <div className="register_child_container" >
          <div className="register_first_container" >
            <Image src={firstImg} className="registerImg" alt="registerImg" />
          </div>
          <div className="register_formcontainer" >
             <form  >
                <input 
                  id="floatingInput"
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                className="form_input" placeholder="Your Email Adress" />
                <input 
                 type={showPassword ? "text" : "password"}
                 id="floatingPassword"
                 name="password"
                 value={loginData.password}
                 onChange={handleInputChange}
                className="form_input" placeholder="Your Password"
                
                 />
                 {/* <span
                        onClick={togglePasswordVisibility}
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        {showPassword ? (
                          <span
                            style={{
                              backgroundColor: "#dedbd2",
                              padding: "2px 6px",
                              cursor: "pointer",
                              borderRadius: "4px",
                              color: "#2f3e46",
                              fontSize: "16px",
                              fontWeight: 500,
                            }}
                          >
                            Hide
                          </span>
                        ) : (
                          <span
                            style={{
                              backgroundColor: "#dedbd2",
                              padding: "2px 6px",
                              cursor: "pointer",
                              borderRadius: "4px",
                              color: "#2f3e46",
                              fontSize: "16px",
                              fontWeight: 500,
                            }}
                          >
                            Show
                          </span>
                        )}
                      </span> */}
                <button 
                 type="submit"
                 onClick={handleSubmit}
                className="form_button" >Login</button>

<p className="form_para" >Create an account <span style={{color:"blue",borderBottom:'1px solid blue'}} >
<Link href="/pages/register">SignUp</Link></span> 
</p>


             </form>
          </div>
              
      </div>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default LoginPage;
