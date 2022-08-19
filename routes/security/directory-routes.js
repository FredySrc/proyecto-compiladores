import express from "express";
import { directory, details } from "../../controller/security/directory-controller.js";

const router = express.Router();

router.get('/directory', directory)

router.get('/details/:id', details);


export default router;