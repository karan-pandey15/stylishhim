"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import firstImg from "../../../../public/registerImg.png";
import "./Address.css";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import axios from "axios";
import { useRouter } from "next/navigation";

const SaveAddress = () => {
  const router = useRouter();
const [pincode, setPincode] = useState('');
const [city, setCity] = useState('');
const [address, setAddress] = useState('');

  const [formData, setFormData] = useState({
    flatBuildingNo: "",
    city: "",
    phoneNumber: "",
    pincode: "",
    address: "",
  });

useEffect(() => {
    if (pincode.length === 6) {
      fetchAddressDetails(pincode);
    }
  }, [pincode]);

 

  const fetchAddressDetails = (pincode) => {
    axios
      .get(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((response) => {
        const addressData = response.data[0];
        if (addressData && addressData.PostOffice) {
          const { District, State } = addressData.PostOffice[0];
          setCity(District);
          setAddress(State);
        } else {
          console.error('No address data found');
        }
      })
      .catch((error) => {
        console.error('Error fetching address:', error);
      });
  };

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
 
      const email = localStorage.getItem('address_email');
      
  
      const requestData = {
        ...formData,
        email: email  
      };
  
      // Send POST request with form data including email
      await axios.post("http://localhost:5000/api/save_address", requestData);
      
      alert("Address saved successfully");
      router.push("/");
    } catch (error) {
      console.error("Error saving address:", error);
      alert("Failed to save address");
    }
  };
  
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#FCF7EE" }}>
        <div className="register_main_container">
          <div className="register_child_container">
            <div className="register_first_container">
              <Image src={firstImg} className="registerImg" alt="registerImg" />
            </div>

            {/* form here  */}

            <div class="formcontainer">
              <h2 class="center-text form_heading">Save Your Address</h2>
              <form>
                <div class="form-row">
                  <div class="form-group">
                    <label>Flat/Building/ no:</label>
                    <input
                      required
                      className="input_form"
                      type="text"
                      placeholder="optional"
                      name="flatBuildingNo"
                      value={formData.flatBuildingNo}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="form-group">
                    <label>City:</label>
                    <input
                      required
                      className="input_form"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="form-row"></div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Phone Number:</label>
                    <input
                      required
                      className="input_form"
                      type="number"
                      name="phoneNumber"
                      placeholder="+91 "
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="form-group">
                    <label>Pin Code:</label>
                    <input
                      required
                      className="input_form"
                      type="number"
                      name="pinCode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label>Address:</label>
                  <input
                    required
                    className="input_form"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div class="center-text">
                  <button
                    className="form_button"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SaveAddress;
 

// 'use client' 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SaveAddressPage = () => {
//   const [pincode, setPincode] = useState('');
//   const [city, setCity] = useState('');
//   const [address, setAddress] = useState('');

//   useEffect(() => {
//     if (pincode.length === 6) {
//       fetchAddressDetails(pincode);
//     }
//   }, [pincode]);

//   const handlePincodeChange = (e) => {
//     const { value } = e.target;
//     setPincode(value);
//   };

//   const fetchAddressDetails = (pincode) => {
//     axios
//       .get(`https://api.postalpincode.in/pincode/${pincode}`)
//       .then((response) => {
//         const addressData = response.data[0];
//         if (addressData && addressData.PostOffice) {
//           const { District, State } = addressData.PostOffice[0];
//           setCity(District);
//           setAddress(State);
//         } else {
//           console.error('No address data found');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching address:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Save Address Page</h1>
//       <div>
//         <label htmlFor="pincode">Enter Pincode:</label>
//         <input
//           type="text"
//           id="pincode"
//           value={pincode}
//           onChange={handlePincodeChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="city">City:</label>
//         <input type="text" id="city" value={city} readOnly />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input type="text" id="address" value={address} readOnly />
//       </div>
//     </div>
//   );
// };

// export default SaveAddressPage;


 