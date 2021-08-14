// Author: Lachlan Daly
// Date: 14/08/2021
const KNOCK = "Knock, Knock";;
const WHO = "Who's there?";
const name = [
    "Nobel", 
    "Tank",
    "Luke",
    "Figs",
    "Annie",
    "Cow says",
    "Hal",
    "Alice",
    "Says",
    "Honey bee",
    "A little old lady",
    "Euripides",
    "Snow",
    "Hawaii",
    "Woo"
];

const punchline = [
    "Nobel... that's why I knocked.", 
    "You're welcome.",
    "Luke through the peep hole and find out.",
    "Figs the doorbell, it’s not working!",
    "Annie thing you can do, I can do too!",
    "No, a cow says mooooo!",
    "Hal will you know if you don’t open the door?",
    "Alice fair in love and war.",
    "Says me!",
    "Honey bee a dear and get that for me please!",
    "Hey, you can yodel!",
    "Euripides clothes, you pay for them!",
    "Snow use. The joke is over.",
    "I’m good. Hawaii you?",
    "Glad you’re excited, too!"
];


// Function to generate the first randomised line of the message
generateFirstLine = () => {
    return 'first line';
}


// returns name with who? tacked onto the end
generateSecondLine = () => {
    return 'second line';
}


// Function to generate the third randomised line of the message
generateThirdLine = () => {
    return 'third line';
}


// Function to generate a random integer between min and max
generateRandomNumber = (min, max) => {
    return 1;
}


// This function uses helper functions to grab and display
// all three randomised sentences.
displayMessage = () => {
    const firstMessage = generateFirstLine();
    const secondMessage = generateSecondLine();
    const thirdMessage = generateThirdLine();
    const completeMessage = `${firstMessage} ${secondMessage} ${thirdMessage}`
    console.log(completeMessage);
}


displayMessage();