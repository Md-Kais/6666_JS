# All Fundamentals About JavaScript



# Born of this Unique Piece of Language

                                JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape.JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called LiveScript.

Several months later, Microsoft released JScript with Internet Explorer 3. It was a mostly-compatible JavaScript work-alike. 

Several months after that, Netscape submitted JavaScript to Ecma International, a European standards organization, which resulted in the first edition of the ECMAScript standard that year. The standard received a significant update as ECMAScript edition 3 in 1999, and it has stayed pretty much stable ever since. The fourth edition was abandoned, due to political differences concerning language complexity. Many parts of the fourth edition formed the basis for ECMAScript edition 5, published in December of 2009, and for the 6th major edition of the standard, published in June of 2015.

---

# What is JavaScript?

1.JavaScript is a multi-paradigm , dynamic language with types and operators,standard built-in-objects and methods.

2. Its syntax is based on the Java and C language. 

3. JavaScript supports object-oriented programming with object prototypes, instead of classes.

4. JavaScript also support functional programming.

---

# Data types of JavaScript

- Number
- String
- Boolean
- Symbol( start it's journey in ECMA version 6)
- Object
    - Function
    - Array
    - Date
    - Regular Expression( RegExp )
- null
- undefined
- Error

---

## Primitive data types:

 

- string
- number
- bigint
- boolean
- undefined
- symbol,
- null.

---

# Number

- Number is a primitive wrapper object.
- The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value
- A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding
- The largest value a Number can hold is about 1.8×10308.
- Number may also be expressed in literal forms like 0b101, 0o13, 0x0A.

---

## Numeric literals

- Decimal:
    - Number(333)⇒333;
    - But if you start a number with 0 .then it's take as a octal number. Number(0777)⇒511(take 0777 as a octal number)
- Exponential:
    - The decimal exponential literal is specified by the following format: beN; where b is a base number (integer or floating), followed by e char (which serves as separator or exponent indicator) and N, which is exponent or power number – a signed integer
    - Example:

    ```jsx
    0e-5   // => 0
    0e+5   // => 0
    Number(23e3)⇒23000
    Number(43e-1)⇒4.3
    ```

- Binary :
    - Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B).

    Example:

```jsx
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

- Octal:
    - Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (0o or 0O).

    Example:

    ```jsx
    var n = 0O755; // 493
    var m = 0o644; // 420

    // Also possible with just a leading zero (see note about decimals above)
    0755
    0644
    ```

- Hexadecimal:
    - Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X).
    - Example:

```jsx
Number(0x5555)
21845
Number(0X2324)
8996
```

 

- BigInt:
- BigInt literals are created by appending n to the end of an integer.

```jsx
Number(1212312314124123421341234n)
1.2123123141241233e+24
Number(0x212312314124123421341234n)
1.0255403638971947e+28
```

---

## Some extra about Number:

[//max](//max) value : (2^53 -1)

[//min](//min) value: (-(2^53 - 1)).

---

## Static Methods:

## 1. Number.isNaN():

return true or false or undefined. Checks that the input is Not a Number or Number. NaN ⇒ Not a Number.

```jsx
//the true valus of This process:
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

//false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
**Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

