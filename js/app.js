// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hi, ' + username + ', thanks for stopping by!');

// log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
// user guess "yes/no or "Y/N"

// if (condition is true ){
//     do this stuff
// } else {
//     do this stuff
// }

if (answer1 === 'yes' || answer1 === 'y') {
    // right answer
    alert('You got it right!!!');
    console.log('The user got the correct answer to #1 (yes)');
} else {
    // wrong answer
    alert('Fail');
    console.log('The user got the wrong answer to #1 (no)');
}

// Tell user if they are wrong or right

// Next question