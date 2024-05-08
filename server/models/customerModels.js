import mongoose from "mongoose";
import bcrypt from "bcrypt";

const customerSchema = new mongoose.Schema({
  email: String,
  name: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    default: null,
  },
  signedUpDate: {
    type: Date,
    default: Date.now,
  },
});

 
 
// Hash the password before saving
customerSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

const Customer = mongoose.model("Customer", customerSchema);
 

 
export {
  Customer
};
