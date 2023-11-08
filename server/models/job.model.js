const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

    //need to store id and name of creator
    createdBy: {
        id: {
            type:String
        },
        name: {
            type:String
        }
    },
    title: {
        type: String,
        required: [true,"Job title is required."]
    },
    nameOfBizHiring: {
        type: String,
        required: [true, "Name of business or person hiring is required"]
    },
    description: {
        type: String,
        required: [true, "Job description is required"]
    },
    contact: {
        type: String,
        required: [true, "Contact info is required"]
    },
    postedOn: {
        type: Date,
        required: [true, "Post date required."],
    }
}, { timestamps: true });


module.exports = mongoose.model('Job', JobSchema);