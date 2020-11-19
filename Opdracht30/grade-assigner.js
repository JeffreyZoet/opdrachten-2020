// Schrijf een for-loop die "iterate" van 60 tot 100. Dit is de "score" (grade) van de student.
// Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument.
// Console.log vervolgens: "Voor 91 punten, krijg je een A". 
// De uitkomst is 40 regels lang. 

// For loop


for (i=60; i <=100; i++){
    if (i > 90){
        console.log (i + ' points, you will get an A');
    }
    else if (i > 80) {
        console.log (i + ' points, you will get an B');
    } 
    else if (i > 70) {
        console.log (i + ' points, you will get an C');
    } 
    else if (i > 65) {
        console.log (i + ' points, you will get an D');
    } 
    else {
        console.log (i + ' points, you will get an F');
    } 
}








    
