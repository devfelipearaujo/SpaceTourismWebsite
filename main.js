/*Funcionalidade do Menu Hamburger*/

const menuHamburger = document.querySelector('.menu__hamburger')

menuHamburger.addEventListener("click", ()=>{
   const menuLista = document.querySelector('.menu__lista')
   menuHamburger.classList.toggle('menu__expandido')
   menuLista.classList.toggle('menu__lista-flex');
})


/*Funcionalidade do nav da aba 'Destination'*/

const navBtn = document.querySelectorAll('.destination__nav__item')
const planetas = document.querySelectorAll('.planeta')

navBtn.forEach((arrayElement)=>{ // Função executada em cada botão do nav
   arrayElement.addEventListener("click", (evento)=>{
      addClasses(evento.target.innerHTML) // esconde todas as sections e mostra somente a equivalente ao item clicado
      removeClass() // remove a class que coloca o sublinhado no item
      arrayElement.classList.add('destination__nav__item-ativo') // adiciona a class que sublinha o item
   })
})

function addClasses(planeta){
   planetas.forEach((arrayElement)=>{
      arrayElement.classList.add('hidden')  
   })
   mostrar = document.querySelector('.'+planeta)
   mostrar.classList.remove('hidden')
}

function removeClass() {
   navBtn.forEach((arrayElement)=>{    
      arrayElement.classList.remove('destination__nav__item-ativo')
   })
}