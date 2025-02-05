function sing() {
    console.log("DO")
    console.log("RE")
    console.log("MEEE")
}

function greet(firstName, lastName) {
    console.log(`first name is: ${firstName}`)
    console.log(`last name is: ${lastName}`)
}


function greeting(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeatMsg(msg, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += msg;
    }
    console.log(result);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function snakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!")
    }
    else { console.log("Not Snake Eyes!") }
}





// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }



// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

