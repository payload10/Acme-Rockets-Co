const initApp = () => {

    const hamburgerBtn = document.getElementById('mobile-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {

        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

// Let the DOM Load and then call the function initApp
document.addEventListener('DOMContentLoaded', initApp)