/**
 * CourierController.js
 *
 * @module      :: Controller
 * @description ::
 */
var Promise = require('bluebird');
var glob = Promise.promisify(require('glob'));
var path = require('path');
var fs = require('fs');
module.exports = {
	/* e.g.
	  action: function(req, res){

	  }
	*/

	find: function(req, res) {
	//	var criteriaObject = Utilities.getCriteriaObject(req.query);
		CourierService.find(function(err, couriers) {
			if (err) {
				res.serverError(err);
			} else {
				res.ok(couriers);
			}
		});
	},
	createRandom: function(req, res) {
		glob("assets/images/*.gif")
			.then(function(files) {

				return _.each(files, function(file) {
					var filename = path.basename(file, '.gif');
					return fs.readFile(file, function(err, data) {
						var logoData = data;
						var courier = {
							name: filename,
						};
						courier.logo = {
							data: logoData,
							fileName: filename
						};
						return DB.Courier.create(courier).exec(function(err, createdCourier) {
							if (err) {
								res.serverError(err);
							} else {
								var msg = 'creaded courier: ' + filename;
								console.log(msg);
								return msg;
							}
						});
					});
					
				});
			}).then(function(msg){
				res.ok(msg);
			})
			.catch(console.error);
	},
};