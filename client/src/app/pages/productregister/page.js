
import Image from "next/image";
import firstImg from "../../../../public/productRegister.png";
import Link from "next/link";
import './Productregister.css';
import Navbar from "@/app/components/navbar/page";

const ProductRegister = () => {
  return (
    <>
      <Navbar />
      <div className="main_product_register_container" >
        <h1 className="productregister_heading" >List Product</h1>
        <div className="productregister_child_container" >
          <div className="productregister_first_container" >
            <Image src={firstImg} className="productregisterImg" alt="registerImg" />
          </div>
          <div className="productregister_formcontainer" >
            <form  >
              <input className="form_input" placeholder="Product Name" />
              <input className="form_input" placeholder="Product Category" />
              <input className="form_input" placeholder="Product Description" />
              <input className="form_input" placeholder="Product Price" />
              <input className="form_input" placeholder="Product Quantity" />
              <input className="form_input" placeholder="Product Description" />
              <input className="form_input" placeholder="Product Quality" />
              <input className="form_input" placeholder="Product Heading" />
              <label htmlFor="fileInput" style={{margin:'20px',fontWeight:'bold',color:'red',marginTop:'10px'}}>Choose Product Image</label>
              <input id="fileInput" className="form_file_img" type="file" />
              <button className="form_button" >LIST ITEM</button>
            </form>

          </div>

        </div>
      </div>
    </>
  );
};

export default ProductRegister;
