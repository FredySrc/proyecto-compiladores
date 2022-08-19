import express from "express";

import {
  formLogin,
  formRegister,
  createUser,
  validUser
} from "../../controller/security/user-controller.js";

const router = express.Router();
router.get("/login", formLogin);
router.get("/register", formRegister)
router.post("/register", createUser);
router.post("/login", validUser)

export default router;