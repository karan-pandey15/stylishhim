import React from "react";
import "./Banner3.css";
import Image from "next/image";
import Overla from "../../../../public/overla-banr-04.webp";
import { GrTest } from "react-icons/gr";
import { IoLeafOutline } from "react-icons/io5";
import { FaGlobeAfrica } from "react-icons/fa";
import { LuVegan } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import Button from "../button/page";

const ThirdBanner = () => {
  return (
    <>
      <section className="background_image_section">
        <div className="background_image_div">
          <div>
            <Image src={Overla} alt="banner3"/>
          </div>
          <div>
            <p className="tracking-[.17em] text-sm font-medium">
              PURE AND SIMPLE
            </p>
            <h2 className="text-4xl pt-2 font-bold pb-6 third_banner_heading_fontsize">
              Deeply Nourishing Hair Serum For Glowing & Healthy Hair
            </h2>
            <p className="py-4">
              Ut tempor sem leo, a ultricies quam aliquam eget. Vivamus commodo
              scelerisq ue velit, quis viverra velit bibendum vel. Phasell sus
              id leo et vestibulum.
            </p>
            <div className="flex third_banner_display1">
              <div className="pr-8">
                <div className="flex items-center py-5">
                  <span className="w-[50px] h-[50px] border-[1px] border-black rounded-full flex items-center justify-center mr-3 text-xl font-bold">
                    <IoLeafOutline />
                  </span>
                  <span className="text-lg font-semibold">Strong & Smooth</span>
                </div>
                <div className="flex items-center py-5">
                  <span className="w-[50px] h-[50px] border-[1px] border-black rounded-full flex items-center justify-center mr-3 text-xl font-bold">
                    <GrTest />
                  </span>
                  <span className="text-lg font-semibold">Paraben-Free</span>
                </div>
              </div>
              <div>
                <div className="flex items-center py-5">
                  <span className="w-[50px] h-[50px] border-[1px] border-black rounded-full flex items-center justify-center mr-3 text-xl font-bold">
                    <FaGlobeAfrica />
                  </span>
                  <span className="text-lg font-semibold">Sulfate-Free</span>
                </div>
                <div className="flex items-center py-5">
                  <span className="w-[50px] h-[50px] border-[1px] border-black rounded-full flex items-center justify-center mr-3 text-xl font-bold">
                    <LuVegan />
                  </span>
                  <span className="text-lg font-semibold">100% Vegan</span>
                </div>
              </div>
            </div>
            <div className="flex items-center third_banner_display2">
              <div className="py-5 pr-8">
                <Button buttonText="SHOP STYLISHHIM" />
              </div>
              <div className="flex items-center py-5">
                <span className="w-[50px] h-[50px] border-[1px] border-black rounded-full flex items-center justify-center mr-3 text-xl font-bold third_banner_phoneicon">
                  <IoCallOutline />
                </span>
                <div className="third_banner_phonenumber">
                  <p className="text-sm font-bold">Call Us Anytime</p>
                  <p>+91 7052897704</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdBanner;
