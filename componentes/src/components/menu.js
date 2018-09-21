
export class MenuComponent {
    constructor (baseURL, aItems) {
        this.items = aItems.links
        this.items.forEach( item => {
            item[1] = baseURL + item[1]
        })
        console.log(this.items)
    }
    renderNode () {
        const menu = document.createElement('nav')
        let itemsList = ""
        this.items.forEach(item => {
            itemsList += `<li><a href="${item[1]}">${item[0]}</a></li>`
        });
        menu.innerHTML = `<ul class="menu">${itemsList}</ul>`
        return menu
    }
}