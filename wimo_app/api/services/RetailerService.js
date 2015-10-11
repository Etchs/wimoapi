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

  update: function(quoteLogCriteria, quoteLog, callback) {
    QuoteLog.update(quoteLogCriteria, quoteLog).exec(function(err, updatedQuoteLogs) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, updatedQuoteLogs);
      }
    });
  },
};
