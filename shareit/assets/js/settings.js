'use strict'

const ipcRenderer = require('electron')

for (let el of document.querySelectorAll('#header-buttons li')) {
    el.addEventListener('click', function () {
        document.querySelector('#header-buttons .active').classList.remove('active')
        this.classList.add('active')
    })
}

for (let el of document.querySelectorAll('#type-icons li')) {
    el.addEventListener('click', function () {
        document.querySelector('#type-icons .active').classList.remove('active')
        this.classList.add('active')

    })
}

