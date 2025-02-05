// ===================
// ARRAY DESTRUCTURING
// ===================
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

const raceResults = ["Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp"];

const [winner, runner_up, second_runner_up] = raceResults;

const [fasest, ...otherRacers] = raceResults;


// ===================
// OBJECT DESTRUCTURING
// ===================
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died = 'N/A' } = user2;

// ===================
// PARAM DESTRUCTURING
// ===================

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }


function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984,
        starring: 'Mozart'
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013,
        starring: 'Baby Shark'
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004,
        starring: 'Jennifer Gardner'
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986,
        starring: 'Orlando Bloom'
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995,
        starring: 'Michael Myers'
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996,
        starring: 'Arnold Schwarz'
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019,
        starring: 'Javier Bardem'
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999,
        starring: 'Johnny Depp'
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979,
        starring: 'Martian'
    }
]


// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)


// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

const star = movies.map(({ title, starring }) => {
    return `${title} is a movie starring ${starring} `
})
