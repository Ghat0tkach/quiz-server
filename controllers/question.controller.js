import AptitudeQuestion from "../QuestionsData/Aptitude.js";
import General_AwarenessQuestion from "../QuestionsData/General_Awareness.js";
import ManagementQuestion from "../QuestionsData/Management.js";
import SportsQuestion from "../QuestionsData/Sports.js";
import TechnicalQuestion from "../QuestionsData/Technical.js";
import { QuestionSet1, QuestionSet2, QuestionSet3, QuestionSet4, QuestionSet5 } from "../models/QuestionModel.js";

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

//Aptitude
async function getAptitudeQuestions(req, res) {
    try {
        const q = await QuestionSet3.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching questions', message: error.message });
    }
}

async function insertAptitudeQuestions(req, res) {
    try {
        // Insert questions from 'data.js' into the database
        await QuestionSet3.insertMany(AptitudeQuestion);
        res.json({ msg: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error inserting questions', message: error.message });
    }
}

async function deleteAptitudeQuestions(req, res) {
    try {
        await QuestionSet3.deleteMany();
        res.json({ msg: 'Questions Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting questions', message: error.message });
    }
}

//General Awareness
async function getGeneral_Awareness_Questions(req, res) {
    try {
        const q = await QuestionSet4.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching questions', message: error.message });
    }
}

async function insertGeneral_Awareness_Questions(req, res) {
    try {
        // Insert questions from 'data.js' into the database
        await QuestionSet4.insertMany(General_AwarenessQuestion);
        res.json({ msg: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error inserting questions', message: error.message });
    }
}

async function deleteGeneral_Awareness_Questions(req, res) {
    try {
        await QuestionSet4.deleteMany();
        res.json({ msg: 'Questions Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting questions', message: error.message });
    }
}
//sports
async function getSportsQuestions(req, res) {
    try {
        const q = await QuestionSet5.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching questions', message: error.message });
    }
}

async function insertSportsQuestions(req, res) {
    try {
        // Insert questions from 'data.js' into the database
        await QuestionSet5.insertMany(SportsQuestion);
        res.json({ msg: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error inserting questions', message: error.message });
    }
}

async function deleteSportsQuestions(req, res) {
    try {
        await QuestionSet5.deleteMany();
        res.json({ msg: 'Questions Deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting questions', message: error.message });
    }
}


export {getTechnicalQuestions,insertTechnicalQuestions,deleteTechnicalQuestions,getManagementQuestions,insertManagementQuestions,deleteManagementQuestions,
    getAptitudeQuestions,insertAptitudeQuestions,deleteAptitudeQuestions,
    getGeneral_Awareness_Questions,insertGeneral_Awareness_Questions,deleteGeneral_Awareness_Questions,getSportsQuestions,insertSportsQuestions,deleteSportsQuestions
};