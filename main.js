// const firstName = 'Derek';
// const lastName = 'Malone';
const favFood = 'sushi';
// let favNumber = 1;
// const likesToRead = true;

// favNumber += 3;

// console.log(favNumber);



const whatFoodDoILike = () => {
    if (favFood === 'hot dogs' || favFood === 'Sushi') {
        console.log(`You like ${favFood}!`);
    } else {
        console.log(`you like something else!`);
    }
}

const myFunction = (str) => {
    console.log(`Your argument was: ${str}`);
}

myFunction('Foolish!')