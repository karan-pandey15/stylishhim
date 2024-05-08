 

import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import routes from "./routes/router.js"; 
import db from "./database/db.js";  
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

db();

app.use(cookieParser());

app.get('/api/pincode/:pincode', async (req, res) => {
  const { pincode } = req.params;

  try {
    const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching address:', error);
    res.status(500).json({ error: 'Failed to fetch address' });
  }
});
// Set up your routes
app.use("/api", routes);
 

 
 

// const cartSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
// });

// const CartModel = mongoose.model('Cart', cartSchema);

// const sendCartData = (cartItems) => {
//   // Assuming cartItems is an array of objects with 'title' and 'price' properties
//   CartModel.insertMany(cartItems, (error, docs) => {
//     if (error) {
//       console.log('Error while inserting cart data: ', error);
//     } else {
//       console.log('Cart data inserted successfully: ', docs);
//     }
//   });
// };


const PORT =  5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
