import child_process from "child_process"

function execCommand (cmd) {
  const exec = child_process.exec

  return new Promise((resolve, reject) => {
    exec(cmd, {maxBuffer: 1024 * 2000}, (error, stdout, stderr) => {
      if (error) console.warn(error)
      resolve(stdout || stderr)
    })
  })
}

export default execCommand