// Adding Click effect to hamburger menu icon
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// So when an event happens (hamburger is clicked), this function will run
// We are defining the function in here, use .is-active in lines 195 of css sheet
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')    // Toggle the active class
})