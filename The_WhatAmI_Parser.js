function typeChecker(value) {
  console.log(`This variable is a ${typeof value}.`);
}

let myVariable = "Hello";

typeChecker(myVariable);
typeChecker(25);
typeChecker(true);
