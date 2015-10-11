/**
 * RetailerController.js
 *
 * @module      :: Controller
 * @description ::
 */

module.exports = {
  /* e.g.
    action: function(req, res){

    }
  */
  create: function(req, res) {
    var params = req.params.all();
    _.merge(params, req.headers);

    var allParams = _.merge(params, req.query);
    var retailer = allParams.retailer;
    console.log("test file");
    console.log(req.file('file'));
    console.log("------------------------------");
    var file = req.file('file');
    if(file != null)
    {
    console.log("photo here");
    logoData = new Buffer(file);
    logo = {
      data: logoData,
      fileName: file.fileName
    };
    console.dir(logo);
    }
    // do what you want to file object

    /* the way to save file to disk
		file.upload({saveAs: inputs.fileName+'.pdf'},function (err, uploadedFiles) {
	      if (err) return res.send(err);
	      if (uploadedFiles.length === 0) {
	        return exits.error({ error: 'No file was uploaded'});
	      }
	      var File = fs.createReadStream(uploadedFiles[0].fd);
	    }*/

    RetailerService.create(retailer, function(err, createdRetailer) {
      if (err) {
        res.badRequest(err);
      } else {
        res.ok(createdRetailer);
      }
    });
  },

  update: function(req, res) {
    var retailerId = {_id : new DB.ObjectId(req.param('retailerId'))};
    var retailer = req.body;
    RetailerService.update(retailerId, retailer, function(err, updatedRetailer) {
      if (err) {
        res.serverError(err);
      } else {
        res.ok(updatedRetailer);
      }
    });
  },

  find: function(req, res) {

    RetailerService.find(function(err, retailers) {
      if (err) {
        res.serverError(err);
      } else {
        res.ok(retailers);
      }
    });
  },

  regenerateApiKey: function(req, res) {
    var apikey = req.body;
    // TODO: findOne in the ApiKeys collection where id = apikey.id
    // and update this record with a new token then return to the
    // frontend the updated apikey record
  }
};
