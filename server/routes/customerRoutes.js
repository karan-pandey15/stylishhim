import express from "express";
import {
 
  logoutCustomer,
  loginCustomer,
  registerCustomer, 
  checkoutController,
  getAllCartItemsController,
  fetchCartItemsController,
  getCustomerData,
  verifyUser,
  saveAddress,
} from "../controllers/customerControllers.js";

const router = express.Router();

router.post("/cust_register", registerCustomer);
router.post("/save_address", saveAddress); 
router.post("/checkout", checkoutController); 
router.get("/cartItems", getAllCartItemsController);
router.get("/fetchCartItems", fetchCartItemsController);
router.post("/cust_login", loginCustomer); 
router.get("/cust_logout", logoutCustomer);
router.get("/get_customer_data", verifyUser, getCustomerData);
 

export default router;
