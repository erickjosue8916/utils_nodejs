const { filterByDuplicateProperty } = require("../../dist/objects/index")
const { simpleObject } = require("./config/simpleObject")

const scripts = {
    "uniqueProperty": filterByDuplicateProperty
}

const result = scripts["uniqueProperty"](simpleObject, "store")

console.log(result)