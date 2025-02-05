const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000
  })

  win.loadURL('https://www.google.com')
}

app.whenReady().then(() => {
  createWindow()
})