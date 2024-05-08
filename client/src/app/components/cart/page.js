import Image from "next/image";
import "./Cart.css";
import firstImg from "../../../../public/cartImg1.webp";
import secondImg from "../../../../public/cartImg2.webp";
import thirdImg from "../../../../public/cartImg1.webp";
import fourthImg from "../../../../public/cartImg3.webp";
import Link from "next/link";

const CartPage = () => {
  // Sample data array containing items
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
    // Add more items here if needed
  ];

  return (
    <div className="cart_container">
      <div className="cart_inner_container">
        {items.map((item) => (
          <div key={item.id} className="cart_main_container">
             <Link href="pages/addtocart">
            <div className="cart_image">
              <Image src={item.image} alt="photoImage" />
            </div>
            <div className="cart_test">
              <p className="cart_heading">{item.heading}</p>
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
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
