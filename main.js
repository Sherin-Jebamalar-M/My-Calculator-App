const {app,BrowserWindow,ipcMain} = require('electron');
const path = require('path');
let win;
function createWindow()
{
    win =new BrowserWindow({
        width:300,
        height:450,
        resizable:false,
        maximizable: false,
        frame:false,
        icon:path.join(__dirname,'/images/icon.png'),
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
        }
    });
    win.loadFile(path.join(__dirname,'index.html'));


}

app.on('ready',createWindow);

ipcMain.on('minimize-window', () => {
    win.minimize();
});

ipcMain.on('close-window', () => {
    win.close();
});