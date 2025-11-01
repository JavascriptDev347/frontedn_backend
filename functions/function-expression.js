// === Function Expression ===
let sayHello = function () {
    return "Hello World!";
}

console.log(sayHello());

//  === Difference between Declaration and Expression functions
// 1. Difference
/* A Function Expression is created when the execution reaches it and is usable only
from that moment.Once the execution flow passes to the right side of the assignment
let sum = function… – here we go, the function is created and can be used (assigned,
called, etc. ) from now on.

Function Declarations are different. A Function Declaration can be called earlier than
it is defined.For example, a global Function Declaration is visible in the whole script,
no matter where it is. That’s due to internal algorithms. When JavaScript prepares to run
the script, it first looks for global Function Declarations in it and creates the functions.
 We can think of it as an “initialization stage”. And after all Function Declarations are
 processed, the code is executed. So it has access to these functions.
*/

//  == CODE ==
showDeclarationFunction(); // it works fine
showExpressionFunction(); // not working error (Variable might not have been initialized)

function showDeclarationFunction() {
    console.log("Function Declaration");
}

let showExpressionFunction = function () {
    console.log("Function Expression");
}