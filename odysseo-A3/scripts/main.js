const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () => {
    //Toggle Nav
        nav.classList.toggle('nav-active')

    //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
    //Burger Animation
        burger.classList.toggle('toggle')
    })
}
navSlide()

// button animation

const btn = document.querySelector('.btn1')
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x + 'px' )
    btn.style.setProperty('--y', y + 'px' )
}


    
