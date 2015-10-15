/**
 * TransactionController.js
 *
 * @module      :: Controller
 * @description ::
 */

module.exports = {

  find: function(req, res) {

    TransactionService.find(function(err, transactions) {
      if (err) {
        res.serverError(err);
      } else {

        console.dir(transactions);
        res.ok(transactions);
      }
    });
  },

  createRandom: function(req, res){
  	var statuses = ['Get Rates', 'Dispatched', 'Paid', 'Delivered'];
	var payments = ['COD', 'Online', 'Fawry'];
	DB.Retailer.find().populate('couriers').exec(function(err, retailers) {
		if (err) {
			console.log('error in Retailer.find(): ', err);
			res.serverError(err);
		} else if (retailers && retailers.length > 0) {
			async.eachSeries(retailers, function(retailer, callback) {
				if (retailer.couriers) {
					_.forEach(retailer.couriers, function(selectedCourier) {
						var randomMobile = Math.floor( Math.random() * (20109999999 - 20100000000) + 20100000000 );
						var weightValue = Math.random() * 100;
						var incomeValue = Math.random() * 10;
						console.log('selectedCourier', selectedCourier);
						var courierInfo = _.findWhere(retailer.perCourierInfo, {courierId: selectedCourier._id});
						if(courierInfo && courierInfo.markup){
				          if(courierInfo.markup.category && courierInfo.markup.value){
				            if(courierInfo.markup.category == 'percent'){
				            	incomeValue = courierInfo.markup.value;
				            }
				          }
				        }
						var newTransaction = new DB.Transaction({
							retailerId: retailer,
							CourierId: selectedCourier,
							weight: {
								value: weightValue,
								Unit: 'KG'
							},
							Status: statuses[Math.floor(Math.random() * (4))],
							Mobile: randomMobile.toString(),
							Date: new Date(),
							Income: incomeValue,
							Payment: payments[Math.floor(Math.random() * (3))]
						});
						newTransaction.save(function(err) {
							if (err) {
								console.log('error in creating transaction: ', err);
								callback(err);
							} else {
								console.log('newTransaction', newTransaction);
								var recordUpdate = {
									'$inc': {
										totalIncome: newTransaction.Income,
										shipped: newTransaction.weight.value,
									}
								};
								if(newTransaction.Status == 'Delivered'){
									recordUpdate['$inc'].deliveries = 1;
								}
								DB.Retailer.update({_id:retailer._id}, recordUpdate).exec(function(err) {
									if (err) {
										callback(err);
									} else {
										DB.Courier.update({_id:selectedCourier._id}, recordUpdate).exec(function(err) {
											if (err) {
												callback(err);
											} else {
												callback();
											}
										});
									}
								});
							}
						});
					});
				} else {
					callback();
				}
			}, function(err) {
				if (err) {
					console.log('Error with generator: ', err);
					res.serverError(err);
				} else {
					res.ok();
				}
			});
		} else {
			res.ok();
		}
	});
  }
};
