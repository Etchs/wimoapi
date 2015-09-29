

module.exports = {

	attributes: {
		eRetailerId: {
			type: DB.mongoose.Schema.ObjectId,
			ref: 'ERetailer'
		},
		CourierId: {
			type: DB.mongoose.Schema.ObjectId,
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

	}
}