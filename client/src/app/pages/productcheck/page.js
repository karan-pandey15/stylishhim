'use client'
import React, { useState } from "react";
import Image from "next/image";
import "./Product.css";

import firstImg from "../../../../public/cartImg1.webp";
import secondImg from "../../../../public/cartImg2.webp";
import thirdImg from "../../../../public/cartImg3.webp";
import fourthImg from "../../../../public/cartImg1.webp";
import Navbar from "@/app/components/navbar/page";
import Moreproduct from "../moreproduct/page";
import Footer from "@/app/components/footer/page";



export default function Product() {
  const imgArr = [
    {
      img: firstImg,
    },
    {
      img: secondImg,
    },
    {
      img: firstImg,
    },
    {
      img: secondImg,
    },
  ];

  const [img, setImg] = useState(imgArr[0].img);
  return (
    <>
    <Navbar />
      <div className='product_container'>
        <div className='product'>
          <Image
            className='main_img'
            id="imageBox"
            src={img}
            alt="img"
          />

          <div className='product-small-img'>
            {imgArr.map((image, ind) => {
              return (
                <Image
                  src={image.img}
                  alt={`img-${ind}`}
                  key={ind} 
                  onClick={() => setImg(image.img)}
                />
              );
            })}
          </div>
        </div>

        <div className='product_text_container'>
          <div></div>
          <div>
            <h1 style={{fontWeight:'bold',fontSize:'1.5rem'}}>StylishHim Skin Care</h1>
            <br /> <br />
            <p className='productpara'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit. Aliquid
              quae  <span style={{fontWeight:'600',cursor:'pointer'}} >Read More</span>....
            </p>
            <div className='product_select'>
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <button className='product_button'>Add to cart</button>
          </div>
        </div>
      </div>
        <Moreproduct />
        <Footer />
    </>
  );
}
