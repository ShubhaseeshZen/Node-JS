'use strict';

const  controller =require('./controller');

module.exports = function(app) {
	app.route('/about').get(controller.about);
	app.route('/distance/:pincode1/:pincode2').get(controller.get_distance);	
    app.get('/',(req,res)=>{
        res.send('zipcode to distance')
    })
};
