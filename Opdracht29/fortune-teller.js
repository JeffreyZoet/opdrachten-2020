// Write a function named tellFortune that
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const tellFortune = function (jobTitle, geographicLocation, partnersName, numbofChildren) {
    let outcome = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ' and married to '
        + partnersName + ' with ' + numbofChildren + ' kids. ';
    console.log(outcome);
};
tellFortune('taxidriver', 'London', 'Sarah', 2);
tellFortune('painter', 'Amsterdam', 'Eva', 3);
tellFortune('banker', 'Düsseldorf', 'Suzanne', 4);

