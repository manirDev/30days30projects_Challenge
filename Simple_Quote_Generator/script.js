const jokeEl= document.getElementById('joke')
const jokeBtn= document.getElementById('jokeBtn')
const authorName = document.getElementById('author')

jokeBtn.addEventListener('click', generateJoke)


async function generateJoke(){
    
    const res = await fetch('http://api.quotable.io/random')
    const data =await res.json()
    authorName.innerText = data.author
    jokeEl.innerHTML = data.content
}

/*function generateJoke(){
    fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(data =>{
        authorName.innerText = data.author
        jokeEl.innerHTML = data.content
    })

}*/







