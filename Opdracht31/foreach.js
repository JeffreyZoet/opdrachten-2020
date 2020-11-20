// Gebruik de forEach array method, om alle items in je array te loggen naar de console.


let colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach (element => console.log (element));



/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag? (4 en 5 regels)
Hoeveel regels neemt mijn forEach method in beslag? (2 regels)
Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? (Ik vind de array methode overzichtelijker, eenvoudiger, begrijpelijker en gestructureerder.)
Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object. Gedaan. Eerst converteren naar een array en dan de for of while loop toepassen.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren? (Ja)
*/

// https://zellwk.com/blog/looping-through-js-objects/

/* const person = {
    age: 56,
    name: 'Jef',
    birthplace: 'Arnhem',
    working: 'yes',
    sport: 'MTB',
}

//const keys = Object.keys (person);
// console.log (keys)

const keys = Object.keys (person);
for (const key of keys) {
    console.log (key)
} */

