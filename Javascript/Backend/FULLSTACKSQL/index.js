import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//custom routes
import userRouter from "./routes/auth.routes";

dotenv.config(); //{path:"path"}
const port = process.env.PORT || 4000;

const app = express();

app.use(cookieParser);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", () => {
  console.log("Home");

  resizeBy.status(200).json({
    success: true,
    message: "Test checked",
  });
});

app.use("/api/v1/users", userRouter);   //jab is path par koi request aaye toh isko yaha pr controle karo

app.listen(port, () => {
  console.log(`Backend is listening: ${port}`);
});
