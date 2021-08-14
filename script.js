// Author: Lachlan Daly
// Date: 14/08/2021


// Function to generate the first randomised line of the message
generateFirstLine = () => {
    return 'first line';
}


// Function to generate the second randomised line of the message
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