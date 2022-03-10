// -------------------- Variables -------------------
let startingTime = 60
let score = 0
let sqrXId = 0
let sqrYId = 0
let y = 9
let x = 11

const API_KEY = '3cd13131bf83490187e35126a6'

const startButton = document.querySelector('.startButton')
const restartButton = document.querySelector('.restartButton')
const displayedTime = document.querySelector('.time')
const scoreBoard = document.querySelector('.scoreBoard')
const fuelDisplay = document.querySelector('.fuel')
const patientDisplay = document.querySelector('.patients')
const fuelBoard = document.querySelector('.fuelBoard')
const weatherButton = document.querySelector('.weatherButton')
const timeBar = document.querySelector('.timeBar')

fuelDisplay.innerHTML = `Fuel: 100`
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

const wxAreaKPTW = [
  'y7x10',
  'y7x11',
  'y7x12',
  'y8x10',
  'y8x11',
  'y8x12',
  'y9x10',
  'y9x11',
  'y9x12'
]
const wxAreaKABE = ['y0x11', 'y0x12', 'y0x13', 'y1x11', 'y1x12', 'y1x13']
const wxAreaKPHL = [
  'y17x17',
  'y17x18',
  'y17x19',
  'y18x17',
  'y18x18',
  'y18x19',
  'y19x17',
  'y19x18',
  'y19x19'
]
const wxAreaKMQS = [
  'y12x3',
  'y12x4',
  'y12x5',
  'y13x3',
  'y13x4',
  'y13x5',
  'y14x3',
  'y14x4',
  'y14x5'
]
const wxAreaKRDG = [
  'y4x1',
  'y4x2',
  'y4x3',
  'y5x1',
  'y5x2',
  'y5x3',
  'y6x1',
  'y6x2',
  'y6x3'
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
if (y <= 0) {
  y = 20
}
const moveDown = () => {
  if (y >= 19) {
    y = -1
  }

  y += 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  checkReached()
  tallyFuel()
  if (ps4.fuel <= 0) {
    helicopter.style.backgroundImage = 'url(./resources/explosion.png)'
  } else if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRightRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
  }
}

const moveUp = () => {
  if (y <= 0) {
    y = 20
  }

  y -= 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  checkReached()
  tallyFuel()
  if (ps4.fuel <= 0) {
    helicopter.style.backgroundImage = 'url(./resources/explosion.png)'
  } else if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRightRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
  }
}

const moveRight = () => {
  if (x >= 19) {
    x = 1
  }
  x += 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  checkReached()
  tallyFuel()
  if (ps4.fuel <= 0) {
    helicopter.style.backgroundImage = 'url(./resources/explosion.png)'
  } else if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRightRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRight.png)'
  }
}

const moveLeft = () => {
  if (x <= 0) {
    x = 20
  }

  x -= 1
  ps4.fuel -= 1
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  helicopterCoordinates = `y${y}x${x}`
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)
  checkReached()
  tallyFuel()
  if (ps4.fuel <= 0) {
    helicopter.style.backgroundImage = 'url(./resources/explosion.png)'
  } else if (ps4.medevacStatus === true) {
    helicopter.style.backgroundImage = 'url(./resources/helicopterRed.png)'
  } else {
    helicopter.style.backgroundImage = 'url(./resources/helicopter.png)'
  }
}

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
    const select = document.querySelector(`#${array[i]}`)
    select.style.backgroundColor = 'yellow'
    select.style.opacity = '0.4'
  }
}

const timer = () => {}

const startTimer = () => {
  //stopTimer()
  interval = setInterval(function () {
    if (startingTime < 0) {
      clearInterval(interval)
      //UpdateGameMessage('times up')
    } else {
      displayedTime.innerHTML = `${startingTime}`
    }
    startingTime -= 1
    tallyTime()
  }, 1000)
}

const resetTimer = () => {
  startingTime = 60
  ps4.fuel = 100
  helicopterCoordinates = 'y9x11'
  y = 9
  x = 11
  helicopterDiv = document.querySelector(`#${helicopterCoordinates}`)
  helicopterDiv.appendChild(helicopter)

  for (let i = 0; i < receivingHospitalLocation.length; i++) {
    const select = document.querySelector(`#${receivingHospitalLocation[i]}`)
    select.style.backgroundColor = ''
    select.style.opacity = ''
    ps4.medevacStatus = false
  }

  for (let i = 0; i < activeHospitalLocation.length; i++) {
    const select = document.querySelector(`#${activeHospitalLocation[i]}`)
    select.style.backgroundColor = ''
    select.style.opacity = ''
    // helicopter.style.backgroundImage = 'url(./resources/helicopterRed.png'
    ps4.medevacStatus = false
  }

  while (patientDisplay.firstChild) {
    patientDisplay.removeChild(patientDisplay.firstChild)
  }

  helicopter.style.backgroundImage = 'url(./resources/helicopter.png)'
  displayedTime.innerHTML = `${startingTime}`
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  clearInterval(interval)
  genSendingHospital(hospitals)
  genReceivingHospital()
  startTimer()
  tallyFuel()
}

