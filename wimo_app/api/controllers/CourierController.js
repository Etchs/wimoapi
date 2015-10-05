/**
 * CourierController.js 
 * 
 * @module      :: Controller
 * @description :: 
 */

module.exports = {
	/* e.g.
	  action: function(req, res){
  
	  }
	*/

	find: function(req, res) {
		var criteriaObject = Utilities.getCriteriaObject(req.query);
		CourierService.find(criteriaObject, function(err, couriers) {
			if (err) {
				res.serverError(err);
			} else {
				res.ok(couriers);
			}
		});
	}
};