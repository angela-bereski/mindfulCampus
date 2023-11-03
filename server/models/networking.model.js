const mongoose = require('mongoose');

const NetworkSchema = new mongoose.Schema({

    //need to store id and name of creator
    createdBy: {
        id: {
            type:String
        },
        name: {
            type:String
        }
    },
    firstName: {
        type: String,
        required: [true,"First name is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    website: {
        type: String,
        required: [false]
    },
    location: {
        type: String,
        required: [false]
    },
    wherework: {
        type: String,
        required: [false]
    },
    specialites: {
        type: String,
        required: [false]
    }
}, { timestamps: true });


module.exports = mongoose.model('Network', NetworkSchema);