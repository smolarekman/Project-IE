module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/api/users', users.create);

    app.get('/api/users', users.findAll);

    app.get('/api/users/findSur/:surname', users.findAllBySur);

    app.get('/api/users/:userId', users.findOne);

    app.put('/api/users/:userId', users.update);

    app.delete('/api/users/:userId', users.delete);
};