const images = [{
    name: 'boat1',
    src: 'styles/boat1.jpg'
},{
    name: 'boat2',
    src: 'styles/boat2.jpg'
},{
    name: 'boat3',
    src: 'styles/boat1.jpg'
},{
    name: 'boat4',
    src: 'styles/boat2.jpg'
}]

function startGame() {
    const piratePlace = document.getElementById('searchField')
    const pirate = document.createElement('img')
    pirate.alt = 'pirate'
    pirate.src = 'styles/pirate.png'
    pirate.style = 'height: 300px; margin-left: 150vh; margin-top: 10px'
    piratePlace.appendChild(pirate)
    for (let i = 0; i <images.length; i++){
        const main = document.getElementById('searchField')
        const img = document.createElement('img')
        img.alt = images[i].name
        img.src = images[i].src
        img.style = 'height: 100px; position: absolute; bottom: ' + i * 10 + 'rem'
        img.onclick = function () {
            addToFoundItems(images[i])
            main.removeChild(img)
        } 
        main.appendChild(img)
    }
    userName()
}


function getRandomInt(x, y) {
    let number = Math.floor(Math.random()*(y - x) + x)
    return number
}

const foundItems = []

function addToFoundItems(image) {
    if (!foundItems.includes(image)) {
        foundItems.push(image)
        displayInFooter()
    }
}

function displayInFooter() {
    const foundItemsSection = document.getElementById('foundItems')
    foundItemsSection.innerHTML = ''
    for (let i = 0; i < foundItems.length; i++) {
        const img = document.createElement('img')
        img.alt = foundItems[i].name
        img.src = foundItems[i].src
        img.style.height = '100px'
        foundItemsSection.appendChild(img)
    }
    if (foundItems.length === images.length) {
        alert('You have won! You catched all the boats. Awesome!!')
       location.reload()
    }
}

function userName() {
    const startButton = document.getElementById('startButton')
    startButton.style.display = 'none'
    const player = prompt('Please enter your name')
    if (player !== '') {
        const playerItems = document.getElementById('playerName')
        playerItems.textContent = player + "'s items"
    } else {
        const playerItems = document.getElementById('playerName')
        playerItems.textContent = "Player's items"
    }
}
