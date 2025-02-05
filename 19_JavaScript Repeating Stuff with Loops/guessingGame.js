let maximum = parseInt(prompt("Enter the maximum number you want to play with"));

while (!maximum) {
    maximum = parseInt(prompt("You must enter an integer"))

}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);


let guess = parseInt(prompt("Enter your guess. Type 'q' to quit."));
count = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q')
        break;
    count++;
    if (guess < targetNum) {
        guess = (prompt("Too low! Enter a new guess. Type 'q' to quit."))
    }
    else {
        guess = (prompt("Too high! Enter a new guess. Type 'q' to quit."))
    }
}

if (guess === 'q') {
    console.log('quit')
}
else {
    console.log(`YOU GOT IT! It took you ${count} guesses`)
}