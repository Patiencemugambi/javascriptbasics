// //   Loops 
// //    for loop: Executes a given number of times
// // for (variable; condition; increment){
//        // code block
// // }

// for(let i = 0; i <= 10; i+=2){
// console.log(`Go Home ${i}`)//Remember to use backticks
// }
// // if condition inside a for loop
// let steps = 20

// for(let i = 0; i <= steps; i++){
//     console.log(`Go straight along the road ${i}`)
//     if (i == 9){
//         console.log(`Turn Right`)
//     }
// }






// // - while loop: Executes until a certain condition is met

// // // syntax
// // while(condition){
// //     //code block here


// //     //NB increment at the end of the loop
// // }

// steps = 20//total number of steps
// let i = 0; //for incrementing

// while(i <= steps){
//     console.log(`Go straight along the road ${i}`)

//     if (i == 9){
//             console.log(`Turn Right and stop`)
//             break//can use break to terminate the loop
//         }
//     i++
// }

//for Each()
//syntax
// Array.forEach(callbackfunc)

let myArray = [1, 5, 7, 9, 10, 99, 788]
myArray.forEach((x) => 
    console.log(x)
)

//map

let updateMyArray = myArray.map((x) => x * 2);


//filter    
let alleven = myArray.filter((x) => {
    if (x % 2 === 0) {
      return x;
    }
  });

  

  let myStudents = ['John', 'Jane', 'Mutunga'];
  let fourLetters = myStudents.filter((word) => word.length === 4);
  console.log(fourLetters);
  

//reduce
let myArray2 = [1,5, 7, 9, 10, 99, 788]
let initvalue = 0;
const sumofmyArray2 = myArray2.reduce((prevValue, currValue) => prevValue + currValue)

console.log(sumofmyArray2)
