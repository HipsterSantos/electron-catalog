const {app ,BrowserWindow } = require('electron');
const createWindow = ()=>{
    const win = new BrowserWindow({
        width: 800,
        height: 800
    }
    )
    win.loadFile('index.html')
}
const {platform} = process; 
app.on('window-all-closed',()=>{
    if(platform !== 'darwin'){
        app.quit();
    }
})
app.whenReady().then(_=>{
    createWindow()
})
