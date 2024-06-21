import home from './homepage.js'
import menu from './menu.js'
import about from './about.js'
import clean from './contentCleaner.js'
import './style.css'

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu')
const aboutButton = document.getElementById('about')

homeButton.addEventListener("click", () => {
    clean();
    home();
})

menuButton.addEventListener("click", () => {
    clean();
    menu();
})

aboutButton.addEventListener("click", () => {
    clean()
    about()
})