//undefined:
console.log(typeOfNaN(Number('0x100F')**

```

 

## Polyfill:

```jsx
Number.isNaN = Number.isNaN || function isNaN(input) {
    return typeof input === 'number' && input !== input;
}                
```

## 2.Number.parseFloat(input):

The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

```jsx
parseFloat({ toString: function() { return "3.14" } }); //3.14
parseFloat('3.14some non-digit characters');//(3.14)

parseFloat('432134214343chara213424234324234cters');
//432134214343
parseFloat('3.14');
//3.14
parseFloat('314e-2');
//3.14
parseFloat(3.14);//3.14

parseFloat('FF2');
NaN
```

## 3.Number.parseInt():

[//it](//it) has basic 2 parts: 1. string and the other one is 2. radix.

it has it's own unique approach

```jsx
parseInt(string)
parseInt(string, radix)
//radix  must be between 2 to 36
//if the string startswith 0 and dont provide any other information . then radix doesnot work.it's basically work for octal notation

//radix is work for as a base.
```

---

## Instance Methods:

  

## 1. Number.prototype.toExponential(fractionDigits):

it gives how many fractional number we put after floating point number.

```jsx
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
console.log(expo(123456, 2));
// expected output: "1.23e+5"//
console.log(expo(123456, 6));// "1.234560e+5"
console.log(expo('123456'));
// expected output: "1.23456e+5"

console.log(expo('oink'));
// expected output: "NaN"
```

## 2. Number.prototype.toLocaleString()

```jsx
function eArabic(x){
  return x.toLocaleString('bn-EG');
}

console.log(eArabic(123456.789));
// expected output: "১,২৩,৪৫৬.৭৮৯"

console.log(eArabic('123456.789'));
// expected output: "123456.789"

console.log(eArabic(NaN));
// expected output: "ليس رقم"
```

## 3.Number.prototype.toFixed()

toFixed(digit)→ gives how many number are there after floating point

toFixed()→works as a parseInt();

```jsx
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// expected output: "123.46"

console.log(Number.parseFloat(123.34321421341234).toFixed());
//123

console.log(financial(0.004));
// expected output: "0.00"

console.log(financial('1.23e+5'));
// expected output: "123000.00"

```

---

# Math Operator(build a secondary calculator

---

## 1.Math.floor()

It Returns the largest integer less than or equal to x.

```jsx
console.log(Math.floor(123.12123));//123
console.log(Math.floor(123.9667876));//123
```

## 2.Math.abs()

Returns the absolute value of x.

```jsx
console.log(Math.abs(-1312312))//1312312
```

## 3.Math.ceil()

Returns the smallest integer greater than or equal to x.

```jsx
console.log(Math.ceil(123.9667876));//124
```

## 4.Math.sqrt()

Returns the positive square root of x.

```jsx
console.log(Math.sqrt(25));//5
```

## 5.Math.pow(x,y)

Returns base x to the exponent power y (that is, x^y).

```jsx
console.log(Math.pow(5,2));//25
```

## 6.Math.random()

Returns a pseudo-random number between 0 and 1.

```jsx
console.log(Math.random());//0.696969696969
```

## 7.Math.round()

Returns the value of the number x rounded to the nearest integer.

```jsx
console.log(Math.round(1.3423423));//1
console.log(Math.round(1.5423423));//2
```

## 8.Math.min([x,[,y,....]]])

Returns the smallest of zero or more numbers.

```jsx
console.log(Math.max(8,914,12341234,12,321434,23434,342134))//8
```

## 9.Math.max([x[, y[, …]]])

Returns the largest of zero or more numbers.

```jsx
console.log(Math.max(8,914,12341234,12,321434,23434,342134))//12341234
```

## 10.Math.cbrt()

Returns the cube root of x.

```jsx
console.log(Math.cbrt(64));//4
```

More at:

[Math - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

# String

- Strings in JavaScript are sequences of Unicode characters
- they are sequences of UTF-16 code units; each code unit is represented by a 16-bit number.
- Each Unicode character is represented by either 1 or 2 code units.
- String can be represented as 2 variation:
    - as String: let s_prim = 'foo'
    - as Object: let s_obj = new String(s_prim)

    ```jsx
    let s_prim = 'foo'
    let s_obj = new String(s_prim)

    console.log(typeof s_prim) // Logs "string"
    console.log(typeof s_obj)  // Logs "object"

    //do some math rn
    let s1 = '2 + 2'              // creates a string primitive
    let s2 = new String('2 + 2')  // creates a String object
    console.log(eval(s1))         // returns the number 4
    console.log(eval(s2))         // returns the string "2 + 2"
    ```

 

[Escape Sequence List](https://www.notion.so/ab78333e39ec4902998cabcf2ae6e77a)

## Static and Instance methods of string:

---

1. String.prototype.charAt(index):

    -Returns the character (exactly one UTF-16 code unit) at the specified index.

    -If index is out of range, charAt() returns an empty string

    -If no index is provided to charAt(), the default is 0.return th first element

    ```jsx
    const sentence = 'Kais Loves kais';

    const index = 3;

    console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

    //"The character at index 3 is s"
    ```

2. String.raw():

    The static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals

    ```jsx
    // Create a variable that uses a Windows
    // path without escaping the backslashes:
    const filePath = String.raw`C:\Development\profile\aboutme.html`;

    console.log(`The file was uploaded from: ${filePath}`);
    //"The file was uploaded from: C:\Development\profile\aboutme.html"
    ```

3. String.prototype.concat()

    The concat() method concatenates the string arguments to the calling string and returns a new string.

    ```jsx
    const str1 = 'Mark';
    const str2 = 'Kais';

    console.log(str1.concat(' ', str2));
    // expected output: "Mark Kais"

    console.log(str2.concat(', ', str1));
    // expected output: "Kais, Mark"
    ```

4. String.prototype.includes()

    The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

    ```
    includes(searchString)
    includes(searchString, position)
    searchString
    	A string to be searched for within str.
    position (Optional)
    		The position within the string at which to begin searching for searchString. (Defaults to 0.)
    ```

    ```jsx
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    const word = 'fox';

    console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
    // expected output: "The word "fox" is in the sentence"
    ```

   5.String.prototype.endsWith()

The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

```jsx
endsWith(searchString)
endsWith(searchString, length)
searchString
	The characters to be searched for at the end of str.
length Optional
		If provided, it is used as the length of str. Defaults to str.length.
```

```jsx
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false
let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true
```

6.String.prototype.indexOf()

---

The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

```jsx
indexOf(searchValue)
indexOf(searchValue, fromIndex)
**fromIndex (Optional)
		An integer representing the index at which to start the search. Defaults to 0.**
```

```jsx
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"
```

7.String.prototype.lastIndexOf():

---

 The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

```jsx
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"
```

# Var Declarations and Hoisting

---

at first when you declare a variable, then a thing happens. The thing is At first is var is  undefined. 

Then when programmer put their desire data then, JavaScript make variable in that types.

```jsx
var ans;
console.log(ans);
//undefined.
var ans="kiss me R***";
console.log(ans);
//string;
var ans=19;
console.log(ans);
//number.

// array,function, object all are object type.

```

ECMAScript 16 brings Let and Const instead of var.

var cause several unusual things to the code. Later, we know all of that.

So, Let and const comes in our Life(JS).

![All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/varletconst.jpeg](All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/varletconst.jpeg)

# JavaScript  Scope:

---

Scope determines the accessibility (visibility) of variables.

---

### Scope:

---

- Local Scope
- Global Scope
- Function Scope: Each Object/ function create a function scope

### Global Scope:

---

- When programmer declare a undeclared variable inside a function then it creates a global scope and become a global variable; Using Strict mode to solve this problem

In "Strict Mode", undeclared variables are not automatically global. 'use strict'; at the top of the code makes it strict mode. more at: [https://www.w3schools.com/js/js_strict.asp](https://www.w3schools.com/js/js_strict.asp)

```jsx
myFunction();
function myFunction() {
  carName = "Volvo";
  var friend="rohit";
  console.log(friend);//rohit;
}
console.log(friend);//error; variable not declared.
console.log(carName);//Volvo. cause creates a global variable.
```

- When programmer create a variable name using var. It becomes global variable.

### Local Scope:

---

- Variables declared within a JavaScript function, become **LOCAL** to the function.

Local variables have **Function scope**: They can only be accessed from within the function.

```jsx
myFunction();
function myFunction() {
  carName = "Volvo";//global scope.
  var friend="rohit";//friend is a local variable
  console.log(friend);//rohit;
}
console.log(friend);//error; variable not declared.It's Local variable.
console.log(carName);//Volvo. cause undeclaration creates a global variable.
```

---

## the Lifetime of JavaScript Variables

---

The lifetime of a JavaScript variable starts when it is declared.

Local variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab).

---

## Function Arguments

---

Function arguments (parameters) work as local variables inside functions.

---

# JavaScript Hoisting:

---

Hoisting is JavaScript's default behavior of moving declarations to the top. If programmers use var for variable declaration it causes Hoisting.

Remove Hoisting:

- Use Let / const to declare variable or Declare your Variables at the top!
- Answer this question: why this happens?

```jsx
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;    // Display x and y       

var y = 7; // Initialize y
```

---

# Errors in JS

---

The `try` statement lets you test a block of code for errors.

The `catch` statement lets you handle the error.

The `throw` statement lets you create custom errors.

The `finally` statement lets you execute code, after try and catch, regardless of the result.

---

# JavaScript try and catch

---

The `try` statement allows to define a block of code to be tested for errors while it is being executed.

If  `try` statement  does not executed,  then `catch` statement executed and return the error. 

The JavaScript statements `try` and `catch` come in pairs:

```jsx
try {
//  Block of code to try

catch(err) {
 // Block of code to handle errors
}
```

# JavaScript Throws Errors

---

If you use throw together with try and catch, you can control program flow and generate custom error messages.

Throw an error!

Let's know about Error Object then we use throw with the try and catch.

# The Error Object

---

The error object provides two useful properties: name and message.

[Error Object Properties](https://www.notion.so/f72e541f580f48d295e74a2c0ca93a20)

### code using throw, try and catch

```jsx
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }

//input 4
//output Input is too low.
//input 5
//output nothing
//input kais
//output Input is not a number.
//..
// bla bla.
```

### finally Statement:

The `finally` statement lets you execute code, after try and catch, regardless of the result:

```jsx
try {
  //Block of code to try
}
catch(err) {
  //Block of code to handle errors
}
finally {
  //Block of code to be executed after the try or catch result. programmer use this for make value default again. 
}
```

## Error Name Values

---

[Error Name Property](https://www.notion.so/4adca328eea74fbba707dba3710edf4b)

Example in : 

[JavaScript Errors Try Catch Throw](https://www.w3schools.com/js/js_errors.asp)

# Block-level Declarations:

---

Block-level declarations are those that declare variables that are inaccessible outside of a given block scope. Block scopes, also called lexical scopes, are created:

1. Inside of a function
2. Inside of a block (indicated by the `{` and `}` characters)

Block scoping is how many C-based languages work, and the introduction of block-level declarations in ECMAScript 6 is intended to bring that same flexibility (and uniformity) to JavaScript.

- NO Redeclaration: If an identifier has already been defined in a scope, then using the identifier in a let declaration inside that scope causes an error to be thrown.

```jsx
var count = 30;

let count = 40;// Syntax error
```

- Const Declarations:

```jsx
const maxItems = 30;

const name;// Syntax error: missing initialization
```

```jsx
const person = {
    name: "Nicholas"
};
// works
person.name = "Greg";
// throws an error
person = {
    name: "Greg"
};
```

- Temporal Dead Zone

when the programmer use any Let, const declared variable , before initializing it.

```jsx
console.log(jais);// referenceError

let jais=5;//don't come here.

```

# Block Binding in loops:

---

don't use var to declare variable in loop or Function, cause Var doesnot create block scope.

if you declare a variable using var, it create hoisting and create a huge error. To remove this problem introduce IIFE(immediately Invoked Function Expression)!

Look the problem first then solution:

```jsx
var funcs =[];
for(var i =0; i <10; i++){
    funcs.push(function(){ console.log(i);});
}
funcs.forEach(function(func){
    func();// outputs the number "10" ten times
});
```

in this problem , the answer should be 0-9! but what happens, 10 printed 10 times! you know why?

cause of hoisting. When You declare iterator using var it create hoisting. The functions created inside the loop all hold a reference to the same variable. The variable i has a value of 10 once the loop completes, and so when console.log(i) is called, that value prints each time.

To fix this problem, developers use immediately-invoked function expressions(IIFE) inside the loops for a new copy of the variable they want to iterate over yo be created, as in the example.

```jsx
var funcs =[];
for(var i =0; i <10; i++){
    funcs.push((function(value){
returnfunction(){
            console.log(value);
}
}(i)));
}
funcs.forEach(function(func){
    func();// outputs 0, then 1, then 2, up to 9
});
```

to remove this problem ECMA script 15 (ES6) makes Let declaration . it is easy to use.

## Let Declarations in Loops

---

A let declaration simplifies loops by effectively mimicking what the IIFE does in the previous example.

```jsx
var funcs =[];
for(let i =0; i <10; i++){
    funcs.push(function(){
        console.log(i);
});
}
funcs.forEach(function(func){
    func();// outputs 0, then 1, then 2, up to 9
})
```

When used in a for-in or for-of loop, on the other hand, a const variable behaves the same as a let variable.

```jsx
var funcs =[],
object={
        a:true,
        b:true,
        c:true
};
// doesn't cause an error
for(const key inobject){
    funcs.push(function(){
        console.log(key);
});
}
funcs.forEach(function(func){
    func();// outputs "a", then "b", then "c"
});
```

## Global Block Bindings

---

When someone declare a variable using var then it declares globally.

Use Let or const to avoid this problem.

Explanation:

Another way in which let and const are different from var is in their global scope behavior. When var is used in the global scope, it creates a new global variable, which is a property on the global object (window in browsers). That means you can accidentally overwrite an existing global using var, such as:

```jsx
// in a browser
var RegExp = "Hello!";
console.log(window.RegExp);     // "Hello!"
var ncz = "Hi!";
console.log(window.ncz);        // "Hi!"
```

Even though the `RegExp` global is defined on `window`, it is not safe from being overwritten by a `var` declaration. This example declares a new global variable `RegExp` that overwrites the original. Similarly, `ncz` is defined as a global variable and immediately defined as a property on `window`. This is the way JavaScript has always worked.

If you instead use `let` or `const` in the global scope, a new binding is created in the global scope but no property is added to the global object. That also means you cannot overwrite a global variable using `let` or `const`, you can only shadow it. Here’s an example:

```jsx
// in a browser
let RegExp = "Hello!";
console.log(RegExp);                    // "Hello!"
console.log(window.RegExp === RegExp);  // false
const ncz = "Hi!";
console.log(ncz);                       // "Hi!"
console.log("ncz" in window);           // false
```

Here, a new let declaration for RegExp creates a binding that shadows the global RegExp. That means window.RegExp and RegExp are not the same, so there is no disruption to the global scope. Also, the const declaration for ncz creates a binding but does not create a property on the global object

his capability makes let and const a lot safer to use in the global scope when you don’t want to create properties on the global object.

## Emerging Best Practices for Block Bindings

---

Use let instead of var

and if the value does not change, use const.

---

## Summary

---

The `let` and `const` block bindings introduce lexical scoping to JavaScript. These declarations are not hoisted and only exist within the block in which they are declared. This offers behavior that is more like other languages and less likely to cause unintentional errors, as variables can now be declared exactly where they are needed. As a side effect, you cannot access variables before they are declared, even with safe operators such as `typeof`. Attempting to access a block binding before its declaration results in an error due to the binding’s presence in the temporal dead zone (TDZ).

In many cases, `let` and `const` behave in a manner similar to `var`; however, this is not true for loops. For both `let` and `const`, `for-in` and `for-of` loops create a new binding with each iteration through the loop. That means functions created inside the loop body can access the loop bindings values as they are during the current iteration, rather than as they were after the loop’s final iteration (the behavior with `var`). The same is true for `let` declarations in `for` loops, while attempting to use `const` declarations in a `for` loop may result in an error.

The current best practice for block bindings is to use `const` by default and only use `let` when you know a variable’s value needs to change. This ensures a basic level of immutability in code that can help prevent certain types of errors.

# Function

---

JavaScript functions don’t limit the number of parameters that can be passed to the number of named parameters defined. You can always pass fewer or more parameters than formally specified. Default parameter values make it clear when a function can accept fewer parameters, and ECMAScript 6 sought to make the problem of passing more parameters than defined better as well.

## Functions with Default Parameter Values

---

Functions in JavaScript are unique in that they allow any number of parameters to be passed, regardless of the number of parameters declared in the function definition. This allows you to define functions that can handle different numbers of parameters, often by just filling in default values when parameters aren’t provided. This section covers how default parameters work both in and prior to ECMAScript 6, along with some important information on the arguments object, using expressions as parameters, and another TDZ.

---

## Default Parameter Values in ECMAScript 6

---

```jsx
function kais(a=5){
   console.log(a);
}
kais(7);//7
kais();//5

```

more at: [https://www.bookstack.cn/read/understandinges6/spilt.1.aee6de1d66a2bde3.md#fx8v85](https://www.bookstack.cn/read/understandinges6/spilt.1.aee6de1d66a2bde3.md#fx8v85)

---

## Rest Parameters

---

A rest parameter is indicated by three dots (...) preceding a named parameter. That named parameter becomes an Array containing the rest of the parameters passed to the function, which is where the name “rest” parameters originates.

```jsx
function pick(object,...keys){
let result =Object.create(null);
for(let i =0, len = keys.length; i < len; i++){
        result[keys[i]]=object[keys[i]];
}
return result;
}
```

In this version of the function, keys is a rest parameter that contains all parameters passed after object (unlike arguments, which contains all parameters including the first one). That means you can iterate over keys from beginning to end without worry. As a bonus, you can tell by looking at the function that it is capable of handling any number of parameters

Rest parameters do not affect a function’s length property, which indicates the number of named parameters for the function. The value of length for pick() in this example is 1 because only object counts towards this value.

### Rest Parameter Restrictions

There are two restrictions on rest parameters. 

- The first restriction is that there can be only one rest parameter, and the rest parameter must be last.

```jsx
function pick(object,...keys,last){
let result =Object.create(null);
for(let i =0, len = keys.length; i < len; i++){
        result[keys[i]]=object[keys[i]];
}
return result;
}
///Here, the parameter last follows the rest parameter keys, which would cause a syntax error
```

Here, the parameter last follows the rest parameter keys, which would cause a syntax error

- The second restriction is that rest parameters cannot be used in an object literal setter.

```jsx
letobject={
// Syntax error: Can't use rest param in setter
set name(...value){
// do something
}
};
```

This restriction exists because object literal setters are restricted to a single argument. Rest parameters are, by definition, an infinite number of arguments, so they’re not allowed in this context.

### How Rest Parameters Affect the arguments Object

---

[Working with Unnamed Parameters](https://www.bookstack.cn/read/understandinges6/spilt.2.aee6de1d66a2bde3.md#7y8vj4)

## The Spread Operator

---

Spread operator makes an array to particular elements.

```jsx
let values = [-25, -50, -75, -100]
console.log(Math.min(...values));//-100
console.log(Math.max(...values));//-25
//here, values is an array. but spread operator makes it element
```

## Block -Level Function

---

Block level functions are similar to let function expressions in that the function definition is removed once execution flows out of the block in which it’s defined. The key difference is that block level functions are hoisted to the top of the containing block. Function expressions that use let are not hoisted,

- using let to call a function. look the example

```jsx
"use strict";
if(true){
    console.log(typeof doSomething);// throws error
let doSomething =function(){
// ...
}
    doSomething();
}
console.log(typeof doSomething);
```

## Arrow Function

---

One of the most interesting new parts of ECMAScript 6 is the *arrow function*. Arrow functions are, as the name suggests, functions defined with a new syntax that uses an “arrow” (`=>`). But arrow functions behave differently than traditional JavaScript functions in a number of important ways:

- **No `this`, `super`, `arguments`, and `new.target` bindings** - The value of `this`, `super`, `arguments`, and `new.target` inside of the function is by the closest containing nonarrow function. (`super` is covered in Chapter 4.)
- **Cannot be called with `new`** - Arrow functions do not have a `[[Construct]]` method and therefore cannot be used as constructors. Arrow functions throw an error when used with `new`.
- **No prototype** - since you can’t use `new` on an arrow function, there’s no need for a prototype. The `prototype` property of an arrow function doesn’t exist.
- **Can’t change `this`** - The value of `this` inside of the function can’t be changed. It remains the same throughout the entire lifecycle of the function.
- **No `arguments` object** - Since arrow functions have no `arguments` binding, you must rely on named and rest parameters to access function arguments.
- **No duplicate named parameters** - arrow functions cannot have duplicate named parameters in strict or nonstrict mode, as opposed to nonarrow functions that cannot have duplicate named parameters only in strict mode.

There are a few reasons for these differences. First and foremost, `this` binding is a common source of error in JavaScript. It’s very easy to lose track of the `this` value inside a function, which can result in unintended program behavior, and arrow functions eliminate this confusion. Second, by limiting arrow functions to simply executing code with a single `this` value, JavaScript engines can more easily optimize these operations, unlike regular functions, which might be used as a constructor or otherwise modified.

The rest of the differences are also focused on reducing errors and ambiguities inside of arrow functions. By doing so, JavaScript engines are better able to optimize arrow function execution.

I> Note: Arrow functions also have a `name` property that follows the same rule as other functions.

### Arrow Function Syntax

The syntax for arrow functions comes in many flavors depending upon what you’re trying to accomplish. All variations begin with function arguments, followed by the arrow, followed by the body of the function. Both the arguments and the body can take different forms depending on usage. For example, the following arrow function takes a single argument and simply returns it:

```jsx
var reflect = value => value;// effectively equivalent to:var reflect =function(value){return value;};
```

When there is only one argument for an arrow function, that one argument can be used directly without any further syntax. The arrow comes next and the expression to the right of the arrow is evaluated and returned. Even though there is no explicit `return` statement, this arrow function will return the first argument that is passed in.

If you are passing in more than one argument, then you must include parentheses around those arguments, like this:

```java
var sum =(num1, num2)=> num1 + num2;// effectively equivalent to:var sum =function(num1, num2){return num1 + num2;};
```

The `sum()` function simply adds two arguments together and returns the result. The only difference between this arrow function and the `reflect()` function is that the arguments are enclosed in parentheses with a comma separating them (like traditional functions).

If there are no arguments to the function, then you must include an empty set of parentheses in the declaration, as follows:

```jsx
var getName =()=>"Nicholas";// effectively equivalent to:var getName =function(){return"Nicholas";};
```

When you want to provide a more traditional function body, perhaps consisting of more than one expression, then you need to wrap the function body in braces and explicitly define a return value, as in this version of `sum()`:

```jsx
var sum =(num1, num2)=>{return num1 + num2;};// effectively equivalent to:var sum =function(num1, num2){return num1 + num2;};
```

You can more or less treat the inside of the curly braces the same as you would in a traditional function, with the exception that `arguments` is not available.

If you want to create a function that does nothing, then you need to include curly braces, like this:

```jsx
var doNothing =()=>{};// effectively equivalent to:var doNothing =function(){};
```

Curly braces are used to denote the function’s body, which works just fine in the cases you’ve seen so far. But an arrow function that wants to return an object literal outside of a function body must wrap the literal in parentheses. For example:

```jsx
var getTempItem = id =>({ id: id, name:"Temp"});// effectively equivalent to:var getTempItem =function(id){return{        id: id,        name:"Temp"};};
```

Wrapping the object literal in parentheses signals that the braces are an object literal instead of the function body.

### Creating Immediately-Invoked Function Expressions

One popular use of functions in JavaScript is creating immediately-invoked function expressions (IIFEs). IIFEs allow you to define an anonymous function and call it immediately without saving a reference. This pattern comes in handy when you want to create a scope that is shielded from the rest of a program. For example:

```jsx
let person =function(name){return{        getName:function(){return name;}};}("Nicholas");console.log(person.getName());// "Nicholas"
```

In this code, the IIFE is used to create an object with a `getName()` method. The method uses the `name` argument as the return value, effectively making `name` a private member of the returned object.

You can accomplish the same thing using arrow functions, so long as you wrap the arrow function in parentheses:

```jsx
let person =((name)=>{return{        getName:function(){return name;}};})("Nicholas");console.log(person.getName());// "Nicholas"
```

Note that the parentheses are only around the arrow function definition, and not around `("Nicholas")`. This is different from a formal function, where the parentheses can be placed outside of the passed-in parameters as well as just around the function definition.

### No this Binding

One of the most common areas of error in JavaScript is the binding of `this` inside of functions. Since the value of `this` can change inside a single function depending on the context in which the function is called, it’s possible to mistakenly affect one object when you meant to affect another. Consider the following example:

```jsx
varPageHandler={    id:"123456",    init:function(){        document.addEventListener("click",function(event){this.doSomething(event.type);// error},false);},    doSomething:function(type){        console.log("Handling "+ type  +" for "+this.id);}};
```

In this code, the object `PageHandler` is designed to handle interactions on the page. The `init()` method is called to set up the interactions, and that method in turn assigns an event handler to call `this.doSomething()`. However, this code doesn’t work exactly as intended.

The call to `this.doSomething()` is broken because `this` is a reference to the object that was the target of the event (in this case `document`), instead of being bound to `PageHandler`. If you tried to run this code, you’d get an error when the event handler fires because `this.doSomething()` doesn’t exist on the target `document` object.

You could fix this by binding the value of `this` to `PageHandler` explicitly using the `bind()` method on the function instead, like this:

```jsx
varPageHandler={    id:"123456",    init:function(){        document.addEventListener("click",(function(event){this.doSomething(event.type);// no error}).bind(this),false);},    doSomething:function(type){        console.log("Handling "+ type  +" for "+this.id);}};
```

Now the code works as expected, but it may look a little bit strange. By calling `bind(this)`, you’re actually creating a new function whose `this` is bound to the current `this`, which is `PageHandler`. To avoid creating an extra function, a better way to fix this code is to use an arrow function.

Arrow functions have no `this` binding, which means the value of `this` inside an arrow function can only be determined by looking up the scope chain. If the arrow function is contained within a nonarrow function, `this` will be the same as the containing function; otherwise, `this` is equivalent to the value of `this` in the global scope. Here’s one way you could write this code using an arrow function:

```jsx
varPageHandler={    id:"123456",    init:function(){        document.addEventListener("click",event=>this.doSomething(event.type),false);},    doSomething:function(type){        console.log("Handling "+ type  +" for "+this.id);}};
```

The event handler in this example is an arrow function that calls `this.doSomething()`. The value of `this` is the same as it is within `init()`, so this version of the code works similarly to the one using `bind(this)`. Even though the `doSomething()` method doesn’t return a value, it’s still the only statement executed in the function body, and so there is no need to include braces.

Arrow functions are designed to be “throwaway” functions, and so cannot be used to define new types; this is evident from the missing `prototype` property, which regular functions have. If you try to use the `new` operator with an arrow function, you’ll get an error, as in this example:

```jsx
varMyType=()=>{},object=newMyType();// error - you can't use arrow functions with 'new'
```

In this code, the call to `new MyType()` fails because `MyType` is an arrow function and therefore has no `[[Construct]]` behavior. Knowing that arrow functions cannot be used with `new` allows JavaScript engines to further optimize their behavior.

Also, since the `this` value is determined by the containing function in which the arrow function is defined, you cannot change the value of `this` using `call()`, `apply()`, or `bind()`.

### Arrow Functions and Arrays

The concise syntax for arrow functions makes them ideal for use with array processing, too. For example, if you want to sort an array using a custom comparator, you’d typically write something like this:

```jsx
var result = values.sort(function(a, b){return a - b;});
```

That’s a lot of syntax for a very simple procedure. Compare that to the more terse arrow function version:

```
var result = values.sort((a, b)=> a - b);
```

The array methods that accept callback functions such as `sort()`, `map()`, and `reduce()` can all benefit from simpler arrow function syntax, which changes seemingly complex processes into simpler code.

### No arguments Binding

Even though arrow functions don’t have their own `arguments` object, it’s possible for them to access the `arguments` object from a containing function. That `arguments` object is then available no matter where the arrow function is executed later on. For example:

```jsx
function createArrowFunctionReturningFirstArg(){return()=> arguments[0];}var arrowFunction = createArrowFunctionReturningFirstArg(5);console.log(arrowFunction());// 5
```

Inside `createArrowFunctionReturningFirstArg()`, the `arguments[0]` element is referenced by the created arrow function. That reference contains the first argument passed to the `createArrowFunctionReturningFirstArg()` function. When the arrow function is later executed, it returns `5`, which was the first argument passed to `createArrowFunctionReturningFirstArg()`. Even though the arrow function is no longer in the scope of the function that created it, `arguments` remains accessible due to scope chain resolution of the `arguments` identifier.

### Identifying Arrow Functions

Despite the different syntax, arrow functions are still functions, and are identified as such. Consider the following code:

```jsx
var comparator =(a, b)=> a - b;console.log(typeof comparator);// "function"console.log(comparator instanceofFunction);// true
```

The `console.log()` output reveals that both `typeof` and `instanceof` behave the same with arrow functions as they do with other functions.

Also like other functions, you can still use `call()`, `apply()`, and `bind()` on arrow functions, although the `this`-binding of the function will not be affected. Here are some examples:

```jsx
var sum =(num1, num2)=> num1 + num2;console.log(sum.call(null,1,2));// 3console.log(sum.apply(null,[1,2]));// 3var boundSum = sum.bind(null,1,2);console.log(boundSum());// 3
```

The `sum()` function is called using `call()` and `apply()` to pass arguments, as you’d do with any function. The `bind()` method is used to create `boundSum()`, which has its two arguments bound to `1` and `2` so that they don’t need to be passed directly.

Arrow functions are appropriate to use anywhere you’re currently using an anonymous function expression, such as with callbacks. The next section covers another major ECMAScript 6 development, but this one is all internal, and has no new syntax.

## Tail Call Optimization/Recursion

---

Perhaps the most interesting change to functions in ECMAScript 6 is an engine optimization, which changes the tail call system. A *tail call* is when a function is called as the last statement in another function, like this:

```jsx
function doSomething(){
return doSomethingElse();// tail call
}
```

Tail calls as implemented in ECMAScript 5 engines are handled just like any other function call: a new stack frame is created and pushed onto the call stack to represent the function call. That means every previous stack frame is kept in memory, which is problematic when the call stack gets too large.

### What’s Different?

ECMAScript 6 seeks to reduce the size of the call stack for certain tail calls in strict mode (non-strict mode tail calls are left untouched). With this optimization, instead of creating a new stack frame for a tail call, the current stack frame is cleared and reused so long as the following conditions are met:

1. The tail call does not require access to variables in the current stack frame (meaning the function is not a closure)
2. The function making the tail call has no further work to do after the tail call returns
3. The result of the tail call is returned as the function value

As an example, this code can easily be optimized because it fits all three criteria:

```jsx
"use strict";
function doSomething(){
// optimized
return doSomethingElse();
}
```

This function makes a tail call to `doSomethingElse()`, returns the result immediately, and doesn’t access any variables in the local scope. One small change, not returning the result, results in an unoptimized function:

```jsx
"use strict";
function doSomething(){
// not optimized - no return
    doSomethingElse();
}
```

Similarly, if you have a function that performs an operation after returning from the tail call, then the function can’t be optimized:

```jsx
"use strict";
function doSomething(){
// not optimized - must add after returning
return1+ doSomethingElse();
}
```

This example adds the result of `doSomethingElse()` with 1 before returning the value, and that’s enough to turn off optimization.

Another common way to inadvertently turn off optimization is to store the result of a function call in a variable and then return the result, such as:

```jsx
"use strict";
function doSomething(){
// not optimized - call isn't in tail position
var result = doSomethingElse();
return result;
}
```

This example cannot be optimized because the value of `doSomethingElse()` isn’t immediately returned.

Perhaps the hardest situation to avoid is in using closures. Because a closure has access to variables in the containing scope, tail call optimization may be turned off. For example:

```jsx
"use strict";
function doSomething(){
var num =1,
        func =()=> num;
// not optimized - function is a closure
return func();
}
```

The closure `func()` has access to the local variable `num` in this example. Even though the call to `func()` immediately returns the result, optimization can’t occur due to referencing the variable `num`.

### How to Harness Tail Call Optimization

In practice, tail call optimization happens behind-the-scenes, so you don’t need to think about it unless you’re trying to optimize a function. The primary use case for tail call optimization is in recursive functions, as that is where the optimization has the greatest effect. Consider this function, which computes factorials:

```jsx
function factorial(n){
if(n <=1){
return1;
}else{
// not optimized - must multiply after returning
return n * factorial(n -1);
}
}
```

This version of the function cannot be optimized, because multiplication must happen after the recursive call to `factorial()`. If `n` is a very large number, the call stack size will grow and could potentially cause a stack overflow.

In order to optimize the function, you need to ensure that the multiplication doesn’t happen after the last function call. To do this, you can use a default parameter to move the multiplication operation outside of the `return` statement. The resulting function carries along the temporary result into the next iteration, creating a function that behaves the same but *can* be optimized by an ECMAScript 6 engine. Here’s the new code:

```jsx
function factorial(n, p =1){
if(n <=1){
return1* p;
}else{
let result = n * p;
// optimized
return factorial(n -1, result);
}
}
```

In this rewritten version of `factorial()`, a second argument `p` is added as a parameter with a default value of 1. The `p` parameter holds the previous multiplication result so that the next result can be computed without another function call. When `n` is greater than 1, the multiplication is done first and then passed in as the second argument to `factorial()`. This allows the ECMAScript 6 engine to optimize the recursive call.

Tail call optimization is something you should think about whenever you’re writing a recursive function, as it can provide a significant performance improvement, especially when applied in a computationally-expensive function.

---

# Tricky Information for JS:

## Truthy vs Falsy:

As well as a type, each value also has an inherent boolean value, generally known as either *truthy* or *falsy*. Some of the rules are a little bizarre so understanding the concepts and effect on comparison helps when debugging JavaScript applications.

The following values are **always falsy**:

- `false`
- `0` (zero)
- `''` or `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**. That includes:

- `'0'` (a string containing a single zero)
- `'false'` (a string containing the text “false”)
- `[]` (an empty array)
- `{}` (an empty object)
- `function(){}` (an “empty” function)

Everything else is truthy.

---

## Null vs Undefined

---

### when it cause undefined?

- declare but don't put a value.

```jsx
let kais:
console.log(kais);
//undefined;
```

- Don't return a function.

```jsx
function add(n,m){
   console.log(n+m);
}
const result=add(2,3);
console.log(result)//undefined; //cause no retrun from the function.
```

- don't return a value

```jsx
function add(n,m){
   console.log(n+m);
return
}
const result=add(2,3);
console.log(result)//undefined; //cause no retrun a  value from the function.
```

- if the value is not there

```jsx
const kais={name:'kais',phone:'01213'};
console.log(kais.gf)//undefined;
```

- if you set the value as undefined?

```jsx
let kais=undefined;
console.log(kais);//undefined;
```

### when we get null?

- when we set the value as null

```jsx
let kais=null;
//null
```

in code: [https://github.com/Md-Kais/javaScript_interview/blob/main/nullVsundefined.js](https://github.com/Md-Kais/javaScript_interview/blob/main/nullVsundefined.js)

## Double equal vs Triple Equal

```jsx
//tripleEqualVsDoubleEqual
//popular interview ques
//double equal never check data type of this variable{values};
//triple equal checks {data type+value}(strictly checks)

const first=0;
const second=false;
if(first==second){
    console.log('double match');//double match cause 0 means false
}
if(first===second){
    console.log('triple match');//0 is number and false is boolean type(never match);
}
const kais=1;
const kice='1';
if (kais==kice) {
    console.log('double match'); //value matches
}
if (kais===kice) {
    console.log('triple match');//triple never match cause kais is number and kice is boolean
}
//ALL  triple match is double match  but all double match isnot triple match
//as a jr. ,you use triple equal
const rais = 1;
const rice = 1;
if (kais == kice) {
    console.log('double match'); //value matches
}
if (rais === rice) {
    console.log('triple match');//triple matches cause of datatype+value
}

```

## Scope:

---

- Local Scope
- Global Scope
- Function Scope: Each Object/ function create a function scope

### Global Scop

---

- When programmer declare a undeclared variable inside a function then it creates a global scope and become a global variable; Using Strict mode to solve this problem

In "Strict Mode", undeclared variables are not automatically global. 'use strict'; at the top of the code makes it strict mode. more at: [https://www.w3schools.com/js/js_strict.asp](https://www.w3schools.com/js/js_strict.asp)

```jsx
myFunction();
function myFunction() {
  carName = "Volvo";
  var friend="rohit";
  console.log(friend);//rohit;
}
console.log(friend);//error; variable not declared.
console.log(carName);//Volvo. cause creates a global variable.
```

- When programmer create a variable name using var. It becomes global variable.

### Local Scope

---

- Variables declared within a JavaScript function, become **LOCAL** to the function.

Local variables have **Function scope**: They can only be accessed from within the function.

```jsx
myFunction();
function myFunction() {
  carName = "Volvo";//global scope.
  var friend="rohit";//friend is a local variable
  console.log(friend);//rohit;
}
console.log(friend);//error; variable not declared.It's Local variable.
console.log(carName);//Volvo. cause undeclaration creates a global variable.
```

---

### the Lifetime of JavaScript Variables

---

The lifetime of a JavaScript variable starts when it is declared.

Local variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab).

---

### scope problem

```jsx
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
//1,2,1
```

## Closure(main CONFUSING PART)

---

Closure means that things which creates a Unique Environment Inside an Environment. it means there is a part `[[ environment ]]`

`definition` if you a function within a function , execution of the inner function will create a scope inside of the outer function-a nested scope. Because the inside function is enclosed by outer function scope, the inner function
[https://www.thatjsdude.com/images/scope/closureTwoFunc.png](https://www.thatjsdude.com/images/scope/closureTwoFunc.png)

[https://www.thatjsdude.com/jsConcepts/concepts/scope.html](https://www.thatjsdude.com/jsConcepts/concepts/scope.html)

```jsx
function a() {
    function b() {
        console.log('closure');
    }
    b(); //creates closure
    return false;//to skip undefined replying
}
//you call a function inside a function. so, you call the outer function is or not . the inner function execute.

//make a complex closure function;

function panda() {
    let penty = 0;
    return function() {
        penty++;
        return penty;
    }
   
    

   
}
const penty1 = panda();
console.log(penty1());
console.log(penty1());
console.log(penty1());
console.log(penty1());
console.log(penty1());

const penty2=panda();
console.log(penty2());
console.log(penty2());
console.log(penty2());

console.log(penty1());
```

![All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/de.jpg](All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/de.jpg)

## Difference Between Bind,Call,Apply

---

### what is bind?

ans:
      1. Bind an object to a function.
      2.reference it using 'this'.

```jsx

//bind reduce the code repitition and make code DRY
//bind is calling a function without owner of this function
//suppose rohit has an axe . and you land it to kais. and kais can chope the wood but kais is not the owner of the axe
// so bind is a function calling.

//lets call two object
let c_1 = {
    x: 2,
    y: -2
}
let c_2 = {
    x: 22222,
    y: -2333
}
function printObject() {
    return(this.x + ',' + this.y);
}
let ans_1 = printObject.bind(c_1);
let ans_2 = printObject.bind(c_2);
console.log(ans_1(),
ans_2());
console.log(printObject());//undifined, undifined . cause this or object can't mention before
```

### Call vs Apply

```jsx
//call vs Apply
// call -> c, comma
//apply -> a, array
//call and apply is almost same. you have to call a object like this : 
//call:
//syntax: name_of_the-object_where_original_function_is_created.function_name.call(where_u_apply,data1,data2,data3,........................,dataN);
const normalPerson = {
    firstName: "Md.",
    lastName: "Kais",
    getFullName: function () {
        return (`${this.firstName} ${this.lastName}`);
    },//anonymus function;
    salary: 5500
   
}
const heroPerson = {
    firstName: "Masfdsdaf",
    lastName: "Ksfsadfd",
    getFullName: function () {
        return (`${this.firstName} ${this.lastName}`);
        
    },//anonymus function;
    salary: 10500,
    netSalary: function(TAX, tips, dutyless) {
        return (this.salary - TAX - tips - dutyless);
        console.log('hello');
    }
}
//call->comma
console.log(heroPerson.netSalary.call(normalPerson,55,550,100));//4795
console.log(heroPerson.netSalary.call(heroPerson, 55, 550, 100));//9795
//apply-> array
//data is passed by the help of array
//syntax: name_of_the-object_where_original_function_is_created.function_name.call(where_u_apply,[data1,data2,data3,........................,dataN]);

console.log(heroPerson.netSalary.apply(normalPerson, [55, 550, 100]));//4795
console.log(heroPerson.netSalary.apply(heroPerson, [55, 550, 100]));//9795
```

## this keyword(important)

---

which is left side of the dot , this keyword follow that .

if there is no context , then `this` refers the whole window.

if there is an element , then `this` refers the that element.

if there is an object, then `this` refers that object.

```jsx
const myObject = {
            name: 'Kuddus Ali',
            getFullName: function () {
                console.log(this);
                // this myObject er jonno kaj korbe. 
                // kintu amra jodi ei method ta onno object er jonno declare kori, tahole this oi method er hoye kaj korbe. 
                return 'Mr. ' + this.name;
            }
        }
        // console.log(myObject.getFullName);
        myObject.getFullName();
        const anotherObject = {
            name: 'Bidyut Ali',
        }
        anotherObject.getFullName = myObject.getFullName;
        // console.log(anotherObject.getFullName);
        anotherObject.getFullName();

        function add(a, b) {
            console.log(this);
            return a + b;
        }
        add(5, 7);
        // ekhane add method or function er bam pashe kono object dot(.) diye jukto nai, tai this er value ta hobe window. 

        anotherObject.sum = add;
        // add function ta ke anotherObject er sum method hisebe declare korlam. 

        anotherObject.sum();
        // ekhane sum() function er bame dot(.) diye anotherObject ase. 
        // tai seta this hisebe jabe add function er vitor. 

        setTimeout(function () {
            console.log(this);
        }, 5000);
        alert('I will come after 5 seconds delay');
//The keyword  you use to refer to an object through which they were invoked is this
```

## Event Loop , Stack and Queue

---

![All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/eventLoop.gif](All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/eventLoop.gif)

Event loop means, how javascript works when execute that code. JavaScript event loops works in a stack way. It reads all the code. then start executing. Which comes first that execute last. Look at the video.

![All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/stack.jpg](All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/stack.jpg)

video link :  [https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en](https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en)

![All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/eventLoop2.gih.gif](All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/eventLoop2.gih.gif)

 

## Callback Function

---

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

### Callback Function Sequence

JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

```jsx
function hello(name){
  console.log('hellp'+name);
}
hello(kais);
hello(rohit);
//hellpkais;
//hellprohit;
```

## DOM API

---

DOM→ Document Object Model.

There are three types of things we have to care about when we create any website. They are

- Content
- Presentation
- Behavior

We know content is controlled by HTML, presentation by CSS where the behavior which is the most important factor for a dynamic website is controlled by JavaScript. Now to make them work altogether, we need something that could be accessed by all of the technology we use(HTML, CSS, JavaScript). What if we create and control all of the 3 concerns using just this 'something'. This will be much easier. From here the idea of the DOM first came. This 'something' we were talking about is nothing but DOM API.

When we create any content for the Internet using HTML, the browsers convert them to a document object which contains all the elements we mentioned in the content as nodes. If we assign different styles to an individual element, this gets also saved in its node in the DOM.

Now here is the good thing. We can access any of the contents and presentations using JavaScript to manipulate them for different conditions, in other words adding behaviour to make the content dynamic.

```jsx
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Page</title>
  </head>
  <body>
    <h1>The main heading</h1>
    <p class="highlight">An interesting summary of this content.</p>
    <p>
      Some supplementary details to accompany our discussion.
             It also has a <a href="#">link</a>.
    </p>
    <div class="widget">
      <div class="foo"></div>
    </div>
    <table>
      <thead>
        <tr>
          <th>School</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UNC Chapel Hill</td>
          <td>Carolina Blue</td>
        </tr>
        <tr>
          <td>NC State</td>
          <td>Wolfpack Red</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
```

The above HTML will look like this in the DOM object.

![All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/dom_image.png](All%20Fundamentals%20About%20JavaScript%202d460f501f5d4ddb9faed9dde879257c/dom_image.png)

The image and the code are taken from [here](https://web-fundamentals.dev/dom-api)

```jsx
const gtts = require("gtts");

let speech = "Hello, This is Sabiul"; // Your Text Goes Here

let gTTS = new gtts(speech, "en"); 

gTTS.save("speech.mp3", (err, result) => {
  if (err) {
    throw err;
  } else {
    console.log("Convert To .mp3 !! ");
  }
});
```
