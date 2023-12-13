import express from "express"
import {getTechnicalQuestions,insertTechnicalQuestions,deleteTechnicalQuestions,
    getManagementQuestions,insertManagementQuestions,deleteManagementQuestions, getSportsQuestions, insertSportsQuestions, deleteSportsQuestions, getAptitudeQuestions, insertAptitudeQuestions, deleteAptitudeQuestions, getGeneral_Awareness_Questions, insertGeneral_Awareness_Questions, deleteGeneral_Awareness_Questions
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

router.route('/sports')
.get(getSportsQuestions)
.post(insertSportsQuestions)
.delete(deleteSportsQuestions)

router.route('/aptitude')
.get(getAptitudeQuestions)
.post(insertAptitudeQuestions)
.delete(deleteAptitudeQuestions)


router.route('/general')
.get(getGeneral_Awareness_Questions)
.post(insertGeneral_Awareness_Questions)
.delete(deleteGeneral_Awareness_Questions)



export default router