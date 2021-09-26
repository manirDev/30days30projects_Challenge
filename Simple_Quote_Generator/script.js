const quoteEl= document.getElementById('quote')
const quoteBtn= document.getElementById('quoteBtn')
const authorName = document.getElementById('author')

quoteBtn.addEventListener('click', generateQuote)

//async and await method
async function generateQuote(){
    
    const res = await fetch('http://api.quotable.io/random')
    const data =await res.json()
    authorName.innerText = data.author
    quoteEl.innerHTML = data.content
}
//Fetch method
/*function generateQuote(){
    fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(data =>{
        authorName.innerText = data.author
        quoteeEl.innerHTML = data.content
    })

}*/







