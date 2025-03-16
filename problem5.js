// 5.     
// Ask for – Name, Total Tuition Fees & Birth
// year from the user. Calculate and display total discount amount as per the
// following rules:

// If total T. Fees is more than 50000 and age
// is above 21, apply 15% discount.

// If total T. Fees is more than 40000 and age
// is above 20, apply 10% discount.

// If total T. Fees is more than 30000 and age
// is above19, apply 5% discount.

// Otherwise, apply 2% discount.

// Display – discount amount and payable
// tuition fees mentioning Name of the user

const name = prompt("Please enter your name:");
const tuitionFees = parseFloat(prompt("Enter total tuition fees:"));
const birthYear = parseInt(prompt("Enter your birth year:"));

const currentYear = 2025;
const age = currentYear - birthYear;

let discountPercentage;

if (tuitionFees > 50000 && age > 21) {
    discountPercentage = 15;
} else if (tuitionFees > 40000 && age > 20) {
    discountPercentage = 10;
} else if (tuitionFees > 30000 && age > 19) {
    discountPercentage = 5;
} else {
    discountPercentage = 2;
}

const discountAmount = (tuitionFees * discountPercentage) / 100;
const payableFees = tuitionFees - discountAmount;

// Display results using innerHTML
document.getElementById("nameDisplay").innerHTML = `Name : ${name}`;
document.getElementById("discountDisplay").innerHTML = `Your discount amount: $${discountAmount.toFixed(2)} (${discountPercentage}% discount applied)`;
document.getElementById("payableDisplay").innerHTML = `Payable tuition fees: $${payableFees.toFixed(2)}`;
