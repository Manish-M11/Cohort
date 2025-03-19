import mongoose from "mongoose";

//we are keeping names of our columns
//Below process is to keep data.
//jitane project utane jyada model

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      //ek software me user ko rokna bahut jaruri hota hai, otherwise excell me bhi sab chal hi raha tha.
      type: String,
      enum: ["user", "admin"], //enum matlab sirf isimese se value choose karo
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,   //it will add two new fields created at and updated at fields
  }
);

//zimmedaari wale kandhe ko thakna allowed nahi hota hai.
//Zindagi ke samandar me gote khaaoge toh apne aap deep hote jaaoge

//The level you understand about your data the more deeper you understand the code

const User = mongoose.model("User", userSchema);

export default User;
