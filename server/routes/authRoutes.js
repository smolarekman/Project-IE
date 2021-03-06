const jwt = require('jsonwebtoken');

module.exports = (app, passport) => {

    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect: '/api/profile',
        failureRedirect: '/api/signup',
        failureFlash: true
    }));

    app.post('/api/login', passport.authenticate('local-login', {
        successRedirect: '/api/profile',
        failureRedirect: '/api/login',
        failureFlash: true
    }));

    app.get('/api/login', (req, res) => {
        res.send(req.flash('loginMessage'));
    });
    app.get('/api/signup', (req, res) => {
        res.send(req.flash('signupMessage'));
    });
    //--------------------token
    app.post('/api/token/user', verifyToken, (req, res) => {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    authData
                });
            }
        });

    });

    app.get('/api/profile', isLoggedIn, (req, res) => {
        const user = req.user;
        jwt.sign({user}, 'secretkey', {expiresIn: '150s'}, (err, token) => {
            res.json({
                token
            });
        });
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

}

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }

}