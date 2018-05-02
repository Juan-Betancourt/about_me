// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hi ' + userName + ', thanks for stopping by!');

// log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question (Question 1)
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
    alert('Unfortunately, I do');
    console.log('The user got the wrong answer to #1 (no)');
}
// Tell user if they are wrong or right

// Next question (Question 2)

var answer2 = prompt('Do you like music?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y') {
    //user enjoys music
    alert('That is awesome, I am a D.J. and I love music too!');
    console.log('' + userName + ' enjoys music like J.');
} else { //user has no taste for music
    alert('' + userName + ' has no taste in music.');
    console.log('' + userName + ' needs a taste of reality');
}

// Next question (question 3)

var answer3 = prompt('Do you enjoy vacations?').toLowerCase();

if (answer3 === 'yes' || answer3 === 'y') {
    //user enjoys going on vacations
    alert('You rock! I am looking forward to my next vacation (Jamaica)');
    console.log('' + userName + ', loves going on vacation.');
} else { //user hates going on vacation
    alert('' + userName + '! you need to get out more.');
    console.log('' + userName + ' hates the world.');
}

// Next question (question 4)

var answer4 = prompt('Do you enjoy playing board games?').toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
    //user enjoys board games
    alert('I also enjoy board games ' + userName + '');
    console.log('' + userName + ', make like the game Pandemic.');
} else { //okay this user does not get out much. lol
    alert('' + userName + ', you should give it a try because board games are great.');
    console.log('' + userName + ' really hates the world.');
}

// Next question (question 5)

var answer5 = prompt('I am guessing that you had enough of these questions?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
    //user has had enough
    alert('sorry, I just wanted you to get to know me a little more');
    console.log('' + userName + ', has had enough of this.');
} else { //what is wrong with this user
    alert('' + userName + ', thanks for getting to know me but we have reached the end with questions.');
    console.log('' + userName + 'loves the question game.');
}