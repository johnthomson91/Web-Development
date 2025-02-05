const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums) //NaN
Math.max(...nums) //53456


// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs, 'Leo', 'Yogi', 'Gracie'];



// SPREAD IN OBJECTS

let feline = { legs: 4, family: 'Felidae' };
let canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
const lion = { ...feline, isPet: false, genus: 'Panthera' };

const catDog = { ...feline, ...canine };

const dataForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataForm, id: 8416, isAdmin: false };

