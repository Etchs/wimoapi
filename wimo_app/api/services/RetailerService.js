/**
 * RetailerService
 */
module.exports = {

	find: function(quoteLogCriteria, callback) {

		QuoteLog.find(quoteLogCriteria).exec(function(err, quoteLogs) {

			if (err) {
				callback(err, null);
			} else {
				callback(null, quoteLogs);
			}

		});

	},

	create: function(quoteLog, callback) {
		QuoteLog.create(quoteLog).exec(function(err, createdQuoteLog) {
			if (err) {
				callback(err, null);
			} else {
				callback(null, createdQuoteLog);
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