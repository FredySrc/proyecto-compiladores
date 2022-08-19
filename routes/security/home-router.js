import express from "express";
import { index, about } from "../../controller/security/home-controller.js";

const router = express.Router();

router.get('/', index)
router.get('/about', about)

export default router;
