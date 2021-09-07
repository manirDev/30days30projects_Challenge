const progress= document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.circle')
const pages = document.querySelectorAll('.page')
let currentActive= 1
next.addEventListener('click', ()=>{
    currentActive++
    if(currentActive>circles.length){
        currentActive=circles.length
    }
    
    Pages()
    update()
})
prev.addEventListener('click', ()=>{
    currentActive--
    if(currentActive<1){
        currentActive=1
    }
    Pages()
   update()
})

function Pages(){
    pages.forEach((page, idx1) => {
        if(idx1 < currentActive){
            removeActiveClasses()
            page.classList.add('slide-page')
            
        }
    })
}
function removeActiveClasses() {
    pages.forEach(page => {
        page.classList.remove('slide-page')
    })
}
function update(){
    circles.forEach((circle, idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width= (actives.length - 1) / (circles.length - 1)*100 + '%'
    if(currentActive==1){
        prev.disabled= true
    }else if(currentActive==circles.length){
        next.disabled=true
    }else{
        prev.disabled=false
        next.disabled=false
    }


}


