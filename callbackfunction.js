// //
// function greetings(name, message) {
//     return `Hello ${name} you are ${message}`;
// }

// console.log(greetings('Patience', 'the best'));


//
// function todo(){
//     console.log('Today is Wednesday, check your calendar');
// }
// function greetings(name) {
//     todo();
//     console.log (`You have a meeting with ${name}`);
// }

// greetings('Alice');
///paramFunc = enables you to pass a function as a parameter

function todo(){
    console.log('Today is Wednesday, check your calendar');
}

function keshoDo(){
    console.log('Kesho is Thursday, call your boss.');
}

function greetings(name, paramFunc) {
    paramFunc();
    console.log (`You have a meeting with ${name}`);
}


greetings('Alice', todo);
console.log('Rauka Mapema');

greetings('Alvin', keshoDo);
console.log('Alvin hanaga story mob. Hakuna need ya kurauka mapema');




//***************************************/##Revision##
//Callback function is a function passed as an argument to another function.

function greetingscallback(name){
    console.log(`Heeeyyy brother ${name}.`);

}
greetingscallback ('Bernad')



//***************************************/##Needs revision##
let global =  'global'; //global variable can be accessed from anywhere

function watchmaker(){
let local = 'local';

function comment(){
let commentLocal = "commentLocal scope";

    console.log(`inside comment funct - ${commentLocal}`);
    console.log('commentLocal'+ commentLocal);

}

comment();
// console.log('commentLocal'+ commentLocal);


}

watchmaker();
