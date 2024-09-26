const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorsController = require('./controllers/errors');
const rootDir = require('./helpers/path');

const sequilize = require('./helpers/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorsController.get404);

sequilize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    })

