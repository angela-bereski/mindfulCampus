const User = require('../controllers/user.controller');
const {authenticate, checkUser} = require('../config/jwtconfig');

module.exports = (app) => {
    
    //CRUD commands
    app.get('/api/users', User.getAll);
    app.get('/api/user/:id', User.getOne);
    app.put('/api/update/:id', User.update);
    app.delete('/api/user/delete/:id', User.deleteUser);

    app.get('/api/getAllJobs', User.getAllJobs);
    app.get('/api/getOneJob/:id', User.getOneJob);
    app.post('/api/createJob', User.createJob);
    app.delete('/api/deleteJob/:id', User.deleteJob);

    app.get('/api/getAllTodos', User.getAllTodos);
    app.get('/api/getOneTodo/:id', User.getOneTodo);
    app.post('/api/createTodo', User.createTodo);
    app.delete('/api/deleteTodo/:id', User.deleteTodo);

    app.get('/api/getAllCountdowns', User.getAllCountdowns);
    app.get('/api/getOneCountdown/:id', User.getOneCountdown);
    app.post('/api/createCountdown', User.createCountdown);
    app.delete('/api/deleteCountdown/:id', User.deleteCountdown);

    //log and reg commands
    app.post('/api/register', User.register);
    app.post('/api/login', User.login);
    app.get('/api/loggedUser', User.getLoggedUser);
    app.get('/api/logout', User.logOut);

}