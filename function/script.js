//define
function printHeart() {
    console.log("<3");
  }
  printHeart();

//return value
function multiply(a, b) {
    return a * b;
}  
console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));
  
//scope
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe();

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
  let deadlyAnimal = "Scorpionfish";
  console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal);

//arrow
const sayHello = (name) => `Hello ${name}!`;

console.log(sayHello("Hagrid"));
console.log(sayHello("Luna"));

  