/**
 * Transaction
 *
 * @module      :: Transaction
 * @description :: Transaction Model
 */

module.exports = function(mongoose) {

	var schema = new mongoose.Schema({

		eRetailerId: {
			type: mongoose.Schema.ObjectId,
			ref: 'ERetailer'
		},
		CourierId: {
			type: mongoose.Schema.ObjectId,
			ref: 'Courier'
		},
		weight: {
			value: Number,
			Unit: String
		},
		Status: String,
		Mobile: String,
		Date: Date,
		Income: Number,
		Payment: String

	});

	return mongoose.model('Transaction', schema);

};