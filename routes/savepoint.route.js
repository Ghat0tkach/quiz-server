import express from "express";
import { getUserDetails, updatePointsAndTimestamps } from "../controllers/finalizeScore.controller";
const router=express.Router();

router.route("/save").post(updatePointsAndTimestamps);
router.route("/getUser").post(getUserDetails);
export default router;

