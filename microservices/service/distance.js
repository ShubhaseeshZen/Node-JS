var request = require('request');

//const apiKey = process.env.ZIPCODE_API_KEY || "ZGsF42aqzkGempHoQsxvN211YZeZnLz5cvEk4Vp2heZjOY9NAR1pLhLujJzLz3ky";
const apiKey ="ZGsF42aqzkGempHoQsxvN211YZeZnLz5cvEk4Vp2heZjOY9NAR1pLhLujJzLz3ky";
const zipcodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
	find: function(req,res, next) {
		request(zipcodeURL + apiKey + "/distance.json/" + req.params.pincode1 + "/" + req.params.pincode2 + "/mile",
		function(error, response, body) {
			if(!error && response.statusCode == 200) {
				response = JSON.parse(body);
				res.send(response);
			} else {
				console.log(response.statusCode + response.body);
				res.send({distance: -1});
			}
		});
	}
};

module.exports = distance;

				
				
		