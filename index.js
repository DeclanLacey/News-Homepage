const burgerMenu = document.getElementById("burger-menu")
const burgerMenuOpen = document.getElementById("burger-menu-open")
const burgerNav = document.getElementById("burger-nav")
const body = document.getElementById("body")



burgerMenu.addEventListener("click", openBurgerMenu)
burgerMenuOpen.addEventListener("click", closeBurgerMenu )


function openBurgerMenu() {
    burgerMenu.style.display = "none"
    burgerMenuOpen.style.display = "block"
    burgerNav.style.display = "block"
}

function closeBurgerMenu() {
    burgerMenu.style.display = "block"
    burgerMenuOpen.style.display = "none"
    burgerNav.style.display = "none"
}