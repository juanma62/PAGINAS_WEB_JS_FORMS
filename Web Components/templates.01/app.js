function main() {
    const template = document.querySelector("#sample-template");
    console.dir(template.content)
    document.body.appendChild(template.content)

    const myTemplate = document.createElement('header')
    myTemplate.innerHTML = `
        <h1>Ejemplo del mal uso de HTML Templates</h1>
    `
    document.body.appendChild(myTemplate)
}


document.addEventListener('DOMContentLoaded', main)