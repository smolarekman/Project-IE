const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./server/config/databaseConfig.js');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// required for passport------------------------------------------------------------------------------------------------
app.use(session({secret: 'razdwatrzy'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// Require All routes---------------------------------------------------------------------------------------------------
require('./server/routes/userRoutes.js')(app);
require('./server/routes/products.routes.js')(app);
require('./server/routes/order.routes')(app);
require('./server/routes.js')(app, passport); // load our routes and pass in our server and fully configured passport
require('./server/config/passport')(passport);

app.listen(port, () => {
    console.log("Server is listening on port 5000");
});
