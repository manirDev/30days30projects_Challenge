  
const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')

        addReposToCard(data)
    } catch(err) {
        createErrorCard('Problem fetching repos')
    }
}

function createUserCard(user) {
    const userID = user.name || user.login
    const userBio = user.bio ? `<p>${user.bio}</p>` : ''
    const cardHTML = `
    <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      <div class="bio-desc" style="display=flex;flex-direction=column">
      <i class="username"> ${user.login}</i>
      <ul>
      <li> <i class="fas fa-users"></i>${user.followers} <small>Followers</small></li>
      <li>${user.following} <small>Following</small></li>
      
    </ul>
        <div style="padding=20px;"> <i class="fas fa-map-marker-alt" style="padding-right=10px;"></i> ${user.location}</div>
        <div style="padding=20px;"> <i class="fab fa-twitter" style="padding-right=10px;"></i>${user.twitter_username}</div>
       
        </div>
      </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      
      <h3>Popular repositories</h3>
      <div id="repos"></div>
    </div>
  </div>
    `
    main.innerHTML = cardHTML
    
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 4)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repo')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name
            
            reposEl.appendChild(repoEl)
            
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ''
    }
})