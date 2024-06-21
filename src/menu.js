const menu = function menu() {
    const content = document.getElementById('content');
    const menuHolder = document.createElement('div')
    content.appendChild(menuHolder)
    menuHolder.classList.add('menu-holder');
    
    function divCreator(menutext) {
        const div = document.createElement('div')
        div.textContent = menutext;
        div.classList.add('menu-item')
        return div
    }
    
    const divNumber = 4
    for(let i = 1; i <= divNumber; i++) {
        const newDiv = divCreator(`This is item number ${i}`)
        menuHolder.appendChild(newDiv)
    }
}

export default menu

