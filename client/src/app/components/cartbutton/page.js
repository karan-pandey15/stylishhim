import Image from "next/image";
import "./Cartbutton.css";
import firstImg from "../../../../public/cartImg1.webp";
import secondImg from "../../../../public/cartImg2.webp";
import thirdImg from "../../../../public/cartImg1.webp";
import fourthImg from "../../../../public/cartImg3.webp";
import { IoLeafOutline } from "react-icons/io5";
import { FaGlobeAfrica } from "react-icons/fa";
import { LuVegan } from "react-icons/lu";

const BannerSevenButton = () => {
  const items = [
    {
      id: 1,
      image: firstImg,
      heading: "Detangling Hair Spray",
      price: "$5.00 - $10.00",
    },
    {
      id: 2,
      image: secondImg,
      heading: "Anti-Aging Face Cream",
      price: "$5.00 - $10.00",
    },
    {
      id: 3,
      image: thirdImg,
      heading: "Moisturizing Curl   Cream",
      price: "$5.00 - $10.00",
    },
    {
      id: 4,
      image: fourthImg,
      heading: "Face Moisturizer & Face Wash",
      price: "$5.00 - $10.00",
    },
  ];

  return (
    <div className="main_button_container">
      <div className="bannerPage_cart__button">
        <p className="icon_banner">
          <IoLeafOutline />
        </p>
        <p>All Product</p>
      </div>
      <div className="bannerPage_cart__button">
        <p className="icon_banner">
          <FaGlobeAfrica />
        </p>
        <p>Skin Care</p>
      </div>

      <div className="bannerPage_cart__button">
        <p className="icon_banner">
          <LuVegan />
        </p>
        <p>Body Care</p>
      </div>

      <div className="bannerPage_cart__button">
        <p className="icon_banner">
          <IoLeafOutline />
        </p>
        <p>Moisturizer</p>
      </div>
    </div>
  );
};

export default BannerSevenButton;
