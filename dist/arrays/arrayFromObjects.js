"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var identicalArrays_1 = require("./identicalArrays");
function arrayFromObjects(data, single) {
    if (single === void 0) { single = false; }
    return data.reduce(function (prev, current) {
        var row = [];
        for (var key in current) {
            row.push(current[key]);
        }
        if (single) {
            var existences = prev.filter(function (e) { return identicalArrays_1.identicalArrays(e, row); });
            if (existences.length == 0)
                prev.push(row);
        }
        else {
            prev.push(row);
        }
        return prev;
    }, []);
}
exports.arrayFromObjects = arrayFromObjects;
