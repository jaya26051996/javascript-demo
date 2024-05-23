// Function Declaration
// function greet(name) {
//     return "Hello, " + name + "!";
//   }
//   console.log(greet("Alice")); // Output: Hello, Alice!


//   Function Expression
// const greet = function(name) {
//     return "Hello, " + name + "!";
//   };
  
//   console.log(greet("Bob")); // Output: Hello, Bob!

// //   Arrow Function
const greet = (name) => {
    return "Hello, " + name + "!";
  };
  
  console.log(greet("Charlie")); // Output: Hello, Charlie!

// //   Higher-Order Function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  repeat(3, console.log); // Output: 0 1 2

// //   Callback Function
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       callback(data);
//     }, 1000);
//   }
  
//   fetchData(data => {
//     console.log(data); // Output after 1 second: { name: 'John', age: 30 }
//   });

//   Recursive Function
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }
  
//   console.log(factorial(5)); // Output: 120
  
  