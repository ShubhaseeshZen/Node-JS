var express = require('express');
var request  = require('request');
const db = require('mongodb');

var app = express();


var certifications = {
    find: function(req, resp){
        dbobj.collection('certifications').findOne({},function(err, res){
            if(err) console.error(err);
            resp.send(res)
        });
    }
};
module.exports = certifications;