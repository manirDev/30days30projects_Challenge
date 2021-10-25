const fullImgbox = document.getElementById('fullImgbox')
const fullImg = document.getElementById('fullImg')
const imgs= document.querySelectorAll('.photo')
const closeBtn= document.getElementById('closeBtn')


imgs.forEach((img)=>{
    img.addEventListener('click', ()=>{
        fullImgbox.style.display = 'flex'
        fullImg.src = img.src;
    })
})

closeBtn.addEventListener('click', ()=>{
    fullImgbox.style.display = 'none'
})





















