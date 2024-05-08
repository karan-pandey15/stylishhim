import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  Customer, 
} from "../models/customerModels.js";
import nodemailer from "nodemailer";
import { CartItem, SaveAddress } from "../models/cartItemSchema.js";

// import crypto from "crypto";

const secretKey = '123456789KARANPANDEY';


 
 
// create transporter for sending mail
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "support@stylishmen.com",
    pass: "stylishmen@741Support",
  },
});

export const verifyUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({
      Error: "You are not authenticated",
    });
  } else {
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.json({
          Error: "Token is not Okay",
        });
      } else {
        try {
          const user = await Customer.findOne({ email: decoded.email });

          if (user) {
            req.name = user.name;
            req.email = user.email;
            next();
          } else {
            return res.json({
              Error: "User not found",
            });
          }
        } catch (error) {
          return res.json({
            Error: "Error fetching user",
          });
        }
      }
    });
  }
};

export const getCustomerData = (req, res) => {
  return res.json({
    Status: "Success",
    name: req.name,
    email: req.email,
  });
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


export const registerCustomer = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.password
    ) {
      return res.json({
        Error: "All fields are required. Please fill in all the fields.",
      });
    }

    if (!isValidEmail(req.body.email)) {
      return res.json({
        Error: "Invalid email format. Please provide a valid email address.",
      });
    }

    if (req.body.password.length < 6) {
      return res.json({
        Error: "Password must be at least 6 characters or digits.",
      });
    }

    const existingUser = await Customer.findOne({
      $or: [{ email: req.body.email }, { phone: req.body.phone }],
    });

    if (existingUser) {
      return res.json({
        Error:
          "User already exists. Please use a different email or phone number.",
      });
    }

    const newCustomer = new Customer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

 
   
    // newCustomer.verificationCode = verificationCode;
    await newCustomer.save();

    return res.json({
      Status: "Success",
      // Message: "Mail has been sent successfully. Please verify your email.",
      Message: "You are successfully registered",
      // verificationCode: verificationCode,
    });
  } catch (error) {
    return res.status(500).json({ Error: "Internal Server Error" });
  }
};

export const saveAddress = async (req, res) => {
  try {
    // Extract fields from request body
    const { flatBuildingNo, city, phoneNumber, pinCode, address, email } = req.body;
    
    // Create a new instance of the SaveAddress model with all fields
    const newAddress = new SaveAddress({ flatBuildingNo, city, phoneNumber, pinCode, address, email });
    
    // Save the new address to the database
    await newAddress.save();
    
    // Respond with success message
    res.status(201).json({ message: 'Address saved successfully' });
  } catch (err) {
    // Respond with error message
    res.status(500).json({ error: 'Internal server error' });
  }
};


//  export const saveAddress = async (req,res)=>{
//   try {
//     const { flatBuildingNo, city, phoneNumber, pinCode, address } = req.body;
//     const newAddress = new SaveAddress({ flatBuildingNo, city, phoneNumber, pinCode, address });
//     await newAddress.save();
//     res.status(201).json({ message: 'Address saved successfully' });
// } catch (err) {
//     res.status(500).json({ error: 'Internal server error' });
// }
//  }


 
// export const checkoutController = (req, res) => {
//   const { email, items } = req.body; // Destructure email and items from req.body
  
//   // Save cart items to the database along with the current timestamp and user's email
//   CartItem.create({ email, items }) // Include email in the object passed to create()
//     .then(savedItems => {
//       res.status(200).json({ message: 'Checkout successful', items: savedItems });
//     })
//     .catch(error => {
//       console.error('Error saving cart items:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     });
// };


export const checkoutController = (req, res) => {
  const { email, items } = req.body; // Destructure email and items from req.body
  
  // Save cart items to the database along with the current timestamp and user's email
  CartItem.create({ email, items }) // Include email in the object passed to create()
    .then(savedItems => {
      res.status(200).json({ message: 'Checkout successful', items: savedItems });
    })
    .catch(error => {
      console.error('Error saving cart items:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
};
// Controller function to fetch all cart items
export const getAllCartItemsController = (req, res) => {
  // Fetch all cart items from the database
  CartItem.find()
    .then(cartItems => {
      res.status(200).json(cartItems); // Send fetched cart items to the frontend
    })
    .catch(error => {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}; 

// Controller function to fetch all cart items based on the email
export const fetchCartItemsController = (req, res) => {
  const userEmail = req.query.email; // Retrieve email from query params
  
  // Fetch cart items from the database based on the provided email
  CartItem.find({ email: userEmail })
    .then(cartItems => {
      res.status(200).json({ message: 'Cart items retrieved successfully', items: cartItems });
    })
    .catch(error => {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
};

  
export const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  const user = await Customer.findOne({ email });

  if (!user) {
    return res.json({ Error: "No Such Email Existed" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const { name, email } = user;
    try {
      const token = jwt.sign({ email, name }, secretKey, {
        expiresIn: "8h",
      });
      res.cookie("token", token);
    } catch (error) {
      return res.json({
        Error: "JWT Token Generation Error",
      });
    }

    return res.json({ Status: "Success", name, email });
  } else {
    return res.json({ Error: "Password not Matched" });
  }
};



export const CustforgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Customer.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "No Such Email Existed" });
    }

    const token = jwt.sign(
      { id: user._id, exp: Math.floor(Date.now() / 1000) + 2 * 60 },
      secretKey
    );

    const mailOptions = {
      from: "support@stylishmen.com",
      to: req.body.email,
      subject: "For Reset Password",
      html: `
          <p>Click the following link to Reset your Password and This Link will expire in 2 min:</p>
          <a href="https://stylishmen.com/pages/customerresetpassword/${user._id}/${token}">Reset</a>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: "Failed to send email" });
      } else {
        return res.json({
          status: "Success",
          message: "Mail Sent Successfully! Check Your Gmail",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const CustresetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(404).json({ error: "Link not found or expired" });
        } else {
          return res.status(400).json({ error: "Invalid token" });
        }
      } else {
        bcrypt
          .hash(password, 10)
          .then((hash) => {
            Customer.findByIdAndUpdate({ _id: id }, { password: hash })
              .then(() => res.json({ status: "Success" }))
              .catch((err) => {
                res.status(500).json({ error: "Internal Server Error" });
              });
          })
          .catch((err) => {
            res.status(500).json({ error: "Internal Server Error" });
          });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logoutCustomer = (req, res) => {
  res.clearCookie("token");
  res.json({ Status: "Success" });
};

 
