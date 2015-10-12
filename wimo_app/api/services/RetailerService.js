/**
 * RetailerService
 */
module.exports = {

  find: function(callback) {

    DB.Retailer.find().populate('couriers').exec(function(err, retailers) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, retailers);
      }
    });

  },

  create: function(retailer, callback) {
    var newRetailer = new DB.Retailer(retailer);
    newRetailer.save(function(err, createdRetialer) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, createdRetialer);
      }
    });


  },

  update: function(retailerCriteria, updatedRetailerLog, callback) {
    DB.Retailer.update(retailerCriteria, updatedRetailerLog).exec(function(err, updatedRetailerLogs) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, updatedRetailerLogs);
      }
    });
  },
  findOne: function(retailerCriteria, callback) {
    console.log(retailerCriteria);
    var retailerCriteria = {
      _id: new DB.ObjectId(retailerCriteria)
    };
    console.log(retailerCriteria);

    DB.Retailer.findOne(retailerCriteria, function(err, retailer) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, retailer);
      }
    })
  }
};
