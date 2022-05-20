var express = require('express');
var request  = require('request');
const db = require('mongodb');

var app = express();


var personalDetails = {
    find: function(req, resp){
        dbobj.collection('personal_details').findOne({},function(err, res){
            if(err) console.error(err);
            resp.send(res)
        });
    }
};
module.exports = personalDetails;


