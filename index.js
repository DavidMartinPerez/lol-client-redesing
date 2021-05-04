const electron = require('electron');

const { app, BrowserWindow } = electron

let window = null;

app.whenReady().then(() => {
    window = new BrowserWindow({
        height:900,
        width:1700,
        webPreferences: {
            backgroundThrottling: false
        }
    })
    window.loadURL(`file://${__dirname}/client-react-app/dist/index.html`)
})