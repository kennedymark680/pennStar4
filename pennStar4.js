// -------------------- Variables -------------------
let startingTime = 5
let score = 0
let sqrXId = 0
let sqrYId = 0
let y = 9
let x = 11

const startButton = document.querySelector('.startButton')
const restartButton = document.querySelector('.restartButton')
const displayedTime = document.querySelector('.time')
const scoreBoard = document.querySelector('.scoreBoard')
const fuelDisplay = document.querySelector('.fuel')

displayedTime.innerHTML = `${startingTime}`

let helicopterCoordinates = `y${y.toString()}x${x.toString()}`
const helicopter = document.createElement('div')
let activeHospital = ''
let activeHospitalLocation = []
let receivingHospital = ''
let receivingHospitalArray = []
let receivingHospitalLocation = []

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
  constructor(name, medevacStatus, fuel) {
    this.name = name
    this.medevacStatus = medevacStatus
    this.fuel = 100
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
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRightRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
  }
}

const moveUp = () => {
  y -= 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRightRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
  }
}

const moveRight = () => {
  x += 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRightRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
  }
}

const moveLeft = () => {
  x -= 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopter.png)'
  }
}

// const turnRight = () => {
//   helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
// }

// const turnLeft = () => {
//   helicopter.style.backgroundImage = 'url(./resources/helicopter.png)'
// }

const genHospital = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length)
  activeHospital = array[randomNumber].name
  activeHospitalLocation = array[randomNumber].location
  for (let i = 0; i < activeHospitalLocation.length; i++) {
    const select = document.querySelector(`#${activeHospitalLocation[i]}`)
    select.style.backgroundColor = 'yellow'
    select.style.opacity = '0.4'
  }
}

const genSendingHospital = (array) => {
  let randomNumber = Math.floor(Math.random() * array.length)
  activeHospital = array[randomNumber].name
  activeHospitalLocation = array[randomNumber].location
  for (let i = 0; i < activeHospitalLocation.length; i++) {
    const select = document.querySelector(`#${activeHospitalLocation[i]}`)
    select.style.backgroundColor = 'white'
    select.style.opacity = '0.4'
  }
}

const genReceivingHospital = () => {
  receivingHospitalArray = hospitals.filter((hosp) => {
    return hosp.name !== activeHospital
  })
  let randomNumber = Math.floor(Math.random() * receivingHospitalArray.length)
  receivingHospital = receivingHospitalArray[randomNumber]
  receivingHospitalLocation = receivingHospitalArray[randomNumber].location

  for (let i = 0; i < receivingHospitalLocation.length; i++) {
    const select = document.querySelector(`#${receivingHospitalLocation[i]}`)
    select.style.backgroundColor = 'red'
    select.style.opacity = '0.4'
  }
}

const selectArea = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`#${array[i]}`)
    const select = document.querySelector(`#${array[i]}`)
    select.style.backgroundColor = 'yellow'
    select.style.opacity = '0.4'
  }
}

const timer = () => {}

const startTimer = () => {
  //stopTimer()
  interval = setInterval(function () {
    // console.log(startingTime)

    if (startingTime < 0) {
      clearInterval(interval)
      //UpdateGameMessage('times up')
    } else {
      displayedTime.innerHTML = `${startingTime}`
    }
    startingTime -= 1
  }, 1000)
}

const resetTimer = () => {
  startingTime = 5
  displayedTime.innerHTML = `${startingTime}`
  clearInterval(interval)
}

const checkReached = () => {
  activeHospitalLocation.forEach((latLog) => {
    if (helicopterCoordinates === latLog) {
      for (let i = 0; i < activeHospitalLocation.length; i++) {
        const select = document.querySelector(`#${activeHospitalLocation[i]}`)
        select.style.backgroundColor = ''
        select.style.opacity = ''
        // helicopter.style.backgroundImage = 'url(./resources/helicopterRed.png'
        ps4.medevacStatus = true
      }
      // score += 1
      scoreBoard.innerHTML = `${score}`
    }
  })
  receivingHospitalLocation.forEach((latLog) => {
    if (helicopterCoordinates === latLog && ps4.medevacStatus === true) {
      for (let i = 0; i < receivingHospitalLocation.length; i++) {
        const select = document.querySelector(
          `#${receivingHospitalLocation[i]}`
        )
        select.style.backgroundColor = ''
        select.style.opacity = ''
        // helicopter.style.backgroundImage = 'url(./resources/helicopterRed.png'
        ps4.medevacStatus = false
      }
      genSendingHospital(hospitals)
      genReceivingHospital()
      score += 1
      scoreBoard.innerHTML = `${score}`
    }
  })
}

const explosion = () => {
  if (ps4.fuel === 0) {
    helicopter.style.backgroundImage = 'url(./resources/explosion.gnp)'
  }
}
// const helicopterColor = () => {
//   if (ps4.medevacStatus === true) {
//     helicopter.style.backgroundImage = 'url(./resources/helicopterRed.png'
//   } else {
//     helicopter.style.backgroundImage = 'url(./resources/helicopter.png'
//   }
// }

const refuel = () => {
  ps4.fuel = 100
}

// EVENT LISTENER
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 13:
      //enter
      if (helicopterCoordinates === 'y9x11') {
        refuel()
        console.log('refueled!')
      }
      break
    case 37:
      //left
      //turnLeft()
      moveLeft()
      checkReached()
      break
    case 38:
      //up
      moveUp()
      checkReached()
      break
    case 39:
      //right
      //turnRight()
      moveRight()
      checkReached()
      break
    case 40:
      //down
      moveDown()
      checkReached()
      break
  }
})

startButton.addEventListener('click', () => {
  genSendingHospital(hospitals)
  genReceivingHospital()
  startTimer()
})

restartButton.addEventListener('click', () => {
  resetTimer()
})
