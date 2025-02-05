// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)

// ====================
// RETURNING FUNCTIONS
// ====================


function testVirus() {
    let rand = Math.random();

    if (rand > 0.5) {
        return function () {
            console.log("No Virus Found.")
            console.log("Fucntion is good to go")
        }
    }
    else {
        return function () {
            alert("VIRUS DETECTED")
            alert("YOU HAVE BEEN INFECTED")
            alert("YOU HAVE BEEN INFECTED")
            alert("YOU HAVE BEEN INFECTED")
            alert("YOU HAVE BEEN INFECTED")
            alert("YOU HAVE BEEN INFECTED")
        }
    }
}


const mystery2 = testVirus();

function isBetween(num) {
    return num > 50 && num < 100;
}

function testBetweenFunc(min, max) {

}

function checkBetween(min, max) {
    return function (num) {
        return num > min && num < max
    }
}

const isChild = checkBetween(0, 18);
const isAdult = checkBetween(19, 64);
const isSenior = checkBetween(64, 150);










// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log("YOU WIN A MILLION DOLLARS!!")
//         }
//     } else {
//         return function () {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//         }
//     }
// }


// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }



