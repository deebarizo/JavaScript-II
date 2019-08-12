// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const hello = console.log("Hello!");
function sayHello() {
  return hello;
}
sayHello();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return increment;

  function increment() {
    count++;
    return count;
  }
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();
console.log("newCounter():", newCounter());
console.log("newCounter():", newCounter());
console.log("newCounter():", newCounter());
console.log("newCounter():", newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => {
      count++;
      return count;
    },

    decrement: () => {
      count--;
      return count;
    }
  };
};

const newCounterFactory = counterFactory();
console.log("newCounterFactory.increment():", newCounterFactory.increment());
console.log("newCounterFactory.increment():", newCounterFactory.increment());
console.log("newCounterFactory.decrement():", newCounterFactory.decrement());
