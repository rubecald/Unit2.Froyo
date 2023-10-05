// 

// prompts the user to input froyo flavors
const userInputString = prompt(
    "Please enter some froyo flavors :D",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
)

const flavors = userInputString.split(",");
// console.log(userInputString)

// creates an object and goes through the flavors + updates the counts
const flavorCount = {};

for (const flavor of flavors) {
    if(flavorCount.hasOwnProperty(flavor)) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
    }
    
    // gives us the flavor counts(for some reason lists vanilla twice)
    for (const flavor in flavorCount) {
        if(flavorCount.hasOwnProperty(flavor)) {
            console.log(`You entered "${flavor}" ${flavorCount[flavor]} time(s).`);
        } 
    }