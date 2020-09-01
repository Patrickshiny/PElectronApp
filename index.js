const applicationRun = require('electron')
const app = applicationRun.app
const BrowserWindow = applicationRun.BrowserWindow
const electronSource = require('electron')

/* Original */
// const { app, BrowserWindow } = require('electron')
/* Original */
// const app = require('electron')
// const app = electron.app
const app = electronSource.app
// const BrowserWindow = require('electron').remote
// const BrowserWindow = electron.remote.BrowserWindow
// const BrowserWindow = app.remote.BrowserWindow
const BrowserWindow = electronSource.BrowserWindow

function initialNewWindow()
{
    // const theWindow = new BrowserWindow({width: 1920, height: 1080})
    const mainWindow = new BrowserWindow({minWidth: 1920, minHeight: 1080, Width: 1280, Height: 720, transparent: true, frame: false, webPreferences: {nodeIntegration: true}})

    mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.setPosition(0,540)
    // mainWindow.setSize()
    mainWindow.webContents.BrowserWindow
    mainWindow.electronSource
    mainWindow.setIgnoreMouseEvents(true)
    mainWindow.blur()

    // mainWindow.zoom
}

// const Result = app.isReady()
// app.whenReady().then(initialNewWindow)
app.whenReady().then(() => {initialNewWindow()}) // listener
const CommandLineWindow = app.commandLine.BrowserWindow
electronSource.Accelerator
// initialNewWindow()
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
const CommandLineWindow = app.commandLine.BrowserWindow
applicationRun.Accelerator
