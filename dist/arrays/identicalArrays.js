"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identicalArrays(arr1, arr2) {
    if (arr1.length != arr2.length)
        return false;
    return arr1.every(function (e, i) { return e == arr2[i]; });
}
exports.identicalArrays = identicalArrays;
