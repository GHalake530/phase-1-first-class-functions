function receivesAFunction(callback) {
    callback(); 
}

function myNamedFunction() {
    console.log("This is a named function.");
}

function returnsANamedFunction() {
    return myNamedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}






