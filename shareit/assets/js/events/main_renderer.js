'use strict'

const {ipcRenderer, shell} = require('electron');

const fs = require('fs');
const links = document.querySelectorAll('a[href]');

let current_connections = null;
let repository_view = null;
let breadcrumbs = null;
let fileList = null;
let currentPath = '';
let breadcrumbsUrls = [];
let files = [], folders = [];

console.log("Starting the renderer");


function appendToGrid(data){
    console.log("Appending to DataGrid");
    // TODO: Maybe contain it as backup function of updating the grid
}

/**
 * Creation of the main grid UI which represents the repository of the user
 * This repository will be synced with the datahop.network
 * @param data
 */
function refreshMainRepositoryUI(data){
    console.log("refreshMainRepositoryUI");
    repository_view = $("#repository-view");
    breadcrumbs = $(".breadcrumbs");
    fileList = repository_view.find(".data");
    //let oldList = repository_view.find(".data");
    let scannedDirs = [], scannedFiles = [];
    console.log(data);
    if(Array.isArray(data)) {

        data.forEach(function (d) {

            if (d.type === 'directory') {
                scannedDirs.push(d);
            }
            else if (d.type === 'file') {
                scannedFiles.push(d);
            }

        });

    }
    else if(typeof data === 'object') {

        scannedDirs = data.directories;
        scannedFiles = data.files;

    }

    // Empty the old result and make the new one
    //oldList = fileList;
    fileList.hide();

    if(!scannedDirs.length && !scannedFiles.length) {
        repository_view.find('.nothingfound').show();
    }
    else {
        repository_view.find('.nothingfound').hide();
    }

    if(scannedDirs.length) {

        scannedDirs.forEach(function(f) {

            let itemsLength = f.items.length,
                name = f.filename,
                icon = '<span class="icon folder"></span>';

            if(itemsLength) {
                icon = '<span class="icon folder full"></span>';
            }

            if(itemsLength == 1) {
                itemsLength += ' item';
            }
            else if(itemsLength > 1) {
                itemsLength += ' items';
            }
            else {
                itemsLength = 'Empty';
            }
            let folder = $('<li class="folders"><a href="'+ f.path +'" title="'+ f.path +'" class="folders">'+icon+'<span class="name">' + name + '</span> <span class="details">' + itemsLength + '</span></a></li>');
            folder.appendTo(fileList);
        });

    }

    if(scannedFiles.length) {

        scannedFiles.forEach(function(f) {

            let fileSize = f.size,
                name = f.filename,
                fileType = name.split('.'),
                icon = '<span class="icon file"></span>';

            fileType = fileType[fileType.length-1];
            icon = '<span class="icon file f-'+fileType+'">.'+fileType+'</span>';

            let file = null;
            if("pending" in f){
                if(f.pending == 1) {
                    console.log("Pending File");
                    file = $('<li class="files" id="pending"><a href="'+ f.path+'" title="'+ f.path +'" class="files">'+icon+'' +
                        '<span class="name">'+ name +'</span> ' +
                        '<span class="details">'+fileSize+'</span></a></li>');
                }

            } else {
                file = $('<li class="files"><a href="'+ f.path+'" title="'+ f.path +'" class="files">'+icon+'' +
                    '<span class="name">'+ name +'</span> <span class="details">'+fileSize+'</span></a></li>');
            }



            file.appendTo(fileList);
        });
    }

    generateBreadcrumbs();
    // Show the generated elements
    //oldList.append(fileList)
    //console.log(oldList);
    fileList.show();


    //fileList.animate({'display':'block'});

}


function generateBreadcrumbs(){
    // Generate the breadcrumbs

    let filepath = '';
    if(repository_view.hasClass('searching')){

        filepath = '<span>Search results: </span>';
        fileList.removeClass('animated');
    }
    else {

        fileList.addClass('animated');

        breadcrumbsUrls.forEach(function (u, i) {

            let name = u.split('/');

            if (i !== breadcrumbsUrls.length - 1) {
                filepath += '<a href="'+u+'"><span class="folderName">' + name[name.length-1] + '</span></a> <span class="arrow">→</span> ';
            }
            else {
                filepath += '<span class="folderName">' + name[name.length-1] + '</span>';
            }

        });

    }

    breadcrumbs.text('').append(filepath);
}


