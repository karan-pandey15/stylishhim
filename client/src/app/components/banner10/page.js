
import React from "react";
import Image from "next/image";
import firstImg from "../../../../public/blog-1.webp";
import secondImg from "../../../../public/blog-2.webp";
import thirdImg from "../../../../public/blog-3.webp";

import "./Banner10style.css";

const NewsBlogpage = () => {
  const blogData = [
    {
      image: firstImg,
      category: "SUN PROTECTION - SENSITIVE",
      heading: "Making CBD-Infused Pastries And Cupcakes",
      paragraph: "Nibh tellus molestie nunc non blandit massa. Nec feugiat nisl pretium fusce id....",
    },
    {
      image: secondImg,
      category: "ENLARGED PORES - SENSITIVE",
      heading: "Natural And Detergent-Free Handmade Soap",
      paragraph: "Feugiat tempor nec nisl pretium fusce id. Nibh tellus molestie nunc non blandit...",
    },
    {
      image: thirdImg,
      category: "DARK SPOTS - COMBINATION",
      heading: "Natural Fine And Smooth Organic Face Pack",
      paragraph: "Dempor nec feugiat nisl pretium fusce id. Nibh tellus molestie nunc non blandit...",
    },
  ];

  return (
    <div className="newsblog_container">
      <p className="newsblog_txt">INSTANT</p>
      <h1 className="newsblog_heading">News & Updated Blogs</h1>

      <div className="innernewsblog_container">
        {blogData.map((item, index) => (
          <div className="newsblogcart_container" key={index}>
            <Image src={item.image} alt="blog_image" className="newsblog_image" />
            <div style={{ marginTop: 25, borderBottom: "0.5px solid #B6713E" }}>
              <span style={{ color: "#B6713E", fontWeight: "400", marginRight: 5, fontSize: "14px" }}>
                {item.category}
              </span>
            </div>

            <div className="newsblog_txt_container">
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
              <span>READ MORE</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBlogpage;

