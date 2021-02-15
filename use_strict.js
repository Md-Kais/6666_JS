// "use strict";
// *Why Strict Mode ?
//ans: 
//!  Strict mode makes it easier to write "secure" JavaScript.

//? Strict mode changes previously accepted "bad syntax" into real errors.

//todo As an example, in normal JavaScript, mistyping a variable name creates a new global variable.In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

//?  In normal JavaScript, a developer will not receive any error feedback assigning values to non - writable properties.

//! In strict mode, any assignment to a non - writable property, a getter - only property, a non - existing property, a non - existing variable, or a non - existing object, will throw an error.

let hello = 1;
let gello = 1;
console.log(hello,gello);
//deleting a declare object and function or variable or paremeter name is not allowed
//duplicating parameter name is not allowed
//cannot use var
//cannot declare 'this' as usual. this is only works for object
//

//don't use this.
//! use strict is not a joke, it's change ur brain. don't use it.