// let a = 25;
//  a = 35;
// console.log("Age:", a);

// age = "ram";
// console.log("age",age);






// let fullname = "John Doe";
// console.log("fullname:", fullname);

// let isStudent = true;
// console.log("Is student:", isStudent);


// const birthYear = 1995;
// console.log("Birth year:", birthYear);

// const pi = 3.14159;
// console.log("PI:", pi);


// var city = "New York";
// console.log("City:", city);

// var temperature = 75;
// console.log("Temperature:", temperature);


// let a = 10;
// let b = 5;
// let sum = a + b; // sum is 15
// console.log("Sum:", sum);

// let greeting = "Hello, " + fullname; // greeting is "Hello, John Doe"
// console.log("Greeting:", greeting);

// let score = 100;
// console.log("Initial score:", score);

// score = 120; // Reassigning a new value to score
// console.log("Updated score:", score);

// const MAX_SCORE = 100;
// console.log("Max score:", MAX_SCORE);
// // MAX_SCORE = 120; // This will throw an error because constants cannot be reassigned


const readLine = require("readline").createInterface({

    input: process.stdin, //Handles the input stream
    
    output: process.stdout, // Handles the output stream
    
    });

    readLine.question("Where are you going ", (answer) => {

        console.log(answer); //Do something with the input entered by the user
        
        readLine.close(); //stop working on the input and end the stream.
        
        });
