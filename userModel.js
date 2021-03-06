var mongoose = require('mongoose');

//var passportLocalMongoose = require("passport-local-mongoose");

// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    }
});

//UserSchema.plugin(passportLocalMongoose);

// Export User model
var User = module.exports = mongoose.model('User', userSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}