const checkReached = () => {
  activeHospitalLocation.forEach((latLog) => {
    if (helicopterCoordinates === latLog) {
      for (let i = 0; i < activeHospitalLocation.length; i++) {
        const select = document.querySelector(`#${activeHospitalLocation[i]}`)
        select.style.backgroundColor = ''
        select.style.opacity = ''
        ps4.medevacStatus = true
      }
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
        ps4.medevacStatus = false
      }
      genSendingHospital(hospitals)
      genReceivingHospital()
      score += 1
      scoreBoard.innerHTML = `${score}`
      tallyPatients()
    }
  })
}

const refuel = () => {
  ps4.fuel = 100
  fuelDisplay.innerHTML = `Fuel: ${ps4.fuel}`
  tallyFuel()
}

const tallyPatients = () => {
  const patient = document.createElement('div')
  patient.setAttribute('class', 'patient')
  patient.style.backgroundImage = 'url(./resources/patient.png)'
  patientDisplay.appendChild(patient)
}

const tallyFuel = () => {
  while (fuelBoard.firstChild) {
    fuelBoard.removeChild(fuelBoard.firstChild)
  }
  for (let i = 0; i < ps4.fuel; i++) {
    const fuelIcon = document.createElement('div')
    fuelIcon.setAttribute('class', 'fuelIcon')
    fuelIcon.style.backgroundColor = 'red'
    fuelBoard.appendChild(fuelIcon)
  }
}

const tallyTime = () => {
  while (timeBar.firstChild) {
    timeBar.removeChild(timeBar.firstChild)
  }
  for (let i = 0; i < startingTime; i++) {
    const timeIcon = document.createElement('div')
    timeIcon.setAttribute('class', 'timeIcon')
    timeIcon.style.backgroundColor = 'rgb(10, 119, 143)'
    timeBar.appendChild(timeIcon)
  }
}

const changeToTimer = () => {
  if (startingTime <= 0) {
    helicopter.style.backgroundImage = 'url(./resources/time.png)'
  }
}

// EVENT LISTENER
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 70:
      //enter
      if (helicopterCoordinates === 'y9x11') {
        refuel()
      }
      break
    case 37:
      //left
      changeToTimer()
      if (ps4.fuel > 0 && startingTime > -1) {
        moveLeft()
      }
      break
    case 38:
      //up
      changeToTimer()
      if (ps4.fuel > 0 && startingTime > -1) {
        moveUp()
      }
      break
    case 39:
      //right
      changeToTimer()
      if (ps4.fuel > 0 && startingTime > -1) {
        moveRight()
      }
      break
    case 40:
      //down
      changeToTimer()
      if (ps4.fuel > 0 && startingTime > -1) {
        moveDown()
      }

      break
  }
})

startButton.addEventListener('click', () => {
  genSendingHospital(hospitals)
  genReceivingHospital()
  startTimer()
  tallyFuel()
})

restartButton.addEventListener('click', () => {
  resetTimer()
})

weatherButton.addEventListener('click', async () => {
  const responseKPTW = await axios.get(
    `https://api.checkwx.com/metar/KPTW/decoded?x-api-key=${API_KEY}`
  )

  const responseKABE = await axios.get(
    `https://api.checkwx.com/metar/KABE/decoded?x-api-key=${API_KEY}`
  )

  const responseKPHL = await axios.get(
    `https://api.checkwx.com/metar/KPHL/decoded?x-api-key=${API_KEY}`
  )

  const responseKMQS = await axios.get(
    `https://api.checkwx.com/metar/KMQS/decoded?x-api-key=${API_KEY}`
  )

  const responseKRDG = await axios.get(
    `https://api.checkwx.com/metar/KRDG/decoded?x-api-key=${API_KEY}`
  )

  const kptw = responseKPTW.data.data[0].flight_category
  const kabe = responseKABE.data.data[0].flight_category
  const kphl = responseKPHL.data.data[0].flight_category
  const kmqs = responseKMQS.data.data[0].flight_category
  const krdg = responseKRDG.data.data[0].flight_category

  const showWX = (station, condition) => {
    for (let i = 0; i < station.length; i++) {
      const select = document.querySelector(`#${station[i]}`)
      select.classList.add('weather')
      if (condition === 'VFR') {
        select.style.backgroundColor = 'green'
        select.style.opacity = '0.1'
      } else if (condition === 'MVFR') {
        select.style.backgroundColor = 'blue'
        select.style.opacity = '0.1'
      } else {
        select.style.backgroundColor = 'red'
        select.style.opacity = '0.1'
      }
    }
  }

  showWX(wxAreaKPTW, kptw)
  showWX(wxAreaKABE, kabe)
  showWX(wxAreaKPHL, kphl)
  showWX(wxAreaKMQS, kmqs)
  showWX(wxAreaKRDG, krdg)
})
