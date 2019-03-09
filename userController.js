// contactController.js
// Import contact model
User = require('./userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.password = req.body.password;
    user.lat = req.body.lat;
    user.long = req.bodt.long;
// save the contact and check for errors
    user.save(function (err) {
        if (err)
             res.json(err);
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name ? req.body.name : user.name;
        user.password = req.body.password;
        user.lat = req.body.lat;
        user.long = req.body.long;
// save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};