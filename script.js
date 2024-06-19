function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function getYear(){
    var date = new Date().getFullYear();
    document.getElementById('date').innerHTML = date;
    
}

document.addEventListener('DOMContentLoaded', getYear);