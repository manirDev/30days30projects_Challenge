let likeBtn = document.querySelector('#likeBtn')
let commentBtn = document.querySelector('#commentBtn')
let shareBtn = document.querySelector('#shareBtn')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let input3 = document.querySelector('#input3')

likeBtn.addEventListener('click', ()=>{
    input1.value =parseInt(input1.value) + 1
    input1.style.color="#004eff"
})
commentBtn.addEventListener('click', ()=>{
    input2.value =parseInt(input2.value) + 1
    input2.style.color="#ff0000"
})
shareBtn.addEventListener('click', ()=>{
    input3.value =parseInt(input3.value) + 1
    input3.style.color="green"
})