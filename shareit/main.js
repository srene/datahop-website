
'use strict'


const electron = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');
const wifi = require('node-wifi');
//const noble = require('noble-uwp');
//console.log(noble);
let config = require("./config");


const {app, BrowserWindow, Menu, ipcMain, dialog} = electron;

let mainWin = null;
let wifiAP = [];
let current_conns = null;
let _files = null;
const anim = true;

function obtainFiles(dirname, finish){
    let results = [];


    fs.readdir(dirname, function(err, list){
        if (err) return finish(err);

        let pending = list.length;

        if(!pending) return finish(null, results);

        list.forEach(function(file){
            file = path.resolve(dirname, file);

            fs.stat(file, function(err, stat){
                if(stat && stat.isDirectory()){
                    // add dir to results
                    console.log(file.replace(/^.*[\\\/]/, ''));
                    let item = {
                        "type":"directory",
                        "path": file,
                        "filename": file.replace(/^.*[\\\/]/, ''),
                        "items": []
                    };
                    obtainFiles(file, function (err, res) {
                        results = results.concat(res);
                        if(!--pending) finish(null, results);
                    });
                    //item.items = results;
                    results.push(item);

                } else {
                    let filesize = fs.statSync(file).size;
                    console.log("Size of file: " + file + " is " + filesize)
                    let item = {
                        "type":"file",
                        "path": file,
                        "filename": file.replace(/^.*[\\\/]/, ''),
                        "filesize": filesize
                    };
                    results.push(item);

                    if(!--pending) finish(null, results);
                }
            })
        })
    })

    console.log(results);

}

function createDataFolder() {
    let default_dir = config.default_dir;
    if(!fs.existsSync(default_dir)){
        fs.mkdirSync(default_dir);
        console.log("Default Dir was created in " + default_dir);
    }
}


function loadAnimation(){
    mainWin.loadFile("./templates/loading.html");
    obtainFiles(config.default_dir, function(err, resp){
        if(err){
            throw err;
        }
        /* Pass contents to the renderer process */
        console.log(resp);
        _files = resp;
    });
    setTimeout(loadMainUI,8000)
}

function loadMainUI() {
    mainWin.loadFile('index.html');

    ipcMain.on('request-files', function(event, arg){
        mainWin.webContents.send('response-sync-repository', _files);
    });

    ipcMain.on('request-network-connection', function(event, arg){
        mainWin.webContents.send('response-network-connection', current_conns);
    });


}

/**
 * Initialize the communication with the renderer process
 */
function initializeUI() {

    mainWin = new BrowserWindow({
        width:1200, height:800
    });
    mainWin.webContents.openDevTools();

    createDataFolder();
    createMainWindow();
    if(anim) {
        loadAnimation();
    } else {

        loadMainUI();
    }



    mainWin.on('closed', () => {
        console.log("Closing window...")
        mainWin = null;
    });



    /* Registering main renderer process events */

    ipcMain.on('request-to-exit', function(event, arg){
        console.log("Request to exit");
        dialog.showMessageBox({
           type: 'warning',
            title: 'Exit ShareIt',
            message: 'Are you sure you want to exit?',
            buttons: ['Yes', 'No'],

        }, (resp) => {
            if(resp === 0){
                app.quit();
            } else {
                dialog.cancel();
            }
        });
    });

    ipcMain.on('request-to-open-file', function(event, arg){
        console.log("Request to open file");

        dialog.showOpenDialog({
            properties:['openFile','multiselections','showHiddenFiles'],
            title: 'Distribute Content',
            filters: [{name:'All Files', extensions: ['*']}]

        }, function(fileNames){
            let data = [];
            if (fileNames === undefined) {
                console.log("No file selected");
            } else {
                console.log(fileNames);
                for(let i=0; i<fileNames.length; i++){
                    let pendingFile = fileNames[i];
                    if(fs.lstatSync(pendingFile).isDirectory()){
                        // it's a folder
                        console.log(pendingFile + " is a Directory");
                    } else {
                        console.log(pendingFile + " is a file");
                        let item = {
                            "type":"file",
                            "path": pendingFile,
                            "filename": pendingFile.replace(/^.*[\\\/]/, ''),
                            "filesize": fs.statSync(pendingFile).size,
                            "pending":1
                        };
                        data.push(item);
                    }
                }
                console.log(data);
                mainWin.webContents.send('selected-content', data);

            }

        });
    });

    ipcMain.on('request-to-search-file', function(event, arg){
        console.log("Request to search file");

    })

}

/**
 * Create the main Window and the Menu
 * Obtain also necessary files for the initialization
 */
function createMainWindow() {
    initializeBackgroundProcesses();
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert our custom menu
    Menu.setApplicationMenu(mainMenu);

}

app.on('ready', initializeUI);

app.on('windows-all-closed', () => {
    console.log("All windows are closed")
    if(process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', () => {
    if(mainWin === null){
        console.log("We are here");
        initializeUI();
    }
});


function scan_wifi_networks() {

    wifi.scan(function(err, networks){
        if(err) {
            console.log(err);
        } else {
            console.log(networks);
        }
    });
}

function scan_ifaces(){
    wifi.getCurrentConnections(function(err, currentConnections){
        if(err) {
            console.log(err);
        } else {

            current_conns = currentConnections;
            /*for(let i=0; i<currentConnections.length; i++) {
                console.log(currentConnections[i].ssid);
            }*/
        }
    });
}


function setupBLE() {
    noble.on('stateChange', scan);

    function scan(state){
        if (state === 'poweredOn') {
            noble.startScanning();
            console.log("Started scanning");
        } else {
            noble.stopScanning();
            console.log("Is Bluetooth on?");
        }
    }
}

function peripheralDetails(peripheral) {
    console.log('\n Discovered new peripheral with UUID ' + peripheral.uuid+ ':');
    console.log('\t Peripheral Bluetooth address:' + peripheral.address);
}


function initializeBackgroundProcesses() {
    /* Initialize instance for the wifi module */
    wifi.init({
        iface : null
    });

    //scan_wifi_networks();

    scan_ifaces();

    //setupBLE();
}


/***
 *
 * @type {{label: string, submenu: *[]}[]}
 * A mainMenu template
 */

const mainMenuTemplate = [{
    label: 'File',
    submenu:[
        {
            label: 'Download Slides'
        },
        {
            label: 'Settings',
            click() {
                mainWin.loadFile(path.join(__dirname + "/templates/", "settings.html"))
            }
        },
        {
          label: 'Developer Tools',
            click(){
                mainWin.loadFile( path.join(__dirname + "/templates/","admin.html"))
            }
        },
        {
            label: 'Exit',
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click(){
                app.quit();
            }
        }
    ],

}, {
    label: 'Topics'
},{
    label: 'Help'
}
];


