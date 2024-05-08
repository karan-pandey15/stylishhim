import React from "react";
import Image from "next/image";
import "./Banner6.css";
import first_review_Img from "../../../../public/img1.jpg";

const SixthBanner = () => {
  return (
    <>
      <section className="background_image_section_container">
        <div className="background_image_div_container">
          <p style={{ marginBottom: 15 }}>TESTIMONIAL</p>
          <h3 className="review_heading_two">Our Clients Reviews</h3>
        </div>

        <div className="review_img_container">
          {/* <Image className="reviewImg_style" src={first_review_Img} /> */}

          <video
            className="reviewImg_style"
            src="https://wdtlilac.wpengine.com/wp-content/uploads/2023/06/LiLac-01.mp4"
            autoplay=""
            loop=""
            muted="muted"
            controlslist="nodownload"
          ></video>

          <video
            className="reviewImg_style"
            src="https://wdtlilac.wpengine.com/wp-content/uploads/2023/06/LiLac-02.mp4"
            autoplay=""
            loop=""
            muted="muted"
            playsinline=""
            controlslist="nodownload"
          ></video>

          <video
            className="reviewImg_style"
            src="https://wdtlilac.wpengine.com/wp-content/uploads/2023/06/LiLac-03.mp4"
            autoplay=""
            loop=""
            muted="muted"
            playsinline=""
            controlslist="nodownload"
          ></video>
        </div>
      </section>
    </>
  );
};

export default SixthBanner;
