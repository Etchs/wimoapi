/**
 * ApiKeyService
 */
module.exports = {

  find: function(callback) {
    DB.ApiKey.find().exec(function(err, ApiKeys) {
      console.log(ApiKeys);
      if (err) {
        callback(err, null);
      } else {
        callback(null, ApiKeys);
      }
    });

  },

  create: function(ApiKey, callback) {
    console.log("start cerate ");
    DB.ApiKey.create(ApiKey).exec(function(err, ApiKey) {

      if (err) {
        callback(err, null);
      } else {
        callback(null, ApiKey);
      }
    });


  },
    insert: function(ApiKeys, callback) {
      console.log("start cerate ");
      DB.ApiKey.collection.insert(ApiKeys,function(err, ApiKey) {

        if (err) {
          callback(err, null);
        } else {
          callback(null, ApiKey);
        }
      });


    },

  update: function(quoteLogCriteria, quoteLog, callback) {
    DB.ApiKey.update(quoteLogCriteria, quoteLog).exec(function(err, updatedQuoteLogs) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, updatedQuoteLogs);
      }
    });
  },
};
