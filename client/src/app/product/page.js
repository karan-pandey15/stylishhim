'use client'
import { useState, useEffect } from 'react';
import firstImg from "../../../public/cartImg1.webp";
import secondImg from "../../../public/cartImg2.webp";
import thirdImg from "../../../public/cartImg3.webp";
import fourthImg from "../../../public/cartImg1.webp";

import Image from "next/image";

const items = [
  {
    id: 1,
    image: firstImg,
    title: " Zirconia Studded Sapphire Blue.",
    price: "$5.00 - $10.00",
  },
  {
    id: 2,
    image: secondImg,
    title: "Gold Plated Cubic Zirconia",
    price: "$5.00 - $10.00",
  },
  {
    id: 3,
    image: thirdImg,
    title: "Studded Sapphire Blue. curk",
    price: "$5.00 - $10.00",
  },
  {
    id: 4,
    image: fourthImg,
    title: "Gold Plated Cubic Zirconia",
    price: "$5.00 - $10.00",
  },
  {
      id: 5,
      image: firstImg,
      title: " Zirconia Studded Sapphire Blue.",
      price: "$5.00 - $10.00",
    },
    {
      id: 6,
      image: secondImg,
      title: "Gold Plated Cubic Zirconia",
      price: "$5.00 - $10.00",
    },
  // Add more items here if needed
];

const ProductDetails = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const itemId = window.location.pathname.split('/').pop();
    const getItemData = (itemId) => {
      return items.find((item) => item.id === parseInt(itemId));
    };
    const itemData = getItemData(itemId);
    setItem(itemData);
  }, []);

  return (
    <div>
      <h1>{item.title}</h1>
      <Image src={item.image} alt="photoImage" />
      <p>Price: {item.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;