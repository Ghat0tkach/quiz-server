import express from "express"
import trimRequest from "trim-request";
const router=express.Router();
import { register,login, logout, refreshtoken } from "../controllers/auth.controller.js";


router.route('/register').post(trimRequest.all,register);
router.route('/login').post(trimRequest.all,login);
router.route('/logout').post(trimRequest.all,logout);
router.route('/refreshtoken').post(trimRequest.all,refreshtoken);

export default router;