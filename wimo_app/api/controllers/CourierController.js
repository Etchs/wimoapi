/**
 * CourierController.js
 *
 * @module      :: Controller
 * @description ::
 */
var Promise = require('bluebird');
var glob = Promise.promisify(require('glob'));
var path = require('path');
var async = require('async');
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

				async.each(files, function(file, callback) {

					var filename = path.basename(file, '.gif');
					fs.readFile(file, function(err, data) {
						var logoData = data;
						var courier = {
							name: filename,
						};
						courier.logo = {
							data: logoData,
							fileName: filename
						};
						var newCourier = new DB.Courier(courier);
						newCourier.save(function(err, createdCourier) {
							if (err) {
								callback(err);
							} else {
								console.log('creaded courier: ' + filename);
								callback();
							}
						});
					});

				}, function(err) {
					// if any of the file processing produced an error, err would equal that error
					if (err) {
						res.serverError(err);
					} else {
						res.ok('All Couriers have been create successfully');
					}
				});


			})
			.catch(console.error);
	},
};