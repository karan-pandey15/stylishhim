import Link from "next/link";
import React from "react";
import { IoLeafOutline } from "react-icons/io5";
import { FaBan } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrTest } from "react-icons/gr";
import "./Banner2.css";

const SecondBanner = () => {
  return (
    <>
      <section style={{ backgroundColor: "#FCF7EE" }}>
        <div className="flex justify-center items-center px-10 py-20">
          <div className="second_banner_scroll_container">
            <div className="flex justify-between items-center second_banner_scroll">
              <div className="flex flex-col justify-center second_banner_card items-center mx-2 lg:border-0 border-2 border-gray-500">
                <span className="text-8xl py-5">
                  <IoLeafOutline />
                </span>
                <h3 className="text-xl font-semibold pb-3">
                  Natural Ingredients
                </h3>
                <p className="pb-3 text-center">
                  Praesent in nunc vel urna consequat mattis eget vel libero.
                  Phasellus entesque
                </p>
                <Link
                  className="text-xs tracking-[.15em] border-b-[.5px] border-black mb-5"
                  href="#"
                >
                  READ MORE
                </Link>
              </div>
              <div className="flex flex-col justify-center second_banner_card items-center mx-2 lg:border-0  border-2 border-gray-500">
                <span className="text-8xl py-5">
                  <FaBan />
                </span>
                <h3 className="text-xl font-semibold pb-3">Fragrance Free</h3>
                <p className="pb-3 text-center">
                  Praesent in nunc vel urna consequat mattis eget vel libero.
                  Phasellus entesque
                </p>
                <Link
                  className="text-xs tracking-[.15em] border-b-[.5px] border-black mb-5"
                  href="#"
                >
                  READ MORE
                </Link>
              </div>
              <div className="flex flex-col justify-center second_banner_card items-center mx-2 lg:border-0  border-2 border-gray-500">
                <span className="text-8xl py-5">
                  <AiOutlineSafetyCertificate />
                </span>
                <h3 className="text-xl font-semibold pb-3">Allergy Tested</h3>
                <p className="pb-3 text-center">
                  Praesent in nunc vel urna consequat mattis eget vel libero.
                  Phasellus entesque
                </p>
                <Link
                  className="text-xs tracking-[.15em] border-b-[.5px] border-black mb-5"
                  href="#"
                >
                  READ MORE
                </Link>
              </div>
              <div className="flex flex-col justify-center second_banner_card items-center mx-2 lg:border-0  border-2 border-gray-500">
                <span className="text-8xl py-5">
                  <GrTest />
                </span>
                <h3 className="text-xl font-semibold pb-3">Paraben Free</h3>
                <p className="pb-3 text-center">
                  Praesent in nunc vel urna consequat mattis eget vel libero.
                  Phasellus entesque
                </p>
                <Link
                  className="text-xs tracking-[.15em] border-b-[.5px] border-black mb-5"
                  href="#"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondBanner;
