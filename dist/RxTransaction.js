"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var RxTransaction = (function () {
    function RxTransaction(transaction) {
        this.transaction = transaction;
    }
    RxTransaction.prototype.executeSql = function (sqlStatement, args) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.transaction.executeSql(sqlStatement, args, function (transaction, resultSet) {
                observer.next(resultSet);
                observer.complete();
            }, function (transaction, error) {
                observer.error(error);
                return true;
            });
        });
    };
    return RxTransaction;
}());
exports.RxTransaction = RxTransaction;
//# sourceMappingURL=RxTransaction.js.map