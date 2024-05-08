"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../../../public/Slider-01.jpg";
import Slider2 from "../../../../public/Slider-02.jpg";
import Slider3 from "../../../../public/Slider-03.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Button from "../button/page";

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider1}
              className="w-full h-screen object-cover object-center"
              alt="sliderone"
            />
            <div className="absolute top-40 text-start md:right-20 w-full md:w-[40%] px-4 md:px-0">
              <span className="tracking-[.20em]">PARABEN-FREE</span>
              <h2 className="text-3xl font-bold py-3">Triple Power Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-4">
                <Button buttonText="SHOP NOW" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider2}
              className="w-full h-screen object-cover object-center"
              alt="slider2"
            />
            <div className="absolute top-40 text-start md:left-20 w-full md:w-[40%] px-4 md:px-0">
              <span className="tracking-[.20em]">PARABEN-FREE</span>
              <h2 className="text-3xl font-bold py-3">Triple Power Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-4">
                <Button buttonText="SHOP NOW" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={Slider3}
              className="w-full h-screen object-cover object-center"
              alt="slider3"
            />
            <div className="absolute top-40 text-start md:right-20 w-full md:w-[40%] px-4 md:px-0">
              <span className="tracking-[.20em]">PARABEN-FREE</span>
              <h2 className="text-3xl font-bold py-3">Triple Power Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="pt-4">
                <Button buttonText="SHOP NOW" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
