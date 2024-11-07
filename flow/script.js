// function printChorus() {
//     for (let i = 0; i < 6; i++) {
//         console.log("Da ba dee da ba daa");
//     }
// }

// function countdown() {
//     for (let i = 25; i >= 0; i -= 5) {
//         console.log(i);
//     }
// }

// function printPeopleInUpperCase() {
//     const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
//     for (let person of people) {
//         console.log(person.toUpperCase());
//     }
// }

// console.log("1. Chorus Lyrics:");
// printChorus();

// console.log("\n2. Countdown:");
// countdown();

// console.log("\n3. People in Uppercase:");
// printPeopleInUpperCase();

try {
    let num = 5;
    num.toUpperCase();
} catch (error) {
    console.log('An error occurred: ' + error.message);
    throw new Error('There was an error processing your request.');
}
