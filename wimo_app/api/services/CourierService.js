/**
 * CourierService
 */
module.exports = {

  find: function(callback) {
    DB.Courier.find().exec(function(err, Couriers) {
      console.log(Couriers);
      if (err) {
        callback(err, null);
      } else {
        callback(null, Couriers);
      }
    });

  },

  create: function(courier, callback) {
    console.log("start cerate ");
    DB.Courier.create(courier).exec(function(err, Courier) {

      if (err) {
        callback(err, null);
      } else {
        callback(null, Courier);
      }
    });


  },

  update: function(quoteLogCriteria, quoteLog, callback) {
    DB.Courier.update(quoteLogCriteria, quoteLog).exec(function(err, updatedQuoteLogs) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, updatedQuoteLogs);
      }
    });
  },
};