function buildAdminArea(data, option) {
    console.log("Building Admin Area");
    if(option == 0){
        // show current connection

        let container = $("#networks-view");
        let content = "<h3 style='color: #2F3A4A'>Current Network Connections</h3><hr>"
        content += "<div class='card'><div class='card-header' style='background-color: #2e343a'>";
        if(data.length == 0){
            content = "No connection available";
        } else {
            for(let i=0; i<data.length; i++){
                content += "<h5 class='card-title'>SSID: <strong>" +data[i].ssid + "</strong></h5></div>";
                content += "<div class='card-body>'";
                content += "<p style='color: #2e343a'>Channel: "+ data[i].channel + "</p>";
                content += "<p style='color: #2e343a'>BSSID: "+ data[i].bssid + "</p>";

                content += "</div></div>";

            }
        }

        container.append(content);
    } else if(option == 1) {
        let container = $("#networks-view");
        let content = "<h3 style='color: #2F3A4A'>BLE Connections</h3><hr>"
        container.append(content);

    }
}


function initializeWindowUI() {

    /* Resolving external links (FIX)*/
       $("#datahop-community-website").click(function(e){
        e.preventDefault();
        console.log($(this).attr("href"));
        shell.openExternal($(this).attr("href"));
    });



    $("#repository_view").find('.search').click(function(){
        let search = $(this);
        search.find('span').hide();
        search.find('input[type=search]').show().focus();
    });


    // Listening for keyboard input on the search field.
    // We are using the "input" event which detects cut and paste
    // in addition to keyboard input.

    $("#repository_view").find('input').on('input', function(e){

        folders = [];
        files = [];

        let value = this.value.trim();

        if(value.length) {

            $("#repository_view").addClass('searching');

            // Update the hash on every key stroke
            window.location.hash = 'search=' + value.trim();

        }
        else {

            $("#repository_view").removeClass('searching');
            window.location.hash = encodeURIComponent(currentPath);

        }

    }).on('keyup', function(e){

        // Clicking 'ESC' button triggers focusout and cancels the search

        let search = $(this);

        if(e.keyCode == 27) {

            search.trigger('focusout');

        }

    }).focusout(function(e){
        // Cancel the search
        let search = $(this);
        if(!search.val().trim().length) {
            window.location.hash = encodeURIComponent(currentPath);
            search.hide();
            search.parent().find('span').show();
        }
    });


    // Setup event triggers for clicking the folders...
}

/* Catching events */
function initializeSendingEvents() {

    ipcRenderer.send('request-files');
    ipcRenderer.send('request-network-connection');

    let exit = document.getElementById('exit');
    exit.addEventListener('click', function(e){
        e.preventDefault();
        ipcRenderer.send('request-to-exit')
    });


    let open_file = document.getElementById('btn-open-file');
    open_file.addEventListener('click',function(e){
        e.preventDefault();
        ipcRenderer.send('request-to-open-file');
    });

    let search_file = document.getElementById('btn-search-file');
    search_file.addEventListener('click',function(e){
        e.preventDefault();
        ipcRenderer.send('request-to-search-file');
    });

}

function initializeFetchingEvents() {

    /* Receiving events from main process */

    ipcRenderer.on('response-sync-repository', function (event,resp) {
        refreshMainRepositoryUI(resp);
    });

    ipcRenderer.on('selected-content', function(event, resp){
        console.log("Received selected content for datahop event!");
        console.log(resp);
        refreshMainRepositoryUI(resp);

    });


    ipcRenderer.on('response-network-connection',function(event,resp){
        console.log("Received Current Connections")
        if(resp!=null){
            console.log(resp);
            buildAdminArea(resp,0);
        }

    });


}

/* -------------------- Initialize module ----------------*/
initializeWindowUI();
initializeSendingEvents();
initializeFetchingEvents();

