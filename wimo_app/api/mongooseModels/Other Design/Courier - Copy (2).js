/**
 * Courier
 *
 * @module      :: Courier
 * @description :: Courier Model
 */

module.exports = function(mongoose) {

	var schema = new mongoose.Schema({

		name: String,
		logo: {
			data: Buffer,
			fileName: String,
			width: Number,
			height: Number
		},
		rating: Number,

	});

	return mongoose.model('Courier', schema);

};