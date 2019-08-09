const images = [{
    name: 'boat1',
    src: 'styles/boat1.jpg'
},{
    name: 'boat2',
    src: 'styles/boat2.jpg'
},{
    name: 'boat3',
    src: 'styles/boat3.jpg'
}]

for (let i = 0; i <images.length; i++){
    const main = document.getElementById('searchField')
    const img = document.createElement('img')
    img.alt = images[i].name
    img.src = images[i].src
    img.style = 'height: 100px; position: absolute; bottom: ' + getRandomInt(0, 30) + 'rem; left: ' + getRandomInt(0, 60) + 'rem'
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
    } 
}
