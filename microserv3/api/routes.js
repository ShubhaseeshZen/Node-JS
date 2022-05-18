'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about').get(controller.about);
    app.route('/radius/:pincode/:distance').get(controller.get_radius);
    app.get('/', (req, res) => {
        res.send('zipcode to radius')
    })
};
//http://localhost:8000/radius/99501/27