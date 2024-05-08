"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Banner5.css";
import CartPage from "../cart/page";
const FifthBanner = () => {
  return (
    <>
      <section className="background_color">
        <div className="cart_heading">
          <p style={{ marginBottom: 15 }}>HOT SALE</p>
          <h3 className="banner_cart_heading">Imported Products</h3>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap",justifyContent:'center', margin: "0 20px" }}>
          <CartPage />
        </div>
      </section>
    </>
  );
};

export default FifthBanner;
