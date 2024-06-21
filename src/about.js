const about = function about() {
    const content = document.getElementById('content')

    const description = document.createElement('h3')
    
    description.textContent = `Welcome to our restaurant, 
    where culinary passion meets exceptional service. 
    Our commitment to using fresh, locally-sourced 
    ingredients ensures that each dish bursts with 
    flavor and authenticity. Whether you're enjoying a 
    casual lunch, a family dinner, or a special celebration, 
    our warm and inviting atmosphere makes every visit 
    memorable. Our extensive wine list and signature cocktails 
    are crafted to complement our diverse menu, offering something 
    for every palate. Join us for an unforgettable dining experience 
    that promises not only delicious food but also a sense of community 
    and hospitality.`

    content.appendChild(description)
}

export default about