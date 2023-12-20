import express from "express";
import { getUserDetails, updatePointsAndTimestamps } from "../controllers/finalizeScore.controller.js";
const router=express.Router();

router.route("/save").post(updatePointsAndTimestamps);
router.route("/getUser").get(getUserDetails);
export default router;

