import Image from "next/image";
import "./Banner7.css";
import firstImg from "../../../../public/img1.jpg";
import secondImg from "../../../../public/img1.jpg";
import thirdImg from "../../../../public/img1.jpg";
import fourthImg from "../../../../public/img1.jpg";
import fifthImg from "../../../../public/img1.jpg";

const SeventhBanner = () => {
  // Sample data array containing items
  const items = [
    {
      id: 1,
      image: firstImg,
    },
    {
      id: 2,
      image: secondImg,
    },
    {
      id: 3,
      image: thirdImg,
    },
    {
      id: 4,
      image: fourthImg,
    },
    {
      id: 5,
      image: fifthImg,
    },
  ];

  return (
    <section className="background_color">
      <div className="cart_heading">
        <p style={{ marginBottom: 15 }}>INSTA SHOP</p>
        <h3 className="banner_cart_heading">Tag Us on Instagram</h3>
        <span className="banner_paragraph">
          Praesent in nunc vel urna consequat mattis eget vel libero. Phasellus
          pellentesque Proin tempus tempor diam.
        </span>
      </div>
      <div className="banner_container">
        <div className="banner_inner_container">
          {items.map((item) => (
            <div key={item.id} className="banner_main_container">
              <div className="banner_image">
                <Image
                  src={item.image}
                  alt="photoImage"
                  layout="responsive"
                  width={280}
                  height={450}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeventhBanner;
