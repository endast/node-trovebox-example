var trovebox = require('trovebox');

// configure oauth
var serveropts = {
    host: "http://photo.example.com",
    consumer_key: "consumer_key",
    consumer_secret: "consumer_secret",
    token: "token",
    token_secret: "token_secret"
}

var client = new trovebox(serveropts);

// Here we get the latest photos from the user and tells 
// the server to return 200px thumnails
exports.index = function (req, res) {
    var opts = {
        returnSizes: "200x200"
    }
    client.photo.list(opts, function (err, data) {
        if (!err) {
            res.render('index', {
                photos: data.result,
                title: "node-trovebox example"
            });

        }
    });

};


// Get all tags
exports.listTags = function (req, res) {
    client.tag.list(function (err, data) {
        if (!err) {
            res.render('tags', {
                tags: data.result,
                title: "node-trovebox example"
            });

        }
    });

};

// View all images for selected tag
exports.viewTag = function (req, res) {
    var tag = req.params.tag;
    var opts = {
        tags: tag,
        returnSizes: "200x200"
    }
    client.photo.list(opts, function (err, data) {
        if (!err) {
            res.render('taglist', {
                photos: data.result,
                title: tag
            });

        }
    });

};

// Show selected image
exports.viewphoto = function (req, res) {
    var photoid = req.params.photoid;

    client.photo.view(photoid, function (err, data) {
        if (!err) {
            res.render('photo', {
                photos: data.result,
                title: data.result.filenameOriginal
            });

        }
    });

};