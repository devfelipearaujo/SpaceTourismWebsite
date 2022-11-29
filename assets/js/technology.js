const techBtn = document.querySelectorAll('.tech__nav__item')
const sectionInfo = document.querySelectorAll('.section__info')
const techImagem = document.querySelectorAll('.tech__imagem')

techBtn.forEach((arrayElement)=>{
   arrayElement.addEventListener("click", (evento)=>{
      removerAtivo()
      evento.target.classList.add('tech__nav__item-ativo')
      trocarTexto()
   })
})

function trocarTexto(){
   let i = 0;
   techBtn.forEach((arrayElement)=>{   
      if(arrayElement.classList.value == 'tech__nav__item tech__nav__item-ativo'){
         sectionInfo[i].classList.remove('hidden')
         techImagem[i].classList.remove('hidden')
         console.log(i)
      } else {
         sectionInfo[i].classList.add('hidden')
         techImagem[i].classList.add('hidden')
      }
      i = i + 1;
   })
}

function removerAtivo(){
   techBtn.forEach((arrayElement)=>{
      arrayElement.classList.remove('tech__nav__item-ativo')
   })
}