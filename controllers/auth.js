const User = require('../models/user');

exports.getLogin = (req, res, next) => {   
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: false,
    });
};

exports.postLogin = (req, res, next) => {   
    User
    .findById("671eb00577841e4b0a9b20e3")
    .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};
