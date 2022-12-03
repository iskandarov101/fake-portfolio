window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 0)
    });

    const elMenuBtn = document.querySelector('.menu-btn');
    const elNavbar = document.querySelector('.navigation');
    const elNavbarItems = document.querySelector('.nav__link');

    elMenuBtn.addEventListener('click', () => {
        elMenuBtn.classList.toggle('active');
        elNavbar.classList.toggle('active');
    });




    const elScrollBtn = document.querySelector('.scrollToTop-btn');
    console.log(elScrollBtn)

    window.addEventListener('scroll', ()=> {
        elScrollBtn.classList.toggle('active', window.scrollY > 500)
    });

    elScrollBtn.addEventListener('click', ()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener('click', ()=> {
        let elReveal = document.querySelector('.reveal');
        
    for(let i = 0; i< elReveal.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = elReveal[i].getBoundingClientRect().top;
        let revealPoint = 50;
  
        if(revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active')
        }
      }
    })
    





});
