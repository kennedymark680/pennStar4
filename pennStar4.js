// -------------------- Variables -------------------
let sqrXId = 0
let sqrYId = 0
let y = 9
let x = 11
let helicopterCoordinates = `y${y.toString()}x${x.toString()}`
const helicopter = document.createElement('div')
let activeHospital = ''

const heliPad = ['y9x11']
const readingLocation = ['y7x1', 'y7x2', 'y8x1', 'y8x2']
const pottstownLocation = ['y10x9']
const jennersvilleLocation = ['y18x4']
const chesterCountyLocation = ['y15x10', 'y15x11', 'y16x10', 'y16x11']
const leighHighValleyLocation = ['y1x11', 'y1x12', 'y2x11', 'y2x12']
const hupLocation = [
  'y13x17',
  'y13x18',
  'y13x19',
  'y14x17',
  'y14x18',
  'y14x19',
  'y15x17',
  'y15x18',
  'y15x19'
]

// --------------- Objects ---------------------
class Hospital {
  constructor(name, location, patient) {
    this.name = name
    this.location = location
    this.patient = patient
  }
}

class Helicopter {
  constructor(name, medevacStatus) {
    this.name = name
    this.medevacStatus = medevacStatus
  }
}

const ps4 = new Helicopter('PS4', false)

const reading = new Hospital('Reading', readingLocation, false)
const pottstown = new Hospital('Pottstown', pottstownLocation, false)
const jennersville = new Hospital('Jennersville', jennersvilleLocation, false)
const chesterCounty = new Hospital(
  'Chester County',
  chesterCountyLocation,
  false
)
const leighHighValley = new Hospital(
  'Leigh High Valley',
  leighHighValleyLocation,
  false
)
const hup = new Hospital('HUP', hupLocation, false)

const hospitals = [
  reading,
  pottstown,
  jennersville,
  chesterCounty,
  leighHighValley,
  hup
]

// ------------ FUNCTIONS --------------------
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < 20; j++) {
    const newDiv = document.createElement('div')
    const section = document.querySelector('.board')
    newDiv.setAttribute('class', 'square')
    newDiv.setAttribute('id', `y${sqrYId.toString()}x${sqrXId.toString()}`)
    section.appendChild(newDiv)
    sqrXId += 1
  }
  sqrXId = 0
  sqrYId += 1
}

// Setting the helicopterDiv after it is created by the function above.
let helicopterDiv = document.getElementById(helicopterCoordinates)
helicopter.setAttribute('id', 'helicopter')
helicopterDiv.appendChild(helicopter)

// ----------------------------

const moveDown = () => {
  y += 1
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
}

const moveUp = () => {
  y -= 1
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
}

const moveRight = () => {
  x += 1
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
}

const moveLeft = () => {
  x -= 1
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
}

const turnRight = () => {
  helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
}

const turnLeft = () => {
  helicopter.style.backgroundImage = 'url(./resources/helicopter.png)'
}

const genHospital = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length)
  activeHospital = array[randomNumber].name
  const activeHospitalLocation = array[randomNumber].location
  for (let i = 0; i < activeHospitalLocation.length; i++) {
    console.log(`#${activeHospitalLocation[i]}`)
    const select = document.querySelector(`#${activeHospitalLocation[i]}`)
    select.style.backgroundColor = 'yellow'
    select.style.opacity = '0.4'
  }
}
genHospital(hospitals)

// const createHighlight = () => {
//   const highlight = document.createElement('div')
//   const board = document.querySelector('.board')
//   highlight.setAttribute('class', 'highlight')
//   board.appendChild(highlight)
// }

const selectArea = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`#${array[i]}`)
    const select = document.querySelector(`#${array[i]}`)
    select.style.backgroundColor = 'yellow'
    select.style.opacity = '0.4'
  }
}

// selectArea(activeHospital[1])
console.log(activeHospital)

let startingTime = 5

const timer = () => {
  if (startingTime > 0) {
    const displayedTime = document.querySelector('.time')
    displayedTime.innerHTML = `${startingTime}`
    startingTime = startingTime - 1
  }
}

const startTimer = () => {
  setInterval(timer, 1000)
}

startTimer()
console.log(startingTime)

// EVENT LISTENER
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      //left
      turnLeft()
      moveLeft()
      break
    case 38:
      //up
      moveUp()
      break
    case 39:
      //right
      turnRight()
      moveRight()
      break
    case 40:
      //down
      moveDown()
      break
  }
})