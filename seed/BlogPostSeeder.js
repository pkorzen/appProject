/**
 * Created by Mordor on 2017-08-18.
 */
var BlogPost = require('../models/blogPost');

var mongoose = require('mongoose');

var options = {
  user: 'mo5643_photo',
  pass: 'iyPUqFdDEhInScca83H5'
}

mongoose.connect('mongodb://mongo.ct8.pl:27017/mo5643_photo', options);

var blogPosts  = [
    new BlogPost({
        title: 'Just Love',
        shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, nunc luctus finibus molestie, odio justo dictum lorem, eget malesuada eros metus et nunc. Phasellus pellentesque facilisis nisi, sit amet viverra orci. Phasellus vulputate quam orci, at hendrerit magna elementum ac. Phasellus vulputate vehicula egestas. Ut lobortis eget mauris eu malesuada. Aliquam accumsan nunc eget elit eleifend maximus. Phasellus quis erat aliquam, euismod urna at, pretium lorem. Vivamus vitae leo mi. Nam tristique arcu nec risus ultrices congue.',
        content: `Suspendisse a ipsum ac eros bibendum venenatis. Ut imperdiet velit est, vitae pretium velit sagittis ut. Donec facilisis nisi finibus porta pharetra. Vestibulum cursus gravida leo quis semper. Nulla aliquet egestas sollicitudin. Etiam malesuada sem eu libero ultricies mollis. Cras nisi velit, ultricies non justo ac, porttitor commodo massa. Cras in pharetra lectus. Pellentesque blandit mattis varius.
        Pellentesque vel nibh vel ex lobortis vestibulum a ut dolor. Proin tortor leo, rhoncus ac neque eu, consectetur convallis mauris. Integer quis metus vitae eros sodales malesuada. Curabitur vehicula, justo ut pulvinar aliquet, dolor nisi pharetra lacus, at rutrum mi mi sed urna. Duis gravida libero vel maximus ultricies. Praesent a viverra neque. Quisque molestie blandit quam, et varius dui maximus quis. Nam maximus posuere turpis, id tincidunt lacus mollis nec. Nam a gravida elit, quis elementum tortor. Nullam ultricies porttitor interdum.
        Praesent mollis ante ut diam blandit, ac tempus sapien aliquam. Suspendisse vel velit vel diam molestie mollis a volutpat nunc. Phasellus mattis ex quis nisl semper, eu laoreet neque viverra. Nam pulvinar quam id nisi ultrices, id eleifend massa hendrerit. Suspendisse sodales urna quis augue consectetur, at facilisis nisl tristique. Vivamus nec dolor diam. Curabitur pellentesque nibh sed orci eleifend, sed dictum nisi finibus. Curabitur laoreet enim nunc, id aliquam libero eleifend in. Morbi fermentum purus ac tortor rutrum, ac tristique diam laoreet. Sed pulvinar sem diam, id vestibulum ante porttitor ac. Vestibulum eu placerat est, ac efficitur purus. In libero felis, pellentesque non lorem a, dictum dignissim elit. Curabitur gravida ultrices mauris non finibus. Vivamus sodales eget nisl id lacinia. Pellentesque efficitur dui a eros gravida consequat. Phasellus ornare tempor ipsum in euismod.
        Nullam blandit nulla mi, quis luctus diam dignissim eget. Maecenas nec odio vitae nisi scelerisque convallis vitae in ipsum. Donec vel eros gravida, tincidunt lacus in, volutpat justo. Aliquam eget felis pretium, vestibulum est non, dapibus leo. Praesent aliquet porttitor neque eu tincidunt. In est elit, luctus non urna eu, ullamcorper tincidunt velit. Vestibulum venenatis, enim id laoreet aliquam, sapien nunc maximus diam, a efficitur elit lectus a lacus. In hac habitasse platea dictumst. Ut rutrum mauris vel enim vestibulum tincidunt. Nullam in rhoncus neque. Fusce vitae elementum ligula. Maecenas et dolor sapien.`,
        mainImagePath: 'images/example/grafika2.jpg',
        visitors: 4
    }),
    new BlogPost({
        title: 'xDDD',
        shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, nunc luctus finibus molestie, odio justo dictum lorem, eget malesuada eros metus et nunc. Phasellus pellentesque facilisis nisi, sit amet viverra orci. Phasellus vulputate quam orci, at hendrerit magna elementum ac. Phasellus vulputate vehicula egestas. Ut lobortis eget mauris eu malesuada. Aliquam accumsan nunc eget elit eleifend maximus. Phasellus quis erat aliquam, euismod urna at, pretium lorem. Vivamus vitae leo mi. Nam tristique arcu nec risus ultrices congue.',
        content: `Suspendisse a ipsum ac eros bibendum venenatis. Ut imperdiet velit est, vitae pretium velit sagittis ut. Donec facilisis nisi finibus porta pharetra. Vestibulum cursus gravida leo quis semper. Nulla aliquet egestas sollicitudin. Etiam malesuada sem eu libero ultricies mollis. Cras nisi velit, ultricies non justo ac, porttitor commodo massa. Cras in pharetra lectus. Pellentesque blandit mattis varius.
        Pellentesque vel nibh vel ex lobortis vestibulum a ut dolor. Proin tortor leo, rhoncus ac neque eu, consectetur convallis mauris. Integer quis metus vitae eros sodales malesuada. Curabitur vehicula, justo ut pulvinar aliquet, dolor nisi pharetra lacus, at rutrum mi mi sed urna. Duis gravida libero vel maximus ultricies. Praesent a viverra neque. Quisque molestie blandit quam, et varius dui maximus quis. Nam maximus posuere turpis, id tincidunt lacus mollis nec. Nam a gravida elit, quis elementum tortor. Nullam ultricies porttitor interdum.
        Praesent mollis ante ut diam blandit, ac tempus sapien aliquam. Suspendisse vel velit vel diam molestie mollis a volutpat nunc. Phasellus mattis ex quis nisl semper, eu laoreet neque viverra. Nam pulvinar quam id nisi ultrices, id eleifend massa hendrerit. Suspendisse sodales urna quis augue consectetur, at facilisis nisl tristique. Vivamus nec dolor diam. Curabitur pellentesque nibh sed orci eleifend, sed dictum nisi finibus. Curabitur laoreet enim nunc, id aliquam libero eleifend in. Morbi fermentum purus ac tortor rutrum, ac tristique diam laoreet. Sed pulvinar sem diam, id vestibulum ante porttitor ac. Vestibulum eu placerat est, ac efficitur purus. In libero felis, pellentesque non lorem a, dictum dignissim elit. Curabitur gravida ultrices mauris non finibus. Vivamus sodales eget nisl id lacinia. Pellentesque efficitur dui a eros gravida consequat. Phasellus ornare tempor ipsum in euismod.
        Nullam blandit nulla mi, quis luctus diam dignissim eget. Maecenas nec odio vitae nisi scelerisque convallis vitae in ipsum. Donec vel eros gravida, tincidunt lacus in, volutpat justo. Aliquam eget felis pretium, vestibulum est non, dapibus leo. Praesent aliquet porttitor neque eu tincidunt. In est elit, luctus non urna eu, ullamcorper tincidunt velit. Vestibulum venenatis, enim id laoreet aliquam, sapien nunc maximus diam, a efficitur elit lectus a lacus. In hac habitasse platea dictumst. Ut rutrum mauris vel enim vestibulum tincidunt. Nullam in rhoncus neque. Fusce vitae elementum ligula. Maecenas et dolor sapien.`,
        mainImagePath: 'images/example/relaxing-resorts.jpg',
        visitors: 1
    }),
    new BlogPost({
        title: 'WTFFFF',
        shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, nunc luctus finibus molestie, odio justo dictum lorem, eget malesuada eros metus et nunc. Phasellus pellentesque facilisis nisi, sit amet viverra orci. Phasellus vulputate quam orci, at hendrerit magna elementum ac. Phasellus vulputate vehicula egestas. Ut lobortis eget mauris eu malesuada. Aliquam accumsan nunc eget elit eleifend maximus. Phasellus quis erat aliquam, euismod urna at, pretium lorem. Vivamus vitae leo mi. Nam tristique arcu nec risus ultrices congue.',
        content: `Suspendisse a ipsum ac eros bibendum venenatis. Ut imperdiet velit est, vitae pretium velit sagittis ut. Donec facilisis nisi finibus porta pharetra. Vestibulum cursus gravida leo quis semper. Nulla aliquet egestas sollicitudin. Etiam malesuada sem eu libero ultricies mollis. Cras nisi velit, ultricies non justo ac, porttitor commodo massa. Cras in pharetra lectus. Pellentesque blandit mattis varius.
        Pellentesque vel nibh vel ex lobortis vestibulum a ut dolor. Proin tortor leo, rhoncus ac neque eu, consectetur convallis mauris. Integer quis metus vitae eros sodales malesuada. Curabitur vehicula, justo ut pulvinar aliquet, dolor nisi pharetra lacus, at rutrum mi mi sed urna. Duis gravida libero vel maximus ultricies. Praesent a viverra neque. Quisque molestie blandit quam, et varius dui maximus quis. Nam maximus posuere turpis, id tincidunt lacus mollis nec. Nam a gravida elit, quis elementum tortor. Nullam ultricies porttitor interdum.
        Praesent mollis ante ut diam blandit, ac tempus sapien aliquam. Suspendisse vel velit vel diam molestie mollis a volutpat nunc. Phasellus mattis ex quis nisl semper, eu laoreet neque viverra. Nam pulvinar quam id nisi ultrices, id eleifend massa hendrerit. Suspendisse sodales urna quis augue consectetur, at facilisis nisl tristique. Vivamus nec dolor diam. Curabitur pellentesque nibh sed orci eleifend, sed dictum nisi finibus. Curabitur laoreet enim nunc, id aliquam libero eleifend in. Morbi fermentum purus ac tortor rutrum, ac tristique diam laoreet. Sed pulvinar sem diam, id vestibulum ante porttitor ac. Vestibulum eu placerat est, ac efficitur purus. In libero felis, pellentesque non lorem a, dictum dignissim elit. Curabitur gravida ultrices mauris non finibus. Vivamus sodales eget nisl id lacinia. Pellentesque efficitur dui a eros gravida consequat. Phasellus ornare tempor ipsum in euismod.
        Nullam blandit nulla mi, quis luctus diam dignissim eget. Maecenas nec odio vitae nisi scelerisque convallis vitae in ipsum. Donec vel eros gravida, tincidunt lacus in, volutpat justo. Aliquam eget felis pretium, vestibulum est non, dapibus leo. Praesent aliquet porttitor neque eu tincidunt. In est elit, luctus non urna eu, ullamcorper tincidunt velit. Vestibulum venenatis, enim id laoreet aliquam, sapien nunc maximus diam, a efficitur elit lectus a lacus. In hac habitasse platea dictumst. Ut rutrum mauris vel enim vestibulum tincidunt. Nullam in rhoncus neque. Fusce vitae elementum ligula. Maecenas et dolor sapien.`,
        mainImagePath: 'images/example/pexels-photo-207962.jpeg',
        visitors: 0
    }),
    new BlogPost({
        title: 'wiewioreczka',
        shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, nunc luctus finibus molestie, odio justo dictum lorem, eget malesuada eros metus et nunc. Phasellus pellentesque facilisis nisi, sit amet viverra orci. Phasellus vulputate quam orci, at hendrerit magna elementum ac. Phasellus vulputate vehicula egestas. Ut lobortis eget mauris eu malesuada. Aliquam accumsan nunc eget elit eleifend maximus. Phasellus quis erat aliquam, euismod urna at, pretium lorem. Vivamus vitae leo mi. Nam tristique arcu nec risus ultrices congue.',
        content: `Suspendisse a ipsum ac eros bibendum venenatis. Ut imperdiet velit est, vitae pretium velit sagittis ut. Donec facilisis nisi finibus porta pharetra. Vestibulum cursus gravida leo quis semper. Nulla aliquet egestas sollicitudin. Etiam malesuada sem eu libero ultricies mollis. Cras nisi velit, ultricies non justo ac, porttitor commodo massa. Cras in pharetra lectus. Pellentesque blandit mattis varius.
        Pellentesque vel nibh vel ex lobortis vestibulum a ut dolor. Proin tortor leo, rhoncus ac neque eu, consectetur convallis mauris. Integer quis metus vitae eros sodales malesuada. Curabitur vehicula, justo ut pulvinar aliquet, dolor nisi pharetra lacus, at rutrum mi mi sed urna. Duis gravida libero vel maximus ultricies. Praesent a viverra neque. Quisque molestie blandit quam, et varius dui maximus quis. Nam maximus posuere turpis, id tincidunt lacus mollis nec. Nam a gravida elit, quis elementum tortor. Nullam ultricies porttitor interdum.
        Praesent mollis ante ut diam blandit, ac tempus sapien aliquam. Suspendisse vel velit vel diam molestie mollis a volutpat nunc. Phasellus mattis ex quis nisl semper, eu laoreet neque viverra. Nam pulvinar quam id nisi ultrices, id eleifend massa hendrerit. Suspendisse sodales urna quis augue consectetur, at facilisis nisl tristique. Vivamus nec dolor diam. Curabitur pellentesque nibh sed orci eleifend, sed dictum nisi finibus. Curabitur laoreet enim nunc, id aliquam libero eleifend in. Morbi fermentum purus ac tortor rutrum, ac tristique diam laoreet. Sed pulvinar sem diam, id vestibulum ante porttitor ac. Vestibulum eu placerat est, ac efficitur purus. In libero felis, pellentesque non lorem a, dictum dignissim elit. Curabitur gravida ultrices mauris non finibus. Vivamus sodales eget nisl id lacinia. Pellentesque efficitur dui a eros gravida consequat. Phasellus ornare tempor ipsum in euismod.
        Nullam blandit nulla mi, quis luctus diam dignissim eget. Maecenas nec odio vitae nisi scelerisque convallis vitae in ipsum. Donec vel eros gravida, tincidunt lacus in, volutpat justo. Aliquam eget felis pretium, vestibulum est non, dapibus leo. Praesent aliquet porttitor neque eu tincidunt. In est elit, luctus non urna eu, ullamcorper tincidunt velit. Vestibulum venenatis, enim id laoreet aliquam, sapien nunc maximus diam, a efficitur elit lectus a lacus. In hac habitasse platea dictumst. Ut rutrum mauris vel enim vestibulum tincidunt. Nullam in rhoncus neque. Fusce vitae elementum ligula. Maecenas et dolor sapien.`,
        mainImagePath: 'images/example/wiewiorka-grafika.jpeg',
        visitors: 0
    })
];

var done = 0;
for (var i=0; i<blogPosts.length; i++){
    blogPosts[i].save(function (err, result){
        done++;
        if (done === blogPosts.length){
            console.log('done i added');
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
