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
    console.log("test retailer");
    console.log(retailer);
    console.log(JSON.stringify("{retailerType: New,name : test,website:http://www.google.com,category:E-Commerce}"))
    retailer = new DB.Retailer(retailer);
    console.log("Test ddd");
    retailer.save(function(err, createdRetialer) {
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

DB.Retailer.findOne(retailerCriteria,function(err,retailer){
  if (err) {
    callback(err, null);
  } else {
    callback(null, retailer);
  }
}
});

})

}
};
