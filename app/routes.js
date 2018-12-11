module.exports = function (app, passport) {

    app.get('/home', function (req, res) {
        res.send({
            message: "Strona startowa"
        })
    });

    app.get('/login', function (req, res) {
        res.send(req.flash('loginMessage'))
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true // allow flash messages
    }));

    app.get('/signup', function (req, res) {
        res.send(req.flash('signupMessage'));
    });

    app.get('/profile', isLoggedIn, function (req, res) {
        res.send(req.user)
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