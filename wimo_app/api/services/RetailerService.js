/**
 * RetailerService
 */
module.exports = {

	find: function(callback) {

    DB.Retailer.find().exec(function(err, retailers) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, retailers);
      }
    });

  },

  create: function(retailer, callback) {
		console.log(retailer);
    DB.Retailer.create(retailer).exec(function(err, createdRetialer) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, createdRetialer);
      }
    });


  },

	update: function(quoteLogCriteria, quoteLog, callback) {
		QuoteLog.update(quoteLogCriteria, quoteLog).exec(function(err, updatedQuoteLogs) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, updatedQuoteLogs);
			}
		});
	},
};
