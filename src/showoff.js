const fs = require("fs")
const spawn = require('child_process').spawn
const express = require("express")

async function dirExists (dir) {
    return new Promise((resolve) => fs.exists(dir, resolve))
}

async function showoff(options) {
    const port = options.port || 8080
    const app = express()
    const cwd = process.cwd()
    let publicDir = cwd + "/public"

    const exists = await dirExists(publicDir)

    if (!exists) {
        publicDir = process.cwd()
    }

    app.use(express.static(publicDir))
    app.listen(port, () => {
        const host = "http://127.0.0.1:" + port
        console.log(`Showing off on ${host}`)
        if (options.open) {
            spawn('open', [host])
        }
    })
}

module.exports = showoff
