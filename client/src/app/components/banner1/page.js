import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import "./Banner1.css";

const FirstBanner = () => {
  return (
    <>
      <section className="first_banner_section flex justify-center items-center w-full">
        <div className="flex md:justify-evenly md:flex-row flex-col justify-center md:items-center w-[80%] py-14">
          <div className="flex md:py-0 py-5 items-center">
            <div className="text-5xl pr-5">
              <FaShippingFast />
            </div>
            <div>
              <p className="tracking-[.20em] text-sm">SHIPPING</p>
              <p className="text-xl font-semibold text-wrap">
                Free Shipping World Wide
              </p>
            </div>
          </div>
          <div className="flex md:py-0 py-5 items-center">
            <div className="text-5xl pr-5">
              <RiCustomerService2Fill />
            </div>
            <div>
              <p className="tracking-[.20em] text-sm">HASSLE FREE</p>
              <p className="text-xl font-semibold text-wrap ">
                24*7 Customer Support
              </p>
            </div>
          </div>
          <div className="flex md:py-0 py-5 items-center">
            <div className="text-5xl pr-5">
              <LuPackageOpen />
            </div>
            <div>
              <p className="tracking-[.20em] text-sm">SECURED</p>
              <p className="text-xl font-semibold text-wrap">Safe Packaging</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstBanner;
