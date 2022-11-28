const navBtn = document.querySelectorAll('.destination__nav__item')
const planetas = document.querySelectorAll('[data-planeta]')
const planetasImagem = document.querySelectorAll('.destination__imagem')

navBtn.forEach((arrayElement)=>{
   arrayElement.addEventListener("click", (evento)=>{
      removerAtivos()
      evento.target.classList.add('destination__nav__item-ativo')
      trocarTexto()
   })
})

function trocarTexto(){
   let i = 0;
   navBtn.forEach((arrayElement)=>{
      if (arrayElement.classList.value == 'destination__nav__item destination__nav__item-ativo'){
         planetas[i].classList.remove('hidden')
         planetasImagem[i].classList.remove('hidden')
      } else {
         planetas[i].classList.add('hidden')
         planetasImagem[i].classList.add('hidden')
      }
      i = i + 1;
   })
}

function removerAtivos(){
   navBtn.forEach((arrayElement)=>{
      arrayElement.classList.remove('destination__nav__item-ativo')
   })
}