// const mongoose = require('mongoose');

// const CountdownSchema = new mongoose.Schema({
    
//     //need to store id and name of creator
//     createdBy: {
//         id: {
//             type:String
//         },
//         name: {
//             type:String
//         }
//     },
//     countdown:
//      { type: String,required: [
//         true,
//         "Name of countdown is required"
//     ] },
//     date:
//     { type: Date,required: [
//        true,
//        "End date of countdown is required"
//    ] },
//    countdownItems: [
//     {
//         days: Number,
//         hours: Number,
//         minutes: Number,
//         seconds: Number,
//     },
// ],
// }, { timestamps: true });


// module.exports = mongoose.model('Countdown', CountdownSchema);


const mongoose = require('mongoose');

const CountdownSchema = new mongoose.Schema({
  createdBy: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  countdown: {
    type: String,
    required: [
      true,
      "Name of countdown is required",
    ],
  },
  dateTime: {
    type: Date, // Store date and time
    required: [
      true,
      "Date and time for the countdown are required",
    ],
  },
  countdownItems: [
    {
      days: Number,
      hours: Number,
      minutes: Number,
      seconds: Number,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Countdown', CountdownSchema);