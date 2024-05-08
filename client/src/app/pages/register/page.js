'use client'
import React, { useState } from "react";
import Image from "next/image";
import firstImg from "../../../../public/registerImg.png";
import Link from "next/link";
import "./Register.css";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterPage = () => {

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
 
    axios
      .post("http://localhost:5000/api/cust_register", registerData)
      .then((res) => {
        if (res.status !== 200 || !res.data) {
          alert("Error while registering. Please try again.");
        } else if (res.data.Status === "Success") {
          localStorage.setItem("address_email", registerData.email);
          alert(res.data.Message);
          router.push("/pages/saveaddress");
        } else {
          alert(res.data.Error);
        }
      })
      .catch((err) => {
        alert("Error while registering. Please try again.");
      });
  };

  return (
    <>
    <Navbar />
    <div style={{backgroundColor:'#FCF7EE'}} >
      <h1 className="register_heading" >SignUp Now</h1>
    <div className="register_main_container">
      <div className="register_child_container" >
          <div className="register_first_container" >
            <Image src={firstImg} className="registerImg" alt="registerImg" />
          </div>
          <div className="register_formcontainer" >
             <form  >
                <input 
                type="text"
                 id="floatingInput"
                 name="name"
                 value={registerData.name}
                 onChange={handleInputChange}
                className="form_input" placeholder="Your FullName" />


                <input type="tel"
                   id="floatingInput"
                   name="phone"
                   value={registerData.phone}
                   onChange={handleInputChange}
                   pattern="[0-9]*"
                   maxLength="10"
                   title="Please enter a valid 10-digit mobile number"
                className="form_input" placeholder="Your Phone No" />

                <input
                      id="floatingInput"
                      name="email"
                      type="email"
                      value={registerData.email}
                      onChange={handleInputChange}
                className="form_input" placeholder="Your Email Adress" />

                <input className="form_input" placeholder="Your Password" 
                 id="floatingPassword"
                 name="password"
                 type="password"
                 value={registerData.password}
                 onChange={handleInputChange}
                />
                <Link href="/pages/contactus"><button    type="submit"
                    onClick={handleSubmit} className="form_button" >SignUp</button></Link>
                <p className="form_para" >Already have an account <span style={{color:"blue",borderBottom:'1px solid blue'}} >

                  <Link href="/pages/login">LogIn</Link></span> 
                  </p>
                  
             </form>
          </div>
              
      </div>
    </div>
    <Footer />
    
    </div>
    </>
  );
};

export default RegisterPage;

