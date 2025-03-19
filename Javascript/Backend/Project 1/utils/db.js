import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URL);

//Note: database is always in another continent so always use await
//it will always take time

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to Mongo DB");
    })
    .catch((err) => {
      console.log("Error connecting to mongo DB");
    });
};

export default db;
