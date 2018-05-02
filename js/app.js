// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hi, ' + userName + ', thanks for stopping by!');

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

var answer2 = prompt('Do you like music?');

if (answer2 === 'yes' || answer2 === 'y') {
    //user enjoys music
    alert('That is awesome, I am a D.J.');
    console.log('' + userName + 'enjoys music like J.');
} else { //user has no taste for music
    alert('' + userName + 'has no taste in music.');
    console.log('' + userName + ' needs a taste of reality')
}