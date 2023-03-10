const menuHamburger = document.getElementById('menu-hamburger')
const headerMenu = document.getElementById('header-menu')
const iconClose = document.getElementById('icon-close')

menuHamburger.addEventListener('click', () => {
    headerMenu.classList.add('header-menu-show')
})

iconClose.addEventListener('click', () => {
    headerMenu.classList.remove('header-menu-show')
})

document.addEventListener('click', (event) => {
    const outsideClick = !headerMenu.contains(event.target)
    const clickHamburger = menuHamburger.contains(event.target)

    if(outsideClick && !clickHamburger) headerMenu.classList.remove('header-menu-show')
    
}) 
