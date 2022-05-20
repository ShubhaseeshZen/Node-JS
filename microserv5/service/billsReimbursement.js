var express = require('express');
var request  = require('request');
const db = require('mongodb');

var app = express();


var billsReimbursement = {
    find: function(req, resp){
        dbobj.collection('bills_reimbursement').findOne({},function(err, res){
            if(err) console.error(err);
            resp.send(res)
        });
    }
};
module.exports = billsReimbursement;