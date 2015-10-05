/**
 * General utilities to be used by any controller or service
 */
var fs=require('fs');

module.exports = {

  getCriteriaObject: function (query) {
    var CriteriaObject = {
      where: {}
    };
    try {
        if (typeof query == 'string')
          query = JSON.parse(query);
        if (query.where)
          CriteriaObject.where = JSON.parse(query.where); // TODO deal with noSQL injection cases like: query.where = number or = complex criteria
        if (query.skip)
          CriteriaObject.skip = parseInt(query.skip);
        if (query.limit)
          CriteriaObject.limit = parseInt(query.limit);
        if (query.sort) {
          var sort = query.sort ? query.sort.split(",") : [];
          var sortOrder = {};
          _.each(sort, function (sortField) {
            if (sortField[0] == ' ' || sortField[0] == '+') {
              sortOrder[sortField.substring(1)] = 1;
            } else if (sortField[0] == '-') {
              sortOrder[sortField.substring(1)] = 0;
            } else {
              sortOrder[sortField] = 1;
            }
          });
          CriteriaObject.sort = sortOrder;
        }
        if (query.select)
          CriteriaObject.select = JSON.parse(query.select);
        return CriteriaObject;
    }
    catch(err) {
        return CriteriaObject;
    }
  },

  // function to encode file data to base64 encoded string
  encodeFile_base64: function (file) {
    // read binary data
    var pdf = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(pdf).toString('base64');
  },

  encodeBuffer_base64: function (buffer) {
    // read binary data
    // convert binary data to base64 encoded string
    return new Buffer(buffer).toString('base64');
  }
};
