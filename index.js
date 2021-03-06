const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')

let win

app.on('ready', function () {
  // Create new window
  win = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  // Quit app when main window closed
  win.on('closed', function () {
    app.quit()
  })

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(menuTemplate)
  // Insert our own menu
  Menu.setApplicationMenu(mainMenu)
})

// Create menu template

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click () {
          app.quit()
        }
      }
    ]
  }
]

// If Mac add empty obj to menu
// eslint-disable-next-line eqeqeq
if (process.platform == 'darwin') {
  menuTemplate.unshift({})
}

// Add Dev Tools item if not in production
if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'Dev Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform === 'darwin' ? 'Command+I' : 'Ctrl+I',
        click (item, focusedWindow) {
          focusedWindow.toggleDevTools()
        }
      }
    ]
  })
}
