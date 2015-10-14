/**
 * RetailerController.js
 *
 * @module      :: Controller
 * @description ::
 */

function uid(len) {
  var buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join('');
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    //generate rondom keys
    console.log(uid(64));
if(req.file)
{


    req.file('file').upload(function(err, uploadedFiles) {
      if (err) {
        return res.json(500, err);
      } else if (uploadedFiles.length === 0) {
        // proceed without files
      } else {
        //  handle uploaded file
        var fs = require('fs');
        fs.readFile(uploadedFiles[0].fd, function(err, data) {
          logoData = data;
          retailer.logo = {
            data: logoData,
            fileName: file.stream.filename
          };

          RetailerService.create(retailer, function(err, createdRetailer) {
            if (err) {
              res.badRequest(err);
            } else {
              //add apikeys
              testingApiKey = {
                token: uid(64),
                category : "testing",
                retailerId : new DB.mongoose.Types.ObjectId(createdRetailer._id)
              }
              productionApiKey =
              {
                token: uid(64),
                category : "testing",
                retailerId : new DB.mongoose.Types.ObjectId(createdRetailer._id)
              }
              apiKeys = [testingApiKey,productionApiKey];
              ApiKeyService.insert(apiKeys,function(err, docs) {
                console.dir(docs);
                  //update with apikey ids
                  apiKeysIds = [];
                  console.log("new apiKeys")
                  console.log(docs.insertedIds)
                  var retailerId = {
                    _id: new DB.mongoose.Types.ObjectId(createdRetailer._id)
                  };

                  RetailerService.update(retailerId, {apiKeys:docs.insertedIds}, function(err, updatedRetailer) {
                    if (err) {
                      res.serverError(err);
                    } else {
                      res.ok(updatedRetailer);
                    }
                  });

              })

            }
          });
        });
      }

    });
}else{
  RetailerService.create(retailer, function(err, createdRetailer) {
    if (err) {
      res.badRequest(err);
    } else {
      //add apikeys
      testingApiKey = {
        token: uid(64),
        category : "testing",
        retailerId : new DB.mongoose.Types.ObjectId(createdRetailer._id)
      }
      productionApiKey =
      {
        token: uid(64),
        category : "testing",
        retailerId : new DB.mongoose.Types.ObjectId(createdRetailer._id)
      }
      apiKeys = [testingApiKey,productionApiKey];
      ApiKeyService.insert(apiKeys,function(err, docs) {
        console.dir(docs);
          //update with apikey ids
          apiKeysIds = [];
          console.log("new apiKeys")
          console.log(docs.insertedIds)
          var retailerId = {
            _id: new DB.mongoose.Types.ObjectId(createdRetailer._id)
          };

          RetailerService.update(retailerId, {apiKeys:docs.insertedIds}, function(err, updatedRetailer) {
            if (err) {
              res.serverError(err);
            } else {
              res.ok(updatedRetailer);
            }
          });

      })

    }
  });
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


  },

  update: function(req, res) {
    var retailerId = {
      _id: new DB.mongoose.Types.ObjectId(req.param('retailerId'))
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
      if (retailer != null) {


        if (retailer.logo.data != null) {
          console.log(retailer.logo.data);
          res.writeHead(200, {
            'Content-Type': 'image/png'
          });
          res.end(new Buffer(retailer.logo.data), 'binary');
        } else {
          res.status(404) // HTTP status 404: NotFound
            .send('Not found');
        }
      } else {
        res.status(404) // HTTP status 404: NotFound
          .send('Not found');

      }
    });
  }

}
