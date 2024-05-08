"use client";
import FirstBanner from "./components/banner1/page";
import NewsBlogpage from "./components/banner10/page";
import SecondBanner from "./components/banner2/page";
import ThirdBanner from "./components/banner3/page";
import FourthBanner from "./components/banner4/page";
import FifthBanner from "./components/banner5/page";
import SixthBanner from "./components/banner6/page";
import SeventhBanner from "./components/banner7/page";
import EightBanner from "./components/banner8/page";
import Testimonial from "./components/banner9/page";
import Carousel from "./components/carousel/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import "./styles.css";

export default function MainPage() {
    
      
   
  return (
    <>
    {/* <AddTocart /> */}
      <main className="w-full h-screen">
        <div className="hidden md:block">
          <div
            className="flex justify-center py-2"
            style={{ backgroundColor: "#ECDEC1" }}
          >
            <div className="banner flex justify-between w-4/5">
              <p className="text-[12px] tracking-[.20em] lg:tracking-[.25em] font-medium">
                WELCOME TO STYLISHHIM.COM
              </p>
              <p className="text-[12px] tracking-[.20em] lg:tracking-[.25em] font-medium">
                FREE SHIPPING ON ORDERS ABOVE ₹500
              </p>
            </div>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <FirstBanner />
        </div>
        <div>
          <SecondBanner />
        </div>
        <div>
          <ThirdBanner />
        </div>
        <div>
          <FourthBanner />
        </div>
        <div>
          <FifthBanner />
        </div>
        <div>
          <SixthBanner />
        </div>
        <div>
          <SeventhBanner />
        </div>

        <div>
          <EightBanner />
        </div>

        <div>
          <Testimonial />
        </div>
        <div>
          <NewsBlogpage />
        </div>


        <div>
          <Footer />
        </div>

      </main>
    </>
  );
}



// "use client";
// import AddTocart from './addtocart/page';
// const Homepage = () => {
//   return (
//     <div>
//       <h1>karan pandey</h1>
//           <AddTocart />
//     </div>
//   )
// }

// export default Homepage;
