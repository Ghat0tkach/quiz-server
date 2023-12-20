import express from "express"
import authRoutes from "./auth.route.js"
import questionRoutes from "./question.route.js"
import saveRoutes from "./savepoint.route.js"
const router=express.Router();

router.use("/auth",authRoutes)
router.use("/question",questionRoutes)
router.use("/final",saveRoutes)
//http://localhost:8000/auth/register
// router.use("/conversation",conversationRoutes)
// router.use("/message", messageRoutes)
// router.use("/user",userRoutes);
export default router;