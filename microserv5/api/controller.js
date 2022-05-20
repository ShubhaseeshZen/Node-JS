'use strict';
var properties = require('../package.json')

var personalDetails = require('../service/personalDetails');
var billsReimbursement = require('../service/billsReimbursement');
var feedback = require('../service/feedback');
var compliances = require('../service/compliances');
var feedback = require('../service/feedback');
var certificates = require('../service/certifications');

var controllers = {
    about: function (req, res) {
        var aboutInfo = { name: properties.name, version: properties.version }
        res.json(aboutInfo);
    },
    get_personalDetails: function (req, res) {
        personalDetails.find(req, res, function (err, pd) {
            if (err) 
                res.send(err);
            res.JSON(pd);
        });
    },
    get_compliances: function (req, res) {
        compliances.find(req, res, function (err, comp) {
            if (err) 
                res.send(err);
            res.JSON(comp);
        });
    },
    get_certifications: function (req, res) {
        certificates.find(req, res, function (err, br) {
            if (err) 
                res.send(err);
            res.JSON(br);
        });
    },
    get_feedback: function (req, res) {
        feedback.find(req, res, function (err, comp) {
            if (err) 
                res.send(err);
            res.JSON(comp);
        });
    },
    
    get_billsReimbursement: function (req, res) {
        billsReimbursement.find(req, res, function (err, br) {
            if (err) 
                res.send(err);
            res.JSON(br);
        });
    }
};

module.exports = controllers;