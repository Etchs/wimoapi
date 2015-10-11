/**
 * RetailerService
 */
module.exports = {

  find: function(callback) {

    DB.Retailer.find(function(err, retailers) {
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
};
