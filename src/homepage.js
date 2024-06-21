import img from "./assets/image.png"

const home = function totalHome() {
    let title, image, description, div;

    function homeCreator() {
        title = document.createElement("h1")
        image = document.createElement("img")
        description = document.createElement("h3")
        div = document.getElementById('content')
    }
    
    function homeContentAdder() {
        homeCreator()
        title.textContent = "This is a restaurant page"
        image.src = img;
        description.textContent = `Welcome to our restaurant, where fresh ingredients and 
                diverse flavors create a delightful dining experience. 
                Enjoy our carefully crafted dishes, extensive wine list, 
                and signature cocktails in a warm, inviting atmosphere. 
                Perfect for any occasion, our restaurant promises 
                exceptional cuisine and attentive service.`
    }
    
    function homeAppender() {
        div.appendChild(title)
        div.appendChild(image)
        div.appendChild(description)
    }
    
    function home() {
        homeContentAdder();
        homeAppender();
    }
    
    return home();
}

export default home

