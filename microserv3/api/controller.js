'use strict';
var properties = require('../package.json')
var radius = require('../service/radius');

var controllers = {
    about: function (req, res) {
        var aboutInfo = { name: properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    get_radius: function (req, res) {
        radius.find(req, res, function (err, rad) {
            if (err) 
                res.send(err);
            res.JSON(rad);
        });
    },
};

module.exports = controllers;