/* ------ Funcionalidade do Menu Hamburger*/

const menuHamburger = document.querySelector('.menu__hamburger')

menuHamburger.addEventListener("click", ()=>{
   const menuLista = document.querySelector('.menu__lista')
   menuHamburger.classList.toggle('menu__expandido')
   menuLista.classList.toggle('menu__lista-flex');
})


/* ------ Funcionalidade do nav da aba 'Destination'*/

const navBtn = document.querySelectorAll('.destination__nav__item')
const planetas = document.querySelectorAll('[data-planeta]')

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

/* ------ Funcionalidade do carrossel da aba 'Crew' */

const paginationBullet = document.querySelectorAll('.swiper-pagination-bullet')
const sectionInfo = document.querySelectorAll('.section__info')
const slide = document.querySelector('.crew')

slide.addEventListener("mousemove", ()=>{
   changeSlideText()
})

slide.addEventListener("touchend", ()=>{
   changeSlideText()
})

function changeSlideText(){
   let i = 0;
   paginationBullet.forEach((arrayElement)=>{
      if (arrayElement.classList.value == 'swiper-pagination-bullet swiper-pagination-bullet-active'){
         sectionInfo[i].classList.remove('hidden')
         /* console.log(i) */
      } else {
         sectionInfo[i].classList.add('hidden')
      }
      i = i + 1;
   })
}







