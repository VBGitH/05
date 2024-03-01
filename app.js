let headerMenu = document.getElementById('header-menu')
headerMenu.onclick = function(){
    /*console.log('1')*/
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')

    let company = document.getElementById('company')
    if (company.classList.contains('display-none') == false){
        company.classList.add('display-none')    
    }
    
    let contact = document.getElementById('contact')
    if (contact.classList.contains('display-none') == false){
        contact.classList.add('display-none')    
    }

    let map = document.getElementById('map')
    if (map.classList.contains('display-none') == false){
        map.classList.add('display-none')    
    }
}

let menuMap = document.getElementById('menu-map')
menuMap.onclick = function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')
    let map = document.getElementById('map')
    if (map.classList.contains('display-none')){
        map.classList.remove('display-none')    
    }    
}

let menuContact = document.getElementById('menu-contact')
menuContact.onclick = function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')
    let contact = document.getElementById('contact')
    if (contact.classList.contains('display-none')){
        contact.classList.remove('display-none')    
    }    
}

let menuCompany = document.getElementById('menu-company')
menuCompany.onclick = function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')
    let company = document.getElementById('company')
    if (company.classList.contains('display-none')){
        company.classList.remove('display-none')    
    }
}