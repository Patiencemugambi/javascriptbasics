// //block of code designed to perfom a certain task
// //are reusable
// //()
// //call function


////**********************function declaration
// function functionName(parameters){
//     //code block
// }
//calling the function
// functionName();

// example1
function greetings(guestname){//parameter
    console.log(`Hello ${guestname}`);//`` to 
    console.log("how are you today?");
}
let personName = "Patience Twiri"
greetings(personName)//argument 

function summation(a, b){
    let total = a + b;
    return total;
}

let sumtotal = summation(1, 2);
console.log(sumtotal);
let sumtotal2 = summation(4, 2);
console.log(sumtotal2);
let fintotal = summation(sumtotal, sumtotal2);
console.log(fintotal);




// // //******************function expression
// //syntax
// let functionName = function(){
//     //code block
// }

let greetingss = function(guestName){
    console.log(`Hello ${guestName}`);
}

greetingss('Hello Alice')

let gradingSystem = function(studentMarks){//variable to store the student marks

    if (studentMarks >=70 && studentMarks <=100){ //remember to add the equal to sign for the limits
        return "Congrats! you got an A"
    }
    else if (studentMarks >50 && studentMarks <=69){
        return "You got a B"
    }
    else if (studentMarks >1 && studentMarks <= 49){
        return " You got a C"
    }
    else if(studentMarks == 0){//if studentMarks is exactly zero
        return "You have failed"
    }
    else{
        return "Number out of range"
    }
}
    
    let student1 = gradingSystem(89)
    let student2 = gradingSystem(56)
    let student3 = gradingSystem(17)
    let student4 = gradingSystem(151)

    
    //to display the grade results as an array
    let classmarks = []    
    classmarks.push(student1)
    // console.log(classmarks)
    classmarks.push(student2)
    console.log(classmarks)






    // console.log(student1)
    // console.log(student2)
    // console.log(student3)
    // console.log(student4)

//store the grades

        

// ****************************arrow function

// // Syntax
// let functionName2 = () => {
//     //code block
// }

let greetingssss = (guestName) => {  //()to pass parameters
    console.log(`hello ${guestName}`);
    console.log("how are you today?");
    console.log('This is from arrow function')
}

greetingssss('Bro')



let summations = (a, b) => {
    let total = a + b;
        return total;

}

let sumtotal3 = summations(5, 2);
console.log(sumtotal3);



//*************anonymus function */