import React from "react";
import Image from "next/image";
import "./Banner8.css";
import BannerSevenButton from "../cartbutton/page";
import Button from "../button/page";
import CartPage from "../cart/page";
import EightBannerSidecart from "../bannersidecartbutton/page";

const EightBanner = () => {
  return (
    <>
      <div className="main_div_container_style">
        <div className="banner_image_Firstcontainer">
          <h1 className="banner_main_heading">Care Collections</h1>
          <p className="banner_para">
            Vivulum ut tempor sem leo, a ultricies quam aliquam eget.
          </p>
          <h1 className="banner_second_heading">STYLISHHIM</h1>
          <Button buttonText="VIEW ALL" />

          <p className="banner_second_para">
            Valid till 23rd March, 10am | Online exclusive
          </p>
        </div>
        <div className="second_container">
          <BannerSevenButton />

          <EightBannerSidecart />
        </div>
      </div>

      <div
        className="EightBanner_cart_style"
        // style={{ display: "flex", flexWrap: "wrap", margin: "0 20px" }}
      >
        <CartPage />
      </div>
    </>
  );
};

export default EightBanner;
