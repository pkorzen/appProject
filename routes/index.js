var express = require('express');
var router = express.Router();
var BlogPost = require('../models/blogPost');
var passport = require('passport');
var fs = require('fs');

/* Upload files */
var multer  = require('multer');

var storageLand = multer.diskStorage({
   destination: function (req, file, cb) {
       cb(null, 'public/images/background-slider/');
   },
   filename: function (req, file, cb) {
       var data = new Date();
       cb(null, data.getTime() + "-" + file.originalname);
   }
});

var uploadLand = multer({
    storage: storageLand,
    fileFilter: function (req, file, cb) {
        imgExt = ['jpg', 'jpeg', 'gif', 'png'];
        if (imgExt.indexOf(file.originalname.split('.').pop().toLowerCase()) == -1) {
            return cb(null, false)
        }
        cb(null, true)
    },
    limits: {
        files: 10
    }
  }).array('filesInput');

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readdir('public/images/background-slider', function(err, files){
        if(err){
            console.log(err);
            res.redirect('/blog');
        }
        res.render('index', {layout: 'layoutLanding.hbs', images: files});
    });

});

router.get('/blog', function(req, res, next) {
  res.render('mainpages/blog', { title: 'Blog' });
});

let postInfo;
// Endpoint (BLOG_POSTS)
router.get('/blog-posts', function(req, res){
  BlogPost.find().sort('-time').exec(function (err, data){
    if(err){
      console.log(err)
      res.redirect('/blog');
    }
    res.json(data);
  });
});

router.post('/post_info', function(req, res){
  BlogPost.findById(req.body.id, function(err, data){
   if(err) throw err;

    console.log(req.body.id);
    console.log(data);
    postInfo = data;

    res.status(200).end();
  });
});

router.get('/get-post', function(req, res){

  res.json(postInfo);
});

router.get('/blog/:name', function(req, res){
  BlogPost.findOne({'title': req.params.name}, function(err, data){
    console.log(req.body.name);
    res.render('mainpages/post_id', { post: data });
  })
});

// POST UPLOAD
router.post('/addpost', function(req, res){

  console.log(req.body);
  var newPost = new BlogPost(req.body);
  console.log('newPost: ' + newPost);

  newPost.save(function(err){
    if(err){
      console.log(err);
      throw err;
    }
    console.log('Added!');
  })

  res.status(200).redirect('/blog');
});

// DELETE POST
router.post('/deletepost', function(req, res){
  BlogPost.findByIdAndRemove(req.body.id, function(err, data){
    // delete image array
    data.images.forEach(function(image){
      fs.unlink('./public' + image, function(err, prod){
        if(err)  throw err;
      });
    })

    // delete main image
    fs.unlink('./public' + data.mainImagePath, function(err, prod){
      if(err)  throw err;
    });

    if (err) throw err;
  });

});

// UPLOAD PICTURES
var postStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/posts/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({storage: postStorage});
router.post('/upload', upload.array('photos', 150), function(req,res){
  console.log('Added!');
});

// Post page by mongoID
router.get('/blog/posts/:title', function(req,res){
  res.render('mainpages/post_id', {title: req.params.title});
});

router.get('/about', function(req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    res.render('mainpages/about-me', { title: 'O mnie', content: contentJSON.about});
});

router.get('/portfolio', function(req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    console.log(contentJSON.imagesTmp);
    res.render('mainpages/portfolio', { title: 'Portfolio', images: contentJSON.imagesTmp});
});

router.get('/contact', function(req, res, next) {
    var contentJSON = JSON.parse(fs.readFileSync('public/content.json'));
    res.render('mainpages/contact', { title: 'Kontakt', content: contentJSON.contact});
});


// SEND EMAIL
var nodemailer = require('nodemailer');

router.post('/contact', function(req, res){

    var data = req.body;
    console.log(data);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'photophotoexapmle@gmail.com',
        pass: 'photophoto111'
      }
    });

    var mailOptions = {
      from: data.contactEmail,
      to: 'photophotoexapmle@gmail.com',
      subject: data.contactName + ' Przysyła nową wiadomość',
      text: 'Od: ' + data.contactEmail + "\n\n\n" + data.contactMsg
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
});

router.delete('/api/imagesbg/:id', isAdmin, function(req, res, next){
    var filePath = './public/images/background-slider/' + req.params.id;
    console.log(filePath);
    console.log(__dirname);
    fs.unlink(filePath, function(err, prod){
        if(err)
            res.send(err);
        res.send(prod);
    });
});



router.post('/api/imagesbg', isAdmin, function(req, res, next){
    uploadLand(req, res, function (err) {
        if (err) {
            req.flash('error', err.message);
        }else{
            req.flash('error', 'Images added!');
        }

        res.redirect('/admin/landing-edit');
    });
});

router.post('/api/imagesgallery', isAdmin, function(req, res, next){
    console.log(req.body.dirc);
    uploadLand(req, res, function (err) {
        if (err) {
            req.flash('error', err.message);
        }else{
            req.flash('error', 'Images added!');
        }

        res.redirect('/admin/manage-gallery');
    });
});

// admin endpoint
router.get('/isadmin', isAdmin, function(req, res){
  res.json({"admin": true});
})

module.exports = router;

function isAdmin(req, res, next){
    if(req.isAuthenticated() && req.user.admin){
        return next();
    }
    res.redirect('/');
}
