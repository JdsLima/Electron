const { app, BrowserWindow } = require('electron')

// Habilita o live reload para o Electron
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({frame: false, width: 1080, height: 720,
    icon: "docs/assets/img/Logo/Logo.png",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  //carrega o index.html do aplicativo.
  win.loadFile('index.html');

  // configuraçoes da janela
  win.removeMenu();
  //abre a ferramenta de desenvolvedor
  win.webContents.openDevTools();
}
app.whenReady().then(createWindow)
