const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./helpers/path');

const app = express();

//pug
// app.set('view engine', 'pug');

//handlebars
// const expressHbs = require('express-handlebars');
// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
// app.set('view engine', 'handlebars');

//EJS
app.set('view engine', 'ejs');

app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));

    //pug
    res.status(404).render('404', {pageTitle: 'Page not Found!'})
});

app.listen(3000);
