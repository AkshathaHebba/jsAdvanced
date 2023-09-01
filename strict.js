// The "use strict" directive serves a purpose of enabling a more stringent and reliable code execution environment.
// By incorporating this directive, potential issues in the code that could lead to exceptions are proactively identified, directing developers to the likely source of problems promptly.
// The reason for placing this directive within a string is twofold.
// If an older browser encounters this code, it interprets the content as a string and consequently disregards it, maintaining compatibility.
// However, modern browsers interpret it as a command to enforce stricter code adherence, ensuring better code quality and minimizing potential errors.


//Example
//NOT in strict mode
//creates a global variable in the name can be used without declaring
text = "hello"
//Can delete variables / functions
let foo = 1
delete foo;
function newCode() {
    "use strict"
    //IN strict mode
    //Variables must be declared before using or throws an error avoiding accidental usage
    //Cannot delete functions, variable.
}
