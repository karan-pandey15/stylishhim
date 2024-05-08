import mongoose from "mongoose";

const mongo_uri = 'mongodb+srv://pandeykaran1515:EsgAqTAYHVpkdjhT@cluster0.xrkqhgn.mongodb.net/';

const db = () => {
  mongoose.connect(mongo_uri, { });

  mongoose.connection.on("connected", () => {
    console.log("Database connected successfully...");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database ", error.message);
  });
};

export default db;
