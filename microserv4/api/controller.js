'use strict';
var properties = require('../package.json')
var location = require('../service/zipCode');

var controllers = {
    about: function (req, res) {
        var aboutInfo = { name: properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    get_zip: function (req, res) {
        location.find(req, res, function (err, zp) {
            if (err) 
                res.send(err);
            res.JSON(zp);
        });
    },
};

module.exports = controllers;