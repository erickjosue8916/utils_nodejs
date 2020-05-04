"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterByDuplicateProperty(data, prop) {
    return data.reduce(function (prev, current) {
        var exist = prev.filter(function (e) { return e[prop] == current[prop]; });
        if (exist.length == 0)
            prev.push(current);
        return prev;
    }, []);
}
exports.filterByDuplicateProperty = filterByDuplicateProperty;
