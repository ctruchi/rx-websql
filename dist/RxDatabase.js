"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var RxTransaction_1 = require("./RxTransaction");
var RxDatabase = (function () {
    function RxDatabase(name, version, displayName, estimatedSize) {
        this.database = window.openDatabase(name, version, displayName, estimatedSize);
    }
    RxDatabase.prototype.transaction = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.database.transaction(function (transaction) {
                observer.next(new RxTransaction_1.RxTransaction(transaction));
                observer.complete();
            }, (function (error) { return observer.error(error); }));
        });
    };
    return RxDatabase;
}());
exports.RxDatabase = RxDatabase;
//# sourceMappingURL=RxDatabase.js.map