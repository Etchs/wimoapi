

module.exports = {

	attributes: {
		retailerId: {
			type: DB.ObjectId,
			ref: 'Retailer'
		},
		CourierId: {
			type: DB.ObjectId,
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
