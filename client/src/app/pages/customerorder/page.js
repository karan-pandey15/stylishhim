'use client'
import Footer from '@/app/components/footer/page';
import Navbar from '@/app/components/navbar/page';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import firstImg from "../../../../public/cartImg1.webp";
import './CusomersStyle.css' 


const CusOrderpage = () => {
  
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
        const userEmail = localStorage.getItem('userEmail');
      
        try {
          const response = await fetch(`http://localhost:5000/api/fetchCartItems?email=${userEmail}`);
          if (!response.ok) {
            throw new Error('Failed to fetch cart items');
          }
          const data = await response.json();
          setCartItems(data.items)
          console.log(data.items); // Do whatever you want with the retrieved cart items
        } catch (error) {
          console.error('Error fetching cart items:', error.message);
        }
      };

      // Call the fetchCartItems function when needed, like after the user logs in
      useEffect(()=>{
        fetchCartItems();
      },[]);
      return (
        <div>
            <Navbar />
    {cartItems.length>0?
    <div><h1 className='order_heading' >Your Orders</h1>
            <div className='main_order_container' >
      {cartItems.map((cartItem, index) => (
          <div className='order_child_div' key={index} >
            {cartItem.items.map((item, itemIndex) => (
              <div className='order_content_div' key={itemIndex}>
                <Image src={firstImg} className='order_img' alt='orderpage image' />
                <div className='title_div' ><span style={{color:'blue'}} >Title: </span>{item.title}</div>
                <div className='price_div' > <span style={{color:'blue'}} >Price: </span> {item.price}</div>
              </div>
            ))}
          </div>
      ))}
    </div>
    </div>
    :<h1 className='order_heading' >Opps your orders list is empty !!</h1>}
    <Footer />
        </div>
      );
};

export default CusOrderpage;
