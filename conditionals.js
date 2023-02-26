let userChoice = prompt("heads or tails?");
randomNumber = Math.floor(Math.random() * 2);
computerChoice = ''; 

if (randomNumber == 0) {
    computerChoice = "heads";
}  else if (randomNumber == 1) {
    computerChoice = "tails";
}

if (userChoice == computerChoice) {
    window.alert("You guessed right! The coin flip landed on " + userChoice);
}   else if (userChoice) {
    window.alert("Sorry, the coin flip landed on " + computerChoice);
}


let birthYear = prompt("What year were you born?");
age = '2023' - birthYear;

if (age > 21) {
    window.alert("You are old enough to drink in the US");
} else if (age == 21) {
    window.alert("You are old enough to drink in the US...barely");
} else {
    window.alert("Sorry, you are not old enough to drink in the US");
}