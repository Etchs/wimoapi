var DB = require('../services/DB.js');
module.exports = {

  attributes: {
    accountStatus: {
      type: Boolean,
      default: false
    }, //active or not active
    retailerType: {
      type: String,
      required: true
    },
    deliveries: Number,
    shipped: Number,
    totalIncome: Number,
    name: {
      type: String
    },
    website: {
      type: String
    },
    contactInfo: {
      email: String,
      phone: String,
      address: String
    },
    category: {
      type: String,
      enum: ['E-Commerce', 'Super Market', 'Hyper Market']
    },
    logo: {
      data: Buffer,
      fileName: String,
      width: Number,
      height: Number
    },
    couriers: [{
      type: DB.mongoose.Schema.ObjectId,
      ref: 'Courier'
    }],
    //for courier user details
    perCourierInfo: [{
      courierId: DB.mongoose.Schema.ObjectId,
      //type admin can choose between [ percentage , fixed amount of cash]
      markup: {
        category: {
          type: String,
          enum: ['percent', 'AED']
        },
        value: Number
      },
      userName: String,
      password: String, // hashstring
      token: String
    }],
    //different type of API keys ( production , development )
    apiKeys: [{
      type: DB.mongoose.Schema.ObjectId,
      ref: 'ApiKey'
    }]
  }

}
