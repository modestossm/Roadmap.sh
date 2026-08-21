// Function Type Expressions
function greeter(fn: (a: string) => void) {
    // The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”.
    fn("Hello, World");
}
 
greeter(printToConsole);