import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js"; //sometime you need to write .js also (it depends on proh=ject settings)

dotenv.config(); //parameter if env path is other than root

//import all routes
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); //backend says i accept jason
app.use(express.urlencoded({ extended: true })); //extended:true matlab latest version bhi support karo

app.use(
  cors({
    origin: "http://localhost: 3000", //origin matlab kahan se request aane dena chahata hu
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

db();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user routes
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//why it is called controller
//Kyunki wahan par functionality controle hota hai.
