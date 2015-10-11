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
        res.ok(transactions);
      }
    });
  }
};
