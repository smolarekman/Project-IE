module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/dasd/users', users.create);

    app.get('/users', users.findAll);

    app.get('/users/findSur/:surname', users.findAllBySur);

    app.get('/users/:userId', users.findOne);

    app.put('/users/:userId', users.update);

    app.delete('/users/:userId', users.delete);
};