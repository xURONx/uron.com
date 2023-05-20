const hamburger = document.querySelector('.hamburger')
burger = document.querySelector('.hamburger')
menu = document.querySelector('.menu')
navbar = document.querySelector('.nav')
container = document.querySelector('.container')

hamburger.addEventListener('click',function(){
    this.classList.toggle('is-active');
})

burger.addEventListener('click',()=>{
    menu.classList.toggle('v-class')
    navbar.classList.toggle('h-nav')
    navbar.classList.toggle('h-container')
})