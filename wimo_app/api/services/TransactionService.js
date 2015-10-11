/**
 * TransactionService
 */
module.exports = {

	find: function(callback) {

		DB.Transaction.find().populate('Courier', 'Retailer').exec(function(err, Transactions) {

			if (err) {
				callback(err, null);
			} else {
				callback(null, Transactions);
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
