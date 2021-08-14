// Author: Lachlan Daly
// Date: 14/08/2021
const names = [
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

const punchlines = [
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


// Function takes an array and boolean and returns an
// introduction to a knock knock jokes
// Expects an array of names without punctuation either side
generateIntroduction = (names) => {
    let introduction = "Knock Knock\nWho's there?\n";
    const randNum1 = generateRandomNumber(names.length);
    const randNum2 = generateRandomNumber(names.length);
    introduction += `${names[randNum1]}.\n${names[randNum2]} who?\n`;
    return introduction;
}

// returns name with who? tacked onto the end
generatePunchline = (punchlines) => {
    const randNum = generateRandomNumber(punchlines.length);
    let punchline = punchlines[randNum];
    return punchline;
}

// Function to generate a random integer between min and max
generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}


// This function uses helper functions to grab and display
// all three randomised sentences.
displayMessage = () => {
    const introduction = generateIntroduction(names);
    const punchline = generatePunchline(punchlines);
    const completeMessage = `${introduction}${punchline}`
    console.log(completeMessage);
}


displayMessage();