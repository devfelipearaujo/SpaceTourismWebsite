/*Funcionalidade do Menu Hamburger*/

const menuHamburger = document.querySelector('.menu__hamburger')

menuHamburger.addEventListener("click", ()=>{
   const menuLista = document.querySelector('.menu__lista')
   menuHamburger.classList.toggle('menu__expandido')
   menuLista.classList.toggle('menu__lista-flex');
})


