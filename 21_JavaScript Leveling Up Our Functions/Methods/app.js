const myMathMethods = {
    PI: 3.14159,
    square: function (num) {
        return num ** 2;
    },
    cube: function (num) {
        return num ** 3;
    },
    divideBy10(num) { //shorhand way of writing same thing- no ': function' needed //
        return num / 10
    }
}








// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log("THIS IS:", this)
//         console.log(`${this.name} says MEOWWWW`);
//     }
// }

// const meow2 = cat.meow;