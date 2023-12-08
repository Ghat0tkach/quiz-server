import mongoose from 'mongoose';

// Common schema options
const questionSchemaOptions = {
    timestamps: true,
};

// Define a common schema
const commonQuestionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctOption: Number,
    points: Number,
}, questionSchemaOptions);

// Create models with the common schema and different collection names
const QuestionSet1 = mongoose.model('QuestionSet1', commonQuestionSchema, 'Technical');
const QuestionSet2 = mongoose.model('QuestionSet2', commonQuestionSchema, 'Management');
const QuestionSet3 = mongoose.model('QuestionSet3', commonQuestionSchema, 'QuestionSet3Collection');

export { QuestionSet1, QuestionSet2, QuestionSet3 };
