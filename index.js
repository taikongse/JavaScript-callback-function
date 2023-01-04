/* 
A JavaScript callback function is a function that is passed as an argument to another function and is executed after the outer function has completed. Callback functions are a common pattern in JavaScript, and are often used to perform an action after an asynchronous operation has completed, such as an HTTP request or a DOM event.

In this example, the doSomething function is defined to take a callback function as an argument. It performs an asynchronous operation (in this case, using the setTimeout function to delay the execution of a function for a certain amount of time) and then calls the callback function when the operation is complete. The callback function is defined separately and simply logs a message to the console. When the doSomething function is called, it is passed the callback function as an argument, and the callback function is executed after the asynchronous operation has completed.

Callback functions are a powerful feature of JavaScript and are used extensively in many libraries and frameworks. They allow developers to build asynchronous, event-driven applications that can respond to changes in the environment in real-time.
*/



// Define a function that takes a callback function as an argument
function doSomething(callback) {
  // Perform some asynchronous operation
  setTimeout(() => {
    // When the operation is complete, call the callback function
    callback();
  }, 1000);
}

// Define the callback function
function callback() {
  console.log('The asynchronous operation has completed');
}

// Call the doSomething function and pass in the callback function
doSomething(callback);
