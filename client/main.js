

const baseURL = 'http://localhost:4000/api/'

const getFortune = _ => {
    axios.get(baseURL + 'fortune').then(res => {
        const data = res.data
        const fortuneCard = document.createElement('div')
        fortuneCard.class = 'fortune'
        fortuneCard.innerHTML = `<p>${data}</p>`
        document.body.append(fortuneCard)    
    })
    .catch(err => console.log(err))
}

const postGoal = _ => {
    document.querySelector('.goals-div').innerHTML = "<h2>Goals List</h2>"
    let body = {
        goal: document.querySelector('#goalsList').value
    }
    axios.post(baseURL + 'goal', body).then(res => {
        const goals = res.data
        goals.forEach(el => {
            let goalsP = document.createElement('p')
            goalsP.textContent = el.goal
            document.querySelector('.goals-div').append(goalsP)
        })
    })
    .catch(err => console.log(err))
}

const activateCSS = _ => {
    axios.get(baseURL + 'color').then(res => {
        const link = document.createElement('div')
        link.classList = 'css'
        link.innerHTML = res.data
        document.querySelector('head').append(link)
    })
    .catch(err => console.log(err))
}

const killCSS = _ => {
    axios.get(baseURL + 'clear').then(res => {
        document.querySelector('.css').remove()
    })
}

document.getElementById('css-kill').addEventListener('click', killCSS)
document.getElementById('css-activate').addEventListener('click', activateCSS)
document.getElementById('goalsButton').addEventListener('click', postGoal)
document.getElementById('fortuneButton').addEventListener('click', getFortune)