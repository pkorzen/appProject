/**
 * Created by Mordor on 2017-08-19.
 */
var express = require('express');
var router = express.Router();

var csrf = require('csurf');
var passport = require('passport');
var flash = require('connect-flash');

var User = require('../models/user');

var fs = require('fs');

var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/adduser', isAdmin, function (req, res, next) {
    var messages = req.flash('error');
    res.render('admin/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/adduser', isAdmin, passport.authenticate('local.signup', {
    session: false,
    successRedirect: '/admin/userlist',
    failureRedirect: '/admin/adduser',
    failureFlash: true
}));

router.get('/userlist', isAdmin, function (req, res, next) {/////////////////////////////////////////////////////
    User.find(function (err, docs) {
        res.render('admin/userlist', {users: docs});
    });
});


router.get('/contact-edit', isAdmin, function (req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    var messages = req.flash('error');
    res.render('admin/contact-admin', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0,
        content: contentJSON.contact
    });
});

router.post('/contact-edit', isAdmin, function (req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    contentJSON.contact.title = req.body.titleContact;
    contentJSON.contact.name = req.body.nameContact;
    contentJSON.contact.address1 = req.body.address1Contact;
    contentJSON.contact.address2 = req.body.address2Contact;
    contentJSON.contact.phoneNumbers[0] = req.body.phoneNumber1Contact;
    contentJSON.contact.phoneNumbers[1] = req.body.phoneNumber2Contact;
    contentJSON.contact.wwwUrl = req.body.wwwUrlContact;
    contentJSON.contact.email = req.body.emailContact;
    contentJSON.contact.mapUrl = req.body.mapContact;
    console.log(contentJSON);
    contentJSON = JSON.stringify(contentJSON, null, 2);
    fs.writeFile('./public/content.json', contentJSON, function (err) {
        if (err)
            console.log(err);
        else
            console.log('contentJSON updated');
    });
    res.redirect('/admin/contact-edit');
});


router.get('/about-edit', isAdmin, function (req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    var messages = req.flash('error');
    res.render('admin/about-admin', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0,
        content: contentJSON.about
    });
});

router.post('/about-edit', isAdmin, function (req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    contentJSON.about.imagePath = req.body.imagePathAbout;
    contentJSON.about.description = req.body.descriptionAbout;
    console.log(contentJSON);
    contentJSON = JSON.stringify(contentJSON, null, 2);
    fs.writeFile('./public/content.json', contentJSON, function (err) {
        if (err)
            console.log(err);
        else
            console.log('contentJSON updated');
    });
    res.redirect('/admin/about-edit');
});

router.get('/landing-edit', isAdmin, function (req, res, next) {
    var messages = req.flash('error');
    fs.readdir('public/images/background-slider', function (err, files) {
        if (err) {
            console.log(err);
        }
        var arrTmp = [];
        var images = [];
        for (var i in files) {
            if (arrTmp.length == 3) {
                images.push(arrTmp);
                arrTmp = [];
            }
            arrTmp.push(files[i]);
        }
        if (arrTmp) {
            images.push(arrTmp);
        }

        console.log(images);
        res.render('admin/landing-bg-admin', {
            messages: messages,
            hasErrors: messages.length > 0,
            images: images
        });
    });
});


//ZARZĄDZANIE GALERIĄ

// router.get('/manage-gallery', isAdmin, function (req, res, next) {
//     var file2;
//     var testFolder = './public/images/galleries';
//     fs.readdir(testFolder, (err, files) => {
//         files.forEach(file => {
//             file2 = file;
//         });
//
// })

router.get('/manage-gallery',isAdmin, function(req, res, next) {
    fs.readdir('./public/images/galleries', function(err, files){
        if(err){
            console.log(err);
            res.redirect('/blog');
        }
        res.render('admin/manage-gallery', {
            dirs: files,
            csrfToken: req.csrfToken()
        });
        // console.log(files);
    });

});


router.post('/manage-gallery', isAdmin, function (req, res, next) {
    var dir = './public/images/galleries/';
    dir += req.body.link;
    console.log(dir);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    // fs.readdir('public/images/background-slider', function (err, files) {
    //     res.render('admin/manage-gallery', {
    //         csrfToken: req.csrfToken()gdo
    //     });
    // });

    // res.status(200).redirect('/blog');

    res.redirect('/admin/manage-gallery');


});

//KONIEC ZARZĄDZANIA GALERIĄ


module.exports = router;

function isAdmin(req, res, next) {
    if (req.isAuthenticated() && req.user.admin) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}