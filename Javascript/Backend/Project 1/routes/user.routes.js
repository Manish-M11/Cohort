import { Router } from "express";
import {
  registerUser,
  verifyUser,
  login,
  getMe,
  isLoggedOut,
  resetPassword,

} from "../controller/user.controller";

import { isLoggedIn } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe);
router.get("/logoutUser", isLoggedIn, isLoggedOut);


export default router;
