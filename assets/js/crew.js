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
         //console.log(i)
      } else {
         sectionInfo[i].classList.add('hidden')
      }
      i = i + 1;
   })
}