/**
 * TransactionController.js 
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
		TransactionService.find(criteriaObject, function(err, transactions) {
			if (err) {
				res.serverError(err);
			} else {
				res.ok(transactions);
			}
		});
	}
};