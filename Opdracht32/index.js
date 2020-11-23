/* Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam. 
"Welkom! Wat is je naam?"
Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.
Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]"
Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer. e.g: "Voer een nummer in van 0 tot 25 om te beginnen met raden..."
Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()
Als gebruiker wil ik een nummer in kunnen voeren en vervolgens op enter klikken.
Als gebruiker wil ik een bericht zien als ik het nummer verkeerd heb geraden e.g. "Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden.
Als gebruiker wil ik een bericht ontvangen als ik het nummer goed heb geraden. e.g: "Gefeliciteerd je hebt gewonnen". Het spel is nu af.
Als gebruiker wil ik een bericht zien als het spel af is. "e.g: Dag [naam]. Tot de volgende keer" */

alert('Welcome! What is your name?');
let name = prompt('Fill in your name');
alert('Hey ' + name);
let number = confirm('Enter a number from 0 to 25 to start guessing. But first we will give you two examples with random chosen numbers between 0 to 25 by the computer.');
let example1 = alert(Math.floor((Math.random() * 25) + 1));
let example2 = alert(Math.floor((Math.random() * 25) + 1));
let attempt1 = prompt('Now it is your turn, start guessing');
alert('That is not correct');
alert('You have 4 attempts left')
let attempt2 = prompt('Please guess again');
alert('That is not correct');
alert('You have 3 attempts left');
let attempt3 = prompt('Please guess again');
alert('That is not correct');
alert('You have 2 attempts left');
let attempt4 = prompt('Please guess again');
alert('That is not correct');
alert('You have only 1 attempts left. Good Luck!');
let attempt5 = prompt('Please guess again');
alert('That is correct');
alert('Congratulations you won. The game is now over.');
alert('Bye ' + name + ' , See you next time');

// Ik denk dat mijn oplossing te simpel is, maar ik zie graag hoe dit korter in functies te noteren is.
