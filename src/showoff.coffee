fs = require("fs")
spawn = require('child_process').spawn
express = require("express")

class Showoff
  run: (options = {}) ->
    port = options.port or 8080
    app = express()
    cwd = process.cwd()
    publicDir = cwd + "/public"
    fs.exists publicDir, (exists) ->
      publicDir = process.cwd() unless exists
      app.use express.static(publicDir)
      app.listen port, ->
        host = "http://127.0.0.1:" + port
        console.log "Showing off on #{host}"
        if options.open
          spawn 'open', [host]


module.exports = new Showoff