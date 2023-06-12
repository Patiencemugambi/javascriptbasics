// // alert("working");
// let userName = document.getElementById("userName")
// let phoneNumber = document.getElementById("phoneNumber")
// let password = document.getElementById("password")   //.value ////use value to get the value of the password field
// let submitBtn = document.getElementById("submit")
// let storage = document.getElementById("storage")


// //arguments for eventlistener, click event, mouse hover
// submitBtn.addEventListener("click", function(){
//     //code to be executed
//    let userName = document.getElementById('username').value
//    let phoneNumber = document.getElementById('phonenumber').value
//    let password = document.getElementById('password').value

//    console.log(userName)
//    console.log(phoneNumber)
//    console.log(password)


//    storage.innerHTML = '<p>p</p>'


// })

//change bg color
let changeColor = document.getElementById('changeColor')

changeColor.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});