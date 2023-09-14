const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    
    //need to store id and name of creator
    createdBy: {
        id: {
            type:String
        },
        name: {
            type:String
        }
    },
    task:
     { type: String,required: [
        true,
        "Task is required"
    ] }
}, { timestamps: true });


module.exports = mongoose.model('Todo', TodoSchema);