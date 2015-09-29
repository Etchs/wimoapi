

var ApiKeySchema = new mongoose.Schema({
	name: String,
	logo:{
	data: Buffer,
	fileName: String,
	width: Number,
	height: Number
},
rating: Number,
});


