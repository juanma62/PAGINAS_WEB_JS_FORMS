function main() {
    // const template = document.querySelector("#sample-template");
    const template = document.querySelector('link[rel="import"]')
                        .import.querySelector('#sample-template')
    console.dir(template)
}


document.addEventListener('DOMContentLoaded', main)