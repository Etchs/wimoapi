

var CourierSchema = new mongoose.Schema({
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
	type: mongoose.Schema.ObjectId
	ref: db.ERetailer
}
});


