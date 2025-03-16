// 4.     
// Ask for total mark (out of 100) from the user.
// Calculate and display grade in the console as per IUB grading policy.

var sname = prompt("Enter student full-name : ");
var marks = parseFloat(prompt("Enter obtained marks : "));

if(marks>=90){
  console.log(sname, " You have got A");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade A"
}
else if(marks>=85){
  console.log(sname, " You have got A-");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade A-"
}
else if(marks>=80){
  console.log(sname, " You have got B+");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade B+"
}
else if(marks>=75){
  console.log(sname, " You have got B");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade B"
}
else if(marks>=70){
  console.log(sname, " You have got B-");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade B-"
}
else if(marks>=65){
  console.log(sname, " You have got C+");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade C+"
}
else if(marks>=60){
  console.log(sname, " You have got C");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade C"
}
else if(marks>=55){
  console.log(sname, " You have got C-");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade C-"
}
else if(marks>=50){
  console.log(sname, " You have got D+");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade D+"
}
else if(marks>=45){
  console.log(sname, " You have got D");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade D"
}
else{
  console.log(sname, " You have got F");
  document.getElementById("name").innerHTML = `Name : ${sname}`;
  document.getElementById("grade").innerText = "Grade F"
}