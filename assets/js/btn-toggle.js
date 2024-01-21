function openMenu() {
    let mobileMenu = document.querySelector('.menu-mobile-list')
    let icon = document.querySelector('.menu')
    mobileMenu.classList.toggle('open')
    if (icon.classList.contains('bi-list')) {
        icon.classList.remove('bi-list')
        icon.classList.add('bi-x')
    } else {
        icon.classList.remove('bi-x')
        icon.classList.add('bi-list')
    }
}