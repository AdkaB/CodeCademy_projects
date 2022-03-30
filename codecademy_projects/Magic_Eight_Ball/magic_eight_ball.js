

let userName = 'Adka';

userName ? console.log(`Hello ${userName}.`) : console.log('Hello!');

let userQuestion = 'Will I be a milionaire?';

console.log(`${userName}, you asked this question: ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8 + 1)
let eightBall = ''

console.log(`The number is: ${randomNumber}.`)

if (randomNumber === 1) {
  eightBall = 'It is certain.'
} else if (randomNumber === 2) {
  eightBall = 'It is decidedly so.'
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again.'
} else if (randomNumber === 4) {
  eightBall = 'Cannot predict now.'
} else if (randomNumber === 5) {
  eightBall = 'Do not count on it.'
} else if (randomNumber === 6) {
  eightBall = 'My sources say no.'
} else if (randomNumber === 7) {
  eightBall = 'Outlook not so good.'
} else if (randomNumber === 8) {
  eightBall = 'Signs point to yes.'
} else {
  console.log('There is some error.')
}
console.log(eightBall)

switch (randomNumber) {
  case 1 :
  eightBall = 'It is certain.';
  break;
  case 2 :
  eightBall = 'It is decidedly so';
  break;
  case 3 :
  eightBall = 'Reply hazy try again';
  break;
  case 4 :
  eightBall = 'Cannot predict now';
  break;
  case 5 :
  eightBall = 'Do not count on it';
  break;
  case 6 :
  eightBall = 'My resources say no';
  break;
  case 7 :
  eightBall = 'Outlook not so good';
  break;
  case 8 :
  eightBall = 'Signs point to yes';
  break;
}

console.log(eightBall)