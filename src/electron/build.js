
var electronInstaller = require('electron-winstaller');
var path = require("path");

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: path.join('./out/HelloWorld-win32-x64'), //入口，electron-package生成的文件目录
  outputDirectory: path.join('./installer64'),     //出口，electron-winstaller生成的文件目录
  authors: 'zhangtao25',
  exe: "HelloWorld.exe",        //名称
  setupIcon: "./src/electron/favicon.ico",//安装图标，必须本地
  // iconUrl: 'http://pm72qibzx.bkt.clouddn.com/icon.ico',//程序图标，必须url
  noMsi: true,
  setupExe:'HelloWorld.exe',
  title:'HelloWorld',
  description: "HelloWorld"
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
