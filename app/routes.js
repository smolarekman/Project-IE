const jwt = require('jsonwebtoken');

module.exports = function (app, passport) {

    app.get('/home', function (req, res) {
        res.send({
            message: "Strona startowa"
        })
    });

    app.get('/login', function (req, res) {
        res.send(req.flash('loginMessage'))
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true // allow flash messages
    }));

    //--------------------token
    app.post('/token/user', verifyToken, (req, res) => {
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

    app.get('/signup', function (req, res) {
        res.send(req.flash('signupMessage'));
    });

    app.get('/profile', isLoggedIn, function (req, res) {
        const user = req.user;
        jwt.sign({user}, 'secretkey', {expiresIn: '150s'}, (err, token) => {
            res.json({
                token
            });
        });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/home');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/home');
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