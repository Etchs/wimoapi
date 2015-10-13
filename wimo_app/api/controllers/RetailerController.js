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
    console.dir(retailer);
    var retailer = JSON.parse(retailer);

    console.log("------------------------------");
    var file = req.file('file')._files[0];
    console.log("Test");
    console.dir(file.stream._readableState.buffer);
    //get file
    if (file != null) {
      logoData = file.stream._readableState.buffer;
      retailer.logo = {
        data: logoData,
        fileName: file.stream.filename
      };

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
    var retailerId = {
      _id: new DB.ObjectId(req.param('retailerId'))
    };
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

  },

  getPhoto: function(req, res) {
    console.log(req.param('retailerId'));


    RetailerService.findOne(req.param('retailerId'), function(err, retailer) {
      console.log(err);
      console.log(retailer);

      if (retailer.logo.data != null) {

        res.writeHead(200, {
          'Content-Type': 'image/png'
        });
        res.end(new Buffer(retailer.logo.data), 'binary');
      } else {
        res.status(404) // HTTP status 404: NotFound
          .send('Not found');
      }

    });
  }

}
