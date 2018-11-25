const links = document.querySelectorAll('link[rel="import"]');

// Import recursively each section and add it to the DOM
Array.prototype.forEach.call(links, (link) => {
    //console.log(link);
    let template = link.import.querySelector('.task-template');
    let clone = document.importNode(template.content, true);
    if (link.href.match('about.html')) {
        document.querySelector('body').appendChild(clone)
    } else {
        document.querySelector('.content').appendChild(clone)
    }
});