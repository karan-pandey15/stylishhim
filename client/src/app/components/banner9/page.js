import React from "react";
import Image from "next/image";
import firstImg from "../../../../public/testimonialimage_1.webp";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial_container">
        <div className="testimonial_child_container">
          <p style={{ marginTop: 20 }}>TESTIMONIAL</p>
          <h1 className="testimonial_heading">What Our People Says</h1>
          <div className="side_rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star-empty">&#9733;</span>
          </div>
          <p className="para_style">
            Vivulum ut tempor sem leo, a ultricies quam aliquam eget Vivulum ut
            tempor sem leo, a ultricies isdfdfd with us.
          </p>

          <Image src={firstImg} alt="testimonial_img" className="testimonial_img" />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
