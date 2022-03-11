![PennStar4_Title](https://user-images.githubusercontent.com/62405537/156926460-98a5d0db-b513-4f5a-a999-6607ae753e11.png)

---

## Creation Date: 3/11/2022 1:30PM

---

[PennStar4 - The Game](https://pennstar4.surge.sh/index.html)

---

### By: Mark Kennedy

## [LinkedIn](https://www.linkedin.com/in/kennedymark680/) | [GitHub](https://github.com/kennedymark680/) | [Trello](https://trello.com/b/jEveFk44/pennstar4)

## Overview

A game to simulate the exciting experience of being an EMS helicopter pilot.

Prior to becoming a software engineer, I was a helicopter pilot flying for the University of Pennsylvania. The majority of the flying was conducting interfacility transfers between hospitals. The idea was to take the sickest patient from one hospital and transfer them to a higher level of care. This gameboard is an actual representation of hospitals and routes I used to fly on a regular basis.

If you click the "weather" button, the stations in the game will display real-time weather for each location. The stations will show green for good weather, blue for marginal, and red from poor weather.

I created 100% of the graphics you see in the game play.

---

## Game Play:

![PennStar4_map](https://user-images.githubusercontent.com/62405537/156926281-c0776728-51ab-48f0-b0fe-3d80e4fdcf4e.png)

To start the game press "Play!" and use the arrow keys for fly around the board.

The game will generate a sending hospital, the first one in which you fly indicated in white. Plus, your destination, the receiving hospital indicated in red.

Once, the sending is flown over you're now what we call "Medevac" status, meaning a patient is onboard. As fast as you can, fly to the receiving hospital indicated in red. Once you've completed the route, the patient is tallied and a new flight request is generated.

Don't forget to refuel along the way at your home base. Just press the 'F' button once over the pad. Pay attention to the time as it is limited. Time is of the essence!

For best game play experience, screen size should taller than wide.

---

## Proud Features

- Graphics
- Self generating board with unique ID's
- Real time weather through API use
- Helicopter movement using coordinate system
- Fuel and time incrementor
- Night Mode

### Hurdles Overcome

- Automating the creation of unique ID's for over 400 div's.
- Connecting to an API of real time weather, then modifying the game play depending on the results.
- Creating a function that runs through the hospital location array to change color dependant on the location of the helicopter.

---

## Steps to Creation

1. Create the board using grid.
2. Lable the indiviual squares.
3. Generate random hospitals.
4. Move the helicopter on the board.
5. Check to see if the helicopter is over the correct hospital.
6. Increase score.
7. Generate next round.
8. Style the webpage.
9. Create a second page for the instructions.

### Above and Beyond

1. Increment fuel.
2. API for the weather stations.
3. Sending and recieving hosptal.
4. Helicopter transitions through borders.

### MVP

1. Ability to move the helicopter on the board.
2. Generate random hospitals.
3. Know when the helicopter is over the hospital.
4. Increment the score.
5. Incorperate a timer.

---

## Future Versions

- Introduce different rounds
- Reduce time interval
- Increase quota
- Import sounds
- Have poor weather slow the helicopter
- Wide screen friendly

---
