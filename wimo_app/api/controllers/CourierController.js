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
	//	var criteriaObject = Utilities.getCriteriaObject(req.query);
		CourierService.find(function(err, couriers) {
			if (err) {
				res.serverError(err);
			} else {
				res.ok(couriers);
			}
		});
	},
  create: function(courier, callback) {
		console.log(courier);
    DB.Courier.create(courier).exec(function(err, createdRetialer) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, createdRetialer);
      }
    });


  },
};
