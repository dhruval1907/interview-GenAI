const mongoose = require("mongoose")

const technicalQuestionsSchema = mongoose.Schema({

    question: {
        type: String,
        required: true
    },
    intention: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }

}, {
    _id: false
})

const behaviourQuestionsSchema = mongoose.Schema({

    question: {
        type: String,
        required: true
    },
    intention: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }

}, {
    _id: false
})

const skillGapsSchama = mongoose.Schema({
    skill: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ["low", ",edium", "high"],
        required: true
    }
}, {
    _id: false
})

const preprationPlan = mongoose.Schema({
    day: {
        type: Number,
        required: true
    },
    focus: {
        type: Number,
        required: true
    },
    tasks: [{
        type: String,
        required: true
    }]
})

const interViewReport = mongoose.Schema({
    jobDescription: {
        type: String,
        required: true
    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100
    },
    technicalQuestions: [technicalQuestionsSchema],
    behaviourQuestions: [technicalQuestionsSchema],
    skillGaps: [skillGapsSchama],
    prepration: [preprationPlan]
}, {
    _id: false
})

const interviewModel = mongoose.model("InterViewReport", interViewReport)

module.exports = interviewModel