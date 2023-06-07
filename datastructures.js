// arrays
// [] are used to store arrays
let myFriends = ['alice', 'Kimberly', 'Bob']; // Quotes for characters since they are strings
            // index 0     index 1      index 2   Index is used to locate the characters in the array

console.log(myFriends[1]); // Accessing and printing the element at index 1 (Kimberly)
console.log(myFriends); // Printing the entire array
console.log(myFriends.length); // Printing the length of the array

// Adding elements to the array
myFriends.push('Patience'); // Adding 'Patience' to the end of the array
console.log(myFriends);

// Removing the last element from the array
console.log(myFriends.pop()); // Removing and printing the last element of the array ('Patience')

// Objects
// Syntax:
// {
//     key: value,
// }

let person = {
    fname: 'alice',
    email: 'alice@gmail.com',
    age: 30,
    favoriteColor: 'blue',
    hobbies: ['coding', 'reading', 'singing'] // An array as a value
};

let personName = person.fname; // Accessing the value of the 'fname' key and assigning it to personName
console.log(personName);

person['fname'] = "Willie"; // Modifying the value of the 'fname' key to "Willie"
person.Name = person.fname; // Creating a new property 'Name' and assigning the value of 'fname' to it
console.log(person.Name);
