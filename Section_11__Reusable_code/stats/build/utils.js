"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    // ['28/10/2018']
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], // year
    dateParts[1] - 1, // month, indexed by 0
    dateParts[0] // day
    );
};
exports.dateStringToDate = dateStringToDate;
