// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

const calculateSupply = function (age, amountperDay) {
    let maxAge = 75 - age;
    let consumed = (amountperDay * 365) * maxAge;
    console.log('You will need ' + consumed + ' slices of bread ' + ' to last you until the ripe old age of ' + maxAge);
};
calculateSupply(5, 20);
calculateSupply(25, 10);
calculateSupply(45, 10);
















