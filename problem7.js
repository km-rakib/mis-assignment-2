// 7.     
// Ask for one character from the user. (input can
// be: “A”, or “X”, or “P”, etc.). Check and display whether the input is a vowel
// or consonant. 

const char = prompt("Enter a single character:");
const charl = char.toLowerCase();
let result;

// Check if input is a single letter
if (charl.length !== 1 || !charl.match(/[a-z]/i)) {
    result = "Please enter a single letter";
} else {
    // Check if the character is a vowel
    if ('aeiou'.includes(charl)) {
        result = "Vowel";
    } else {
        result = "Consonant";
    }
}

// Display results using innerHTML
document.getElementById("charDisplay").innerHTML = `Character entered: ${char}`;
document.getElementById("resultDisplay").innerHTML = `Result: ${result}`;