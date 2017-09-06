/**
 * Created by Mordor on 2017-08-19.
 */
var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');
var csrf = require('csurf');
var passport = require('passport');
var flash = require('connect-flash');

var User = require('../models/user');

var csrfProtection = csrf();
router.use(csrfProtection);



router.get('/profile', isLoggedIn, function(req, res, next){
    res.render('user/profile', {name: req.user.email});
});

router.get('/logout', isLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/');
});



router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length>0});
});

router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));




module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}
function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}