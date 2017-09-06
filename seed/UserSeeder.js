var User = require('../models/user');

var mongoose = require('mongoose');

var options = {
  user: 'mo5643_photo',
  pass: 'iyPUqFdDEhInScca83H5'
}

mongoose.connect('mongodb://mongo.ct8.pl:27017/mo5643_photo', options);

var newUser  = new User();

newUser.email = 'Admin';
newUser.password = newUser.encryptPassword('qwerty');
newUser.admin = true; //////////////

newUser.save(function(err, result){
    if(err)
        return done(err);

    console.log(newUser + 'zostal dodany');
    exit();

});

function exit() {
    mongoose.disconnect();
}
