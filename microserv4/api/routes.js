'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about').get(controller.about);
    app.route('/city-zips/:city/:state').get(controller.get_zip);
    app.get('/', (req, res) => {
        res.send('location to zipcode')
    })
};