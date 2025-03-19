import express from "express"

const userRouter = express.Router();

userRouter.post("/register", registerUser);


export default userRouter;