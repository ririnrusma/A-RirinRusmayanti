
// function myFirst() {
//     myDisplayer("Goodbye");
// }

// function mySecond(callback) {
//     myDisplayer("Hello");
//     callback();
// }

// function myDisplayer(message) {
//     console.log(message);
// }

// mySecond(myFirst);

// console.log("paragraf 1");
// setTimeout(() =>{
//     console.log("paragraf 2");
// }, 4000)
// console.log("paragraf 3");
// console.log("paragraf 4");
// console.log("paragraf 5");

function setTime(){
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime, 2000);
console.log("finish")

// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(2, 3));
// console.log(multiply(9, 9));
// console.log(multiply(5, 4));


// const sayHello = name => `Hello ${name}!`;

// console.log(sayHello("Ahmad"));
// console.log(sayHello("Dani"));

// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
//   }
//   setInterval(setTime, 1000);
//   console.log("Program Finish");