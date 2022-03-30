
// today's forecast in Kelvin
const kelvin = 293
// Kelvin converted to Celsius
let celsius = kelvin - 273
// calculate to Fahrenheit and round down
let fahrenheit = Math.floor(celsius * (9/5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} degrees Newton.`)