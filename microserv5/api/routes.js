'use strict';

const controller = require('./controller');

module.exports = function (app) {
    app.route('/about').get(controller.about);
    app.route('/billsReimbursement/:Empid').get(controller.get_billsReimbursement);
    app.route('/certifications/:Empid').get(controller.get_certifications);
    app.route('/compliances/:Empid').get(controller.get_compliances);
    app.route('/personalDetails/:Empid').get(controller.get_personalDetails);
    app.route('/feedback/:Empid').get(controller.get_feedback);

    app.get('/billsReimbursement', (req, res) => {
        res.send('routes.js')
    })
};