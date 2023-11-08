const User = require('../models/user.model');
const Job = require('../models/job.model');
const Todo = require('../models/todo.model');
const Countdown = require('../models/countdown.model')
const Network = require('../models/networking.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
//const fs = require('fs');

module.exports.getAll = (req,res) => {
    User.find()
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.getOne = (req,res) => {
    User.findById({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.update = (req,res) => {
    User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

// module.exports.deleteOne = (req,res) => {
//     User.deleteOne({_id:req.params.id})
//     .then((req) => res.json(req))
//     .catch((err) => console.log(err))
// }

module.exports.register = (req,res) => {
    let user = new User(req.body);
    user.save()
        .then((newUser) => {
            console.log(newUser)
            res.json(newUser);
        })
        .catch((err) => {
            console.log({error:err})
            res.status(400).json({err:err.errors});
        })
}

module.exports.deleteUser = (req,res) => {
    User.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
}

module.exports.createJob = (req,res) => {
    let job = new Job(req.body)
    console.log(job)
    job.save()
        .then((result)=>
        res.json(result))
        .catch((err) => {
            console.log("Error in create job")
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.getAllJobs = (req,res) => {
    Job.find()
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.getOneJob = (req,res) => {
    Job.findById({_id:req.params.id})
    .then((req)=>{
        console.log("In getOneJob")
        res.json(req)
    })
    .catch((err) => console.log(err))
}


module.exports.editJob = (req, res) => {
    Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    // .then((result) => res.json(result))
    // .catch((err) => res.status(400).json(err));
    .then((req)=>{
        console.log("In editJob")
        res.json(req)
    })
    .catch((err) => console.log(err))
}

module.exports.deleteJob = (req,res) => {
    Job.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

// module.exports.login = async (req,res) => {
//     User.findOne({email: req.body.email})
//         .then(user => {
//             if (user === null) {
//                 res.status(400).json({message:'Invalid login attempt'})
//             } else {
//                 bcrypt.compare(req.body.password, user.password)
//                     .then(passwordIsValid => {
//                         if (passwordIsValid) {
//                             res.
//                             cookie(
//                                 'usertoken',
//                                 jwt.sign({_id: user._id}, process.env.JWT_SECRET),
//                                 {
//                                     httpOnly:true
//                                 }
//                             )
//                             .json({msg: 'success!'});
//                         } else {
//                             res.status(400).json({msg: 'Invalid login attempt'})
//                         }
//                     })
//                 .catch(err => {
//                     console.log('error from bcrypt compare');
//                     console.log(err);
//                     res.status(400).json({msg: 'Invalid login attempt'})
//                 });
//             }
//         })
//     .catch(err => res.status(400).json(err));
// }

module.exports.login = async (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user === null) {
          res.status(400).json({ message: 'Invalid email or password' });
        } else {
          bcrypt.compare(req.body.password, user.password)
            .then((passwordIsValid) => {
              console.log('passwordIsValid:', passwordIsValid);
              if (passwordIsValid) {
                res.cookie(
                  'usertoken',
                  jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                  {
                    httpOnly: true,
                  }
                ).json({ msg: 'success!' });
              } else {
                console.log('passwordIsValid:', passwordIsValid);
                res.status(400).json({ message: 'Invalid email or password' });
              }
            })
            .catch((err) => {
              console.log('error from bcrypt compare');
              console.log(err);
              res.status(400).json({ message: 'Invalid email or password' });
            });
        }
      })
      .catch((err) => {
        console.log('error from User.findOne');
        console.log(err);
        res.status(400).json(err);
      });
  };
  
  
  
  

module.exports.logOut = (req, res) => {
    console.log("In logout controller")
    res.cookie('usertoken', 'none', {
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 1000)
    })
    .json({msg: "ok"});
}

module.exports.getLoggedUser = (req,res) => {
    const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true });
    User.findById(decodedJWT.payload._id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
}

module.exports.createTodo = (req,res) => {
    let todo = new Todo(req.body)
    console.log(todo)
    todo.save()
        .then((result)=>
        res.json(result))
        .catch((err) => {
            console.log("Error in create todo")
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.getAllTodos = (req,res) => {
    Todo.find()
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.getOneTodo = (req,res) => {
    Todo.findById({_id:req.params.id})
    .then((req)=>{
        console.log("In getOneTodo")
        res.json(req)
    })
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = (req,res) => {
    Todo.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.createCountdown = (req,res) => {
    let countdown = new Countdown(req.body)
    console.log(countdown)
    countdown.save()
        .then((result)=>
        res.json(result))
        .catch((err) => {
            console.log("Error in create countdown")
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.getAllCountdowns = (req,res) => {
    Countdown.find()
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.getOneCountdown = (req,res) => {
    Countdown.findById({_id:req.params.id})
    .then((req)=>{
        console.log("In getOneCountdown")
        res.json(req)
    })
    .catch((err) => console.log(err))
}

module.exports.deleteCountdown = (req,res) => {
    Countdown.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.createNetwork = (req,res) => {
    let network = new Network(req.body)
    console.log(network)
    network.save()
        .then((result)=>
        res.json(result))
        .catch((err) => {
            console.log("Error in create network")
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.getAllNetworks = (req,res) => {
    Network.find()
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}

module.exports.getOneNetwork = (req,res) => {
    Network.findById({_id:req.params.id})
    .then((req)=>{
        console.log("In getOneNetwork")
        res.json(req)
    })
    .catch((err) => console.log(err))
}

module.exports.editNetwork = (req, res) => {
    Network.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    // .then((result) => res.json(result))
    // .catch((err) => res.status(400).json(err));
    .then((req)=>{
        console.log("In editNetwork")
        res.json(req)
    })
    .catch((err) => console.log(err))
}

module.exports.deleteNetwork = (req,res) => {
    Network.deleteOne({_id:req.params.id})
    .then((req) => res.json(req))
    .catch((err) => console.log(err))
}