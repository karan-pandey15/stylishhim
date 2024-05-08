"use client";
// import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {add} from '../../Redux/Cartslice';
import firstImg from "../../../public/cartImg1.webp";
import secondImg from "../../../public/cartImg2.webp";
import thirdImg from "../../../public/cartImg3.webp";
import fourthImg from "../../../public/cartImg1.webp";
import Image from "next/image";
import "./Addtocarts.css"
import Link from 'next/link';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/page';


const AddTocart = () => {
    // Sample data array containing items

    const items = [
      {
        id: 1,
        image: firstImg,
        title: " Zirconia Studded Sapphire Blue.",
        price: 300,
      },
      {
        id: 2,
        image: secondImg,
        title: "Gold Plated Cubic Zirconia",
        price: 300,
      },
      {
        id: 3,
        image: thirdImg,
        title: "Studded Sapphire Blue. curk",
        price: 300,
      },
      {
        id: 4,
        image: fourthImg,
        title: "Gold Plated Cubic Zirconia",
        price: 300,
      },
      {
          id: 5,
          image: firstImg,
          title: " Zirconia Studded Sapphire Blue.",
          price: 300,
        },
        {
          id: 6,
          image: secondImg,
          title: "Gold Plated Cubic Zirconia",
          price: 300,
        },
      // Add more items here if needed
    ];

  const dispatch =useDispatch();

  const handleadd =(product)=>{
     dispatch(add(product));
  }

  
  
  return (
    <>
    <Navbar />
    <div >
    <div className="Add_cart_container">
      <div className="Add_cart_inner_container">
        {items.map((item) => (
          <div key={item.id} className="add_cart_main_container">
            <div className="add_cart_image">
              <Link href='/pages/productcheck' >
              <Image src={item.image} alt="photoImage" />
              </Link>
            </div>
            <div className="add_cart_test">
              <p className="cart_heading">{item.title}</p>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star-empty">&#9733;</span>
              </div>
              <p style={{ textAlign: "center", fontSize: "12px" }}>
                {item.price}
              </p>
              <div className="add_cart_btn" onClick={()=>handleadd(item)}>ADD TO CART</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </div>
    <Footer />
    </>
    
  )
}

export default AddTocart;

// 'use client'
// import React,{useState,useEffect} from 'react'
// import Image from "next/image";
// import "./Addtocart.css";
// import firstImg from "../../../public/cartImg1.webp";
// import secondImg from "../../../public/cartImg2.webp";
// import thirdImg from "../../../public/cartImg3.webp";
// import fourthImg from "../../../public/cartImg1.webp";

// import Navbar from "@/app/components/navbar/page";
// import Link from "next/link";
// import AddTocart from "@/app/addtocart/page";
// import { useDispatch } from 'react-redux';
// import {add} from '../../Redux/Cartslice';


// const Addtocart = () => {

//   const [products ,setproducts]=useState([])
//   const dispatch =useDispatch();


//   const getproducts =async()=>{
//     const res =await fetch("https://fakestoreapi.com/products");
//     const data =await res.json();
//     setproducts(data);
//   }

//   const handleadd =(product)=>{
//      dispatch(add(product));
//   }

//   useEffect(()=>{
//    getproducts();
//   },[])
  

  // // Sample data array containing items
  // const items = [
  //   {
  //     id: 1,
  //     image: firstImg,
  //     heading: " Zirconia Studded Sapphire Blue.",
  //     price: "$5.00 - $10.00",
  //   },
  //   {
  //     id: 2,
  //     image: secondImg,
  //     heading: "Gold Plated Cubic Zirconia",
  //     price: "$5.00 - $10.00",
  //   },
  //   {
  //     id: 3,
  //     image: thirdImg,
  //     heading: "Studded Sapphire Blue. curk",
  //     price: "$5.00 - $10.00",
  //   },
  //   {
  //     id: 4,
  //     image: fourthImg,
  //     heading: "Gold Plated Cubic Zirconia",
  //     price: "$5.00 - $10.00",
  //   },
  //   {
  //       id: 5,
  //       image: firstImg,
  //       heading: " Zirconia Studded Sapphire Blue.",
  //       price: "$5.00 - $10.00",
  //     },
  //     {
  //       id: 6,
  //       image: secondImg,
  //       heading: "Gold Plated Cubic Zirconia",
  //       price: "$5.00 - $10.00",
  //     },
  //   // Add more items here if needed
  // ];

//   return (
    // <div >
    // <Navbar />
    // <AddTocart />
    // <div className="Add_cart_container">
    //   <div className="Add_cart_inner_container">
    //     {items.map((item) => (
    //       <div key={item.id} className="add_cart_main_container">
    //         <div className="add_cart_image">
    //           <Link href='/pages/productcheck' >
    //           <Image src={item.image} alt="photoImage" />
    //           </Link>
    //         </div>
    //         <div className="add_cart_test">
    //           <p className="cart_heading">{item.heading}</p>
    //           <div className="rating">
    //             <span className="star">&#9733;</span>
    //             <span className="star">&#9733;</span>
    //             <span className="star">&#9733;</span>
    //             <span className="star">&#9733;</span>
    //             <span className="star-empty">&#9733;</span>
    //           </div>
    //           <p style={{ textAlign: "center", fontSize: "12px" }}>
    //             {item.price}
    //           </p>
    //           <div className="add_cart_btn">ADD TO CART</div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // </div>

//   );
// };

// export default Addtocart;