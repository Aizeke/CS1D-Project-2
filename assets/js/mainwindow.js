window.$ = window.jQuery = require("jquery");

const { ipcRenderer } = require('electron')
const expressAppUrl = 'http://localhost:3000'
const spawn = require('child_process').spawn
// For electron-packager change cwd in spawn to app.getAppPath() and
// uncomment the app require below
// app = require('electron').remote.app,
const node = spawn(
  '.\\node_modules\\node\\bin\\node.exe',
  ['./express-app/bin/www'],
  {
    cwd: process.cwd()
  }
)
const request = require('request')
const _ = require('lodash')
const key = require('keymaster')
const $serverLog = $('#serverLog')
const $expressApp = $('#expressApp')
const $loading = $('#loading')

ipcRenderer.on('stop-server', (event, data) => {
  // This is okay for now but there is a better solution. We can use IPC to
  // tell the server (the Express app itself) to gracefully shutdown. This
  // would be much better especially if we had database connections or other
  // resources we were using that needed to be cleaned up.
  node.kill('SIGINT')
})

key('f1', () => {
  if ($serverLog.css('display') === 'none') {
    $serverLog.css('display', 'block')
    $expressApp.addClass('expressAppHide')
  } else {
    $expressApp.removeClass('expressAppHide')
    $serverLog.css('display', 'none')
  }
})

function strip (s) {
  // regex from: http://stackoverflow.com/a/29497680/170217
  return s.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ''
  )
}

function redirectOutput (x) {
  let lineBuffer = ''

  x.on('data', function (data) {
    lineBuffer += data.toString()
    const lines = lineBuffer.split('\n')

    _.forEach(lines, l => {
      if (l !== '') {
        $serverLog.append(strip(l) + '<br/>')
      }
    })

    lineBuffer = lines[lines.length - 1]
  })
}

redirectOutput(node.stdout)
redirectOutput(node.stderr)

const checkServerRunning = setInterval(() => {
  request(expressAppUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      $expressApp.attr('src', expressAppUrl)
      $loading.css('display', 'none')
      $expressApp.css('display', 'block')
      clearInterval(checkServerRunning)
    }
  })
}, 1000)
