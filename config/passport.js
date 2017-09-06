var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null, user.id); ///when i want store user in session serialize him by id
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){/////////

    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password, minimum length is 6').notEmpty().isLength({min:6});
    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, function(err, user){
        if(err)
            return done(err);
        if(user){
            console.log('Email in use');
            return done(null, false, {message: 'Email is in use.'});
        }


        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.admin = false; //////////////

        newUser.save(function(err, result){
            if(err)
                return done(err);
            console.log(newUser + 'zostal dodany');
            return done(null, newUser);

        });

    });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){

    req.checkBody('email', 'Invalid email').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(error){
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, function(err, user){
        if(err)
            return done(err);
        if(!user){
            console.log('No such User');
            return done(null, false, {message: 'No user found'});
        }
        if(!user.validPassword(password)){
            console.log('Password incorrect');
            return done(null, false, {message: 'Password incorrect!'});
        }
        return done(null,user);

    });
}));