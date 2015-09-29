module.exports = {

	attributes: {
		eRetailerId: {
			type: DB.ObjectId,
			ref: DB.ERetailer
		},
		CourierId: {
			type: DB.ObjectId,
			ref: DB.Courier
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