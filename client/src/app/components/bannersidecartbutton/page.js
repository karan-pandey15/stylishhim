import React from "react";
import Image from "next/image";
import firstImg from "../../../../public/cartImg1.webp";
import secondImg from "../../../../public/cartImg2.webp";
import thirdImg from "../../../../public/cartImg1.webp";
import fourthImg from "../../../../public/cartImg3.webp";
import "./bannersidecartbutton.css";

const EightBannerSidecart = () => {
  return (
    <>
      <div className="side_cart_button">
        <div className="sidecartchild_container">
          <div>
            <Image
              className="sidecartchild_container_image"
              src={firstImg}
              alt="img_first"
            />
          </div>
          <div className="side_content_heading">
            <p className="side_cart_heading">Detangling Hair...</p>
            <div className="side_rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star-empty">&#9733;</span>
            </div>
            <p>$5.00 – $10.00</p>
          </div>
        </div>

        <div className="sidecartchild_container">
          <div>
            <Image
              className="sidecartchild_container_image"
              src={secondImg}
              alt="img_first"
            />
          </div>
          <div className="side_content_heading">
            <p className="side_cart_heading">Anti-Aging Face...</p>
            <div className="side_rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star-empty">&#9733;</span>
            </div>
            <p>$5.00 – $10.00</p>
          </div>
        </div>
      </div>

      <div className="side_cart_button">
        <div className="sidecartchild_container">
          <div>
            <Image
              className="sidecartchild_container_image"
              src={fourthImg}
              alt="img_first"
            />
          </div>
          <div className="side_content_heading">
            <p className="side_cart_heading">Moisturizing Curl...</p>
            <div className="side_rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star-empty">&#9733;</span>
            </div>
            <p>$5.00 – $10.00</p>
          </div>
        </div>

        <div className="sidecartchild_container">
          <div>
            <Image
              className="sidecartchild_container_image"
              src={thirdImg}
              alt="img_first"
            />
          </div>
          <div className="side_content_heading">
            <p className="side_cart_heading">Face Moisturizer ...</p>
            <div className="side_rating">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star-empty">&#9733;</span>
            </div>
            <p>$5.00 – $10.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EightBannerSidecart;
