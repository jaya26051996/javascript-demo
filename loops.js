// for (let i = 0; i < 5; i++) {
//     console.log("Iteration " + i);
// }



// let i = 0;

// while (i < 5) {
//     console.log("Iteration for while " + i);
//     i++;
// }


// let i = 0;

// do {
//     console.log("Iteration " + i);
//     i++;
// } while (i < 5);



// let numbers = [10, 31, 30, 40, 59];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i], "is even.");
//   } else {
//     console.log(numbers[i], "is odd.");
//   }
// }



// let person = {
//     name: "Alice",
//     age: 30,
//     city: "New York"
//   };
  
//   for (let key in person) {
//     console.log(key);
//     console.log(person[key]); // Access value using bracket notation
//   }



  let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}


let a=[{
    name:"Alice",
    age:30
},
{
    name:"Bob",
    age:32
}]







// let product = {
//     id: 123,
//     name: "T-Shirt",
//     price: 19.99,
//     discount: 0.1 // 10% discount
//   };
  
//   for (let key in product) {
//     if (key !== "id") { // Skip the 'id' property
//       product[key] *= (1 - product.discount); // Apply discount
//     }
//   }
  
//   console.log(product); // Output: { id: 123, name: "T-Shirt", price: 17.991, discount: 0.1 }




  
//   let numbers = [2, 4, 6, 8];
// let sum = 0;

// for (let number of numbers) {
//   sum += number;
// }

// console.log("The sum is:", sum); // Output: The sum is: 20

