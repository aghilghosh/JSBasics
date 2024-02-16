// IIFE: Imeediately Invoked Function Expression
// These are anonymous functions which are invoked immediately after definition. 
// The variables inside IIFE is private and cannot be used ouside the function expression

(function(){
    var y=0;
    console.log("I'm an immediately invoked function expression")
})();

// console.log(y);

// // Syntax
// (function(){})();