const { arrayFromObjects  } = require("../../dist/arrays/index")
const { identicalArrays } = require("../../dist/arrays/index")
const { arrayObject } = require("./config/index")
const { simpleArray } = require("./config/simpleArray")

const scripts = {
    "fromObjects": arrayFromObjects,
    "isEquals": identicalArrays
}

const result = scripts["fromObjects"](arrayObject, true)

console.log(result)