var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/parking').connection;
db.on('open', function(){
    console.log('Parking is opened');
});
db.on('error', function(){
    console.log('Parking is error');
});
return db;
