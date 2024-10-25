const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorsController = require('./controllers/errors');
const rootDir = require('./helpers/path');

const mongoConnect = require('./helpers/database').mongoConnect;
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById("670d1f5930e831bfe7c56084")
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

app.use(errorsController.get404);

mongoConnect(() => {
    app.listen(3000);
});
