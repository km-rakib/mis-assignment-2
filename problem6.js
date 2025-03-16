// 6.     
// Ask for  temperature in centigrade and display a
// suitable message according to the temperature state below:

// Temp < 0 then Freezing weather

// Temp 0-10 then Very Cold weather

// Temp 10-20 then Cold weather

// Temp 20-30 then Normal in Temp

// Temp 30-40 then Its Hot

// Temp >=40 then Its Very Hot

const temperature = parseFloat(prompt("Enter temperature in centigrade:"));
let message;

if (temperature < 0) {
    message = "Freezing weather";
} else if (temperature >= 0 && temperature <= 10) {
    message = "Very Cold weather";
} else if (temperature > 10 && temperature <= 20) {
    message = "Cold weather";
} else if (temperature > 20 && temperature <= 30) {
    message = "Normal in Temp";
} else if (temperature > 30 && temperature <= 40) {
    message = "Its Hot";
} else {
    message = "Its Very Hot";
}

// Display results using innerHTML
document.getElementById("tempDisplay").innerHTML = `Temperature: ${temperature}°C`;
document.getElementById("messageDisplay").innerHTML = `Weather Status: ${message}`;