module.exports = {

	attributes: {
		eRetailerId: {
			type: mongoose.Schema.ObjectId
			ref: db.ERetailer
		},
		CourierId: {
			type: mongoose.Schema.ObjectId
			ref: db.Courier
		},
		weight: {
			value: Number,
			Unit: String
		},
		Status: Mobile: String
		Date: Date
		Income: Number
		Payment: String

	}
}