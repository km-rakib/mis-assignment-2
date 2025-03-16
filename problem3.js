// 3.     
// Ask for three number from the user. Display max/greatest
// number in the console.

var num1 = parseFloat(prompt("Enter the frist number: "));
var num2 = parseFloat(prompt("Enter the second number: "));
var num3 = parseFloat(prompt("Enter the third number: "));

if(num1==num2 | num1 == num3 | num2 == num3){
  console.log("Two numbers are equal don't enter equal numbers!!")
}
else{
  if((num1>num2)&&(num1>num3)){
    console.log("First number you have entered is the gretest number which is :", num1);
  }
  else if((num2>num1)&&(num2>num3)){
    console.log("Second number you have entered is the gretest number which is :", num2);
  }
  else{
    console.log("Second number you have entered is the gretest number which is :", num3);
  }
}