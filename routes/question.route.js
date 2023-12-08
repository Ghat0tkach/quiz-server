import express from "express"
import {getTechnicalQuestions,insertTechnicalQuestions,deleteTechnicalQuestions,
    getManagementQuestions,insertManagementQuestions,deleteManagementQuestions
} from "../controllers/question.controller.js"


const router=express.Router();

router.route('/technical')
.get(getTechnicalQuestions)
.post(insertTechnicalQuestions)
.delete(deleteTechnicalQuestions)

router.route('/management')
.get(getManagementQuestions)
.post(insertManagementQuestions)
.delete(deleteManagementQuestions)

export default router