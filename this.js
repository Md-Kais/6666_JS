//?  It has different values depending on where it is used:

//* In a method, this refers to the owner object.

// *    Alone, this refers to the global object.In a Browser This means window.

//* In a function, this refers to the global object.
//! In a function, in strict mode, this is undefined.

// *In an event, this refers to the element that received the event.

//* Methods like call(), and apply() can refer this to any object.

//this in a method:
let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

// *this Alone

//!  When used alone, the owner is the Global object, so this refers to the Global object.
//!  In a browser window the Global object is[object Window]:
var x=this;
console.log(x);//{};

function myFunction() {
    return this;
}
console.log(myFunction());