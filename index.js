const prompt = require('prompt-sync')()

console.log("Welcome to Mini Golf")
console.log("This game is going to consist on how fast the ball will go depending on how hard you hit it.")
let start = prompt("would you like to play the game yes/no?:")
if (start === "yes"){
  console.log("Thank you!")
} else {
  console.log("Okey?????, Welcome in I guess.")
  console.log("Guess people don't follow the simple direction of just writing `Yes`.")
}
let player =[
  
]
let holes=[22,58,89,110,170,199,208,233,285,309,353]

if (holes[number]){
  console.log("Great the total distance you hit the ball was about " + holes[number], " feet")
}else{
  console.log("That's not one of the numbers you have to select from.")
}
console.log("Let's try again and see how far you hit it.")
number = prompt("Enter a number between 0-10: ")
number = parseInt(number)
while (number >= 0){
  console.log("Great the total distance you hit the ball was about " + holes[number], " feet")
  number = -1
  console.log("Let's try again and see how far you hit it.")
  number = prompt("Enter a number between 0-10: ")
  number = parseInt(number)
    console.log("Great the total distance you hit the ball was about " + holes[number], " feet")
  number = -1
  console.log("Thank You For Playing!!!!")
}