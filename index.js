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
},{
    name: 'boat5',
    src: 'styles/boat1.jpg'
},{
    name: 'boat6',
    src: 'styles/boat2.jpg'
},{
    name: 'boat7',
    src: 'styles/boat1.jpg'
},{
    name: 'boat8',
    src: 'styles/boat2.jpg'
},{
    name: 'boat9',
    src: 'styles/boat1.jpg'
},{
    name: 'boat10',
    src: 'styles/boat2.jpg'
}]

for (let i = 0; i <images.length; i++){
    const main = document.getElementById('searchField')
    const img = document.createElement('img')
    img.alt = images[i].name
    img.src = images[i].src
    img.style = 'height: 100px; position: absolute; bottom: ' + getRandomInt(10, 30) + 'rem; left: ' + getRandomInt(0, 60) + 'rem'
    img.onclick = function () {
        addToFoundItems(images[i])
    } 
    main.appendChild(img)
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
        img.style.height = '50px'
        foundItemsSection.appendChild(img)
    }
    if (foundItems.length === images.length) {
        alert('You have won! You found all the boats. Awesome!!')
    }
}

function userName() {
    const player = prompt('Please enter your name')
    if (player !== '') {
        const playerItems = document.getElementById('playerName')
        playerItems.textContent = player + "'s items"
    } else {
        const playerItems = document.getElementById('playerName')
        playerItems.textContent = "player's items"
    }
}

userName()  