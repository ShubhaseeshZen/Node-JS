'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about').get(controller.about);
    app.route('/info/:pincode').get(controller.get_info);
    app.get('/', (req, res) => {
        res.send('zipcode to location')
    })
};
