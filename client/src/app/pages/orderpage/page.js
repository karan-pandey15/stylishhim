
// pages/cart.js
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '@/app/components/footer/page';
import Navbar from '@/app/components/navbar/page';
import './Cartstyle.css'
import Image from 'next/image';
import firstImg from "../../../../public/cartImg1.webp";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Function to fetch cart items from the backend
    const fetchCartItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cartItems'); 
        setCartItems(res.data);
        console.log('the data is ',res);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems(); 
  }, []);

  return (
    <div>
        <Navbar />
        <h1 className='order_heading' >All Orders</h1>
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
<Footer />
    </div>
  );
};

export default CartPage;
