const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const errorsController = require('./controllers/errors');
const rootDir = require('./helpers/path');

const MONGODB_URI = 'mongodb+srv://udemyShoppingApp:OMQ7Qw6eU8gz1Ubf@cluster0.zmacg.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'

const User = require('./models/user');

const app = express();

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
        secret: 'my secret(should be a long string in  production)', 
        resave: false, 
        saveUninitialized: false,
        store: store,
    })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
    if(!req.session.user) {
        return next();
    }
    User
    .findById(req.session.user._id)
    .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorsController.get404);

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        app.listen(3001);
    })
    .catch(err => {
        console.log(err);
    });
