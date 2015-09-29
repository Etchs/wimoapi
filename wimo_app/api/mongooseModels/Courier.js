module.exports = {

	attributes: {
		token: String,
		expired: {
			type: Boolean
			default: false
		},
		category: {
			type: String,
			enum: [‘public’, ‘private’, ‘testing’, ‘production’]
		},
		eRetailerId: {
			type: DB.ObjectId,
			ref: DB.ERetailer
		}
	}
}