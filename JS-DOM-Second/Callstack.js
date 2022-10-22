// callstack is a stack of functions that are currently being executed

function multiply (a, b) {
  return a * b;
}

function square (n) {
    return multiply(n, n);
    }

function printSquare (n) {
    const squared = square(n);
    console.log(squared);
}

printSquare(4);


