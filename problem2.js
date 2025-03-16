// 2.     
// Ask for age from the user, Display – whether he/she
// is eligible to cast vote or not. (note – age has to be at least 18 to exercise voting
// right)

var age = parseFloat(prompt("Enter your age: "));
if(age>=18){
  document.getElementById("vote").innerText = "You are eligable for vote";
  console.log("You are eligable for vote");
}else{
  document.getElementById("vote").innerText = "You are not eligable for vote";
  console.log("You are not eligable for vote");
}