const applicationRun = require('electron')
const app = applicationRun.app
const BrowserWindow = applicationRun.BrowserWindow

function initialNewWindow()
{
    const mainWindow = new BrowserWindow({minWidth: 1920, minHeight: 1080, Width: 1280, Height: 720, transparent: true, frame: false, webPreferences: {nodeIntegration: true}})
    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.setPosition(0,540)

    mainWindow.webContents.BrowserWindow
    mainWindow.applicationRun
    mainWindow.setIgnoreMouseEvents(true)
    mainWindow.blur()
}

app.whenReady().then(() => {initialNewWindow()})
