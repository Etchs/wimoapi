/**
 * RetailerController.js 
 * 
 * @module      :: Controller
 * @description :: 
 */

module.exports = {
	/* e.g.
	  action: function(req, res){
	 
	  }
	*/
	create: function(req, res) {
		var params = req.params.all();
    	_.merge(params, req.headers);
    	var allParams = _.merge(params, req.query);
    	var retailer = allParams.retailer;
		var file = req.file('file');
		// do what you want to file object
		
		/* the way to save file to disk
		file.upload({saveAs: inputs.fileName+'.pdf'},function (err, uploadedFiles) {
	      if (err) return res.send(err);
	      if (uploadedFiles.length === 0) {
	        return exits.error({ error: 'No file was uploaded'});
	      }
	      var File = fs.createReadStream(uploadedFiles[0].fd);
	    }*/
		
		RetailerService.create(retailer, function(err, createdRetailer) {
			if (err) {
				res.badRequest(err);
			} else {
				res.ok(createdRetailer);
			}
		});
	},

	update: function(req, res) {
		var retailerId = req.param('retailerId');
		var retailer = req.body;
		VehicleService.update(retailerId, retailer, function(err, updatedRetailer) {
			if (err) {
				res.serverError(err);
			} else {
				res.ok(updatedRetailer);
			}
		});
	},

	find: function(req, res) {
		var criteriaObject = Utilities.getCriteriaObject(req.query);
		RetailerService.find(criteriaObject, function(err, retailers) {
			if (err) {
				res.serverError(err);
			} else {
				res.ok(retailers);
			}
		});
	}
};