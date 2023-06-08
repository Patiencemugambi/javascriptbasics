let myName = "Patience" //variable to store the name "Patience"
let myEmail = "patience@example.com"

console.log(myName);//Print the value of the variable
console.log(myEmail);

//If condition

// if (condition) {
//     // Code to be executed if the condition is true
// } 
// else {
//     // Code to be executed if the condition is false
// }
  
//Example1:

let blackLabel = false //variable to store the black label set to false
let redLabel = false
let gordons = true
let konyagi = true

//if - always true unless stated otherwise
if (blackLabel){//check if black label is set to true or false
    console.log("Niletee")//Print "Nilete"
}
else if (redLabel){//if black label is set to false, check if red label is set to true or false
    console.log("Niletee hiyo")//print "Niletee hiyo"
}
else if (gordons){
    console.log("Gordons iko sawa")
}
else{//If none of the conditions are true
    console.log("Acha niendee")//Print "Acha niendee"
}


//Example2:

//A -70 to 100
//B -50 to 69
//c -0 to 49
let studentMarks = 81;//variable to store the student marks

if (studentMarks >=70 && studentMarks <=100){ //remember to add the equal to sign for the limits
    console.log("Congrats! you got an A")
}
else if (studentMarks >50 && studentMarks <=69){
    console.log("B")
}
else if (studentMarks >1 && studentMarks <= 49){
    console.log("C")
}
else if(studentMarks == 0){//if studentMarks is exactly zero
    console.log("You have failed")
}
else{
    console.log("Number out of range")
}
