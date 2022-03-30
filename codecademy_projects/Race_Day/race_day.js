

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
let age = 20;

if (age >18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`${raceNumber}, you will race at 9:30`)
} else if (age > 18 && !registeredEarly) {
  console.log(`${raceNumber}, you will race at 11:00`)
} else if (age < 18) {
  console.log(`${raceNumber}, you will race at 12:30`)
} else {
  console.log('18 years old participants, please, see the registration desk.')
}