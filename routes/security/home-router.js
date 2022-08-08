import express from "express";
import { index } from "../../controller/security/home.controller.js";

const router = express.Router();

router.get('/', index)

export default router;
