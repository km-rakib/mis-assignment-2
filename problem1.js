// 1.     
// Ask for two numbers from the user. Display
// greater number in the console.

var num1 = parseFloat(prompt("Enter the first number: "));
var num2 = parseFloat(prompt("Enter the second number: "));
if(num1>num2){
  console.log(num1, " is the greater number");
}else{
  console.log(num2, " is the greater number");
}