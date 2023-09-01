// When you pass primitive types such as strings, numbers, and booleans, they are passed by their actual value, not by reference.
//why?? primitives are stored on stack and objects are stored in heap

// Q1 : What does "passed by value" mean?
// If you modify the value of a primitive type within a function, the modification will not impact the value of the same variable outside that function's scope.
// Example:
let a = 1
function foo(a){
    a = 2;
}
foo(a) //passed by value - (copy of a)
console.log(a) // value will be 1

// Q2: What is passed by reference?
//Example : property inside object can be changed but, see next example
let b = {};
function moo(b){
    b.eat = false;
}
moo(b)
console.log(b) // {eat : false}

//Example : However the location of the object itself cannot be changed
let c = {'key': 'value'}
function too(c){
    c = {'fname':'lname'}
}
too(c)
console.log(c) // {'key','value'}