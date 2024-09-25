const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorsController = require('./controllers/errors');
const rootDir = require('./helpers/path');

const db = require('./helpers/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorsController.get404);

app.listen(3000);
