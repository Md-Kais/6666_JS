# All Fundamentals About JavaScript

# Born of this Unique Piece of Language

                                JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape.JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called LiveScript.

Several months later, Microsoft released JScript with Internet Explorer 3. It was a mostly-compatible JavaScript work-alike. 

Several months after that, Netscape submitted JavaScript to Ecma International, a European standards organization, which resulted in the first edition of the ECMAScript standard that year. The standard received a significant update as ECMAScript edition 3 in 1999, and it has stayed pretty much stable ever since. The fourth edition was abandoned, due to political differences concerning language complexity. Many parts of the fourth edition formed the basis for ECMAScript edition 5, published in December of 2009, and for the 6th major edition of the standard, published in June of 2015.

# What is JavaScript?

1.JavaScript is a multi-paradigm , dynamic language with types and operators,standard built-in-objects and methods.

2. Its syntax is based on the Java and C language. 

3. JavaScript supports object-oriented programming with object prototypes, instead of classes.

4. JavaScript also support functional programming.

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

# Number

- Number is a primitive wrapper object.
- The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value
- . A Number only keeps about 17 decimal places of precision; arithmetic is subject to rounding
- The largest value a Number can hold is about 1.8×10308.
- Number may also be expressed in literal forms like 0b101, 0o13, 0x0A.

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

## Some extra about Number:

[//max](//max) value : (2^53 -1)

[//min](//min) value: (-(2^53 - 1)).

## Static Methods:

## 1. Number.isNaN(): return true or false or undefined. Checks that the input is Not a Number or Number. NaN ⇒ Not a Number.

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

##
