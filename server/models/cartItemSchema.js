 

import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  email: String,
  items: [{
    title: String,
    price: Number,
    // Add other item properties if needed
  }],
  createdAt: {
    type: Date,
    default: Date.now // Default to current date and time
  }
});

const addressSchema = new mongoose.Schema({
  flatBuildingNo: String,
  city: String,
  phoneNumber: Number,
  pinCode: Number,
  address: String,
  email: String   
});


export const CartItem = mongoose.model("CartItem", cartItemSchema);
export const SaveAddress = mongoose.model("saveAddress", addressSchema);



