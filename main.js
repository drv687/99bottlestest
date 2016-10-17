const electron = require('electron');
const {app, BrowserWindow} = electron; 

app.on('ready', function(){
	myWindow = new BrowserWindow({width:800, height:600})
myWindow.loadURL('file://'+__dirname+'/index.html');
myWindow.webContents.openDevTools();
}); 
