'use strict';
var properties = require('../package.json')
var info = require('../service/info');

var controllers = {
    about: function (req, res) {
        var aboutInfo = { name: properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    get_info: function (req, res) {
        info.find(req, res, function (err, inf) {
            if (err) 
                res.send(err);
            res.JSON(inf);
        });
    },
};

module.exports = controllers;