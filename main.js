var userName ='Bryan'; 

if (userName == '') {
}else console.log(`Hello ${userName}!`)

var userQuestion = "Will I be a great JavaScript developer?"

console.log(userQuestion)

var randomNumber = Math.floor(Math.random()*8)

var eightBall = '';

if (randomNumber === 0){
    var eightBall = 'It is certain'
} else if (randomNumber === 1){
    var eightBall = 'It is decidely so'
}
else if (randomNumber === 2){
    var eightBall = 'Reply hazy try again'
}
else if (randomNumber === 3){
    var eightBall = 'Cannot predict now'
}
else if (randomNumber === 4){
    var eightBall = 'Do not count on it'
}
else if (randomNumber === 5){
    var eightBall = 'My sources say no'
}
else if (randomNumber === 6){
    var eightBall = 'Outlook not so good'
}
else if (randomNumber === 7){
    var eightBall = 'Signs point to yes'
}

console.log(eightBall)
