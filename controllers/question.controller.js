import ManagementQuestion from "../QuestionsData/Management.js";
import TechnicalQuestion from "../QuestionsData/Technical.js";
import { QuestionSet1, QuestionSet2 } from "../models/QuestionModel.js";

async function getTechnicalQuestions(req, res) {
    try {
        const q = await QuestionSet1.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching questions', message: error.message });
    }
}

async function insertTechnicalQuestions(req, res) {
    try {
        // Insert questions from 'data.js' into the database
        await QuestionSet1.insertMany(TechnicalQuestion);
        res.json({ msg: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error inserting questions', message: error.message });
    }
}

async function deleteTechnicalQuestions(req, res) {
    try {
        await QuestionSet1.deleteMany();
        res.json({ msg: 'Questions Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting questions', message: error.message });
    }
}

async function getManagementQuestions(req, res) {
    try {
        const q = await QuestionSet2.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching questions', message: error.message });
    }
}

async function insertManagementQuestions(req, res) {
    try {
        // Insert questions from 'data.js' into the database
        await QuestionSet2.insertMany(ManagementQuestion);
        res.json({ msg: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error inserting questions', message: error.message });
    }
}

async function deleteManagementQuestions(req, res) {
    try {
        await QuestionSet2.deleteMany();
        res.json({ msg: 'Questions Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting questions', message: error.message });
    }
}

export {getTechnicalQuestions,insertTechnicalQuestions,deleteTechnicalQuestions,getManagementQuestions,insertManagementQuestions,deleteManagementQuestions};