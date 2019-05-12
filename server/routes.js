const jwt = require('jsonwebtoken');

module.exports = (app, passport) => {

    app.get('/api/home', (req, res) => {
        res.send({
            message: "Strona startowa"
        })
    });

    app.get('/api/login', (req, res) => {
        res.send(req.flash('loginMessage'));
    });

    app.post('/api/signup', passport.authenticate('local-signup', {
        successRedirect: '/api/profile',
        failureRedirect: '/api/signup',
        failureFlash: true // allow flash messages
    }));

    app.post('/api/login', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/api/login',
        failureFlash: true // allow flash messages
    }));

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

    app.get('/api/signup', (req, res) => {
        res.send(req.flash('signupMessage'));
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

    //res.redirect('/api/home');
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