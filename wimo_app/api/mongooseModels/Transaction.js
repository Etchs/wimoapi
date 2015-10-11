

module.exports = {

	attributes: {
		retailerId: {
			type: DB.mongoose.Schema.ObjectId,
			ref: 'Retailer'
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
