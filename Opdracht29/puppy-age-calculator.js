// Write a function named calculateDogAge that
// Takes 1 argument: your puppy's age.
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

const calculateDogAge = function (puppysAge, humanAge) {
    let doghisage = 7 * puppysAge;
    let ageHuman = 1 / 7;
    console.log('Your doggie is ' + doghisage + ' years old in dog years! ' + ' and ' + ageHuman + ' in human years ')
};
calculateDogAge(2);
calculateDogAge(1);
calculateDogAge(2.5);
calculateDogAge(0.5, 7);

