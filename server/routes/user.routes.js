module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/users', users.create);

    app.get('/api/users', users.findAll);

    app.get('/users/findSur/:surname', users.findAllBySur);

    app.get('/users/:userId', users.findOne);

    app.put('/users/:userId', users.update);

    app.delete('/users/:userId', users.delete);
};