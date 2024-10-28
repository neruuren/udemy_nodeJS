const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorsController = require('./controllers/errors');
const rootDir = require('./helpers/path');

const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User
        .findById("671eb00577841e4b0a9b20e3")
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorsController.get404);

mongoose
    .connect('mongodb+srv://udemyShoppingApp:OMQ7Qw6eU8gz1Ubf@cluster0.zmacg.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        User
            .findOne()
            .then(user => {
                if(!user) {
                    const user = new User({
                        name: 'Greg',
                        email: 'test@test.com',
                        cart: {
                            items: [],
                        },
                    });
                    user.save();
                }
            })
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
