const { execCommand } = require("../../dist/process/index")

async function test() {
    const r = await execCommand("ls")
    console.log(r)
}

test()