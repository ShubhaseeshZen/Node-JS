var express = require('express');
var request  = require('request');
const db = require('mongodb');

var app = express();


var feedback = {
    find: function(req, resp){
        dbobj.collection('feedback').findOne({},function(err, res){
            if(err) console.error(err);
            resp.send(res)
        });
    }
};
module.exports = feedback;