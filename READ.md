# Full Note: Questions and Answers for All 10 JavaScript Programs

This note summarizes the purpose, question, and answer for all 10 JavaScript exercises in this folder.

---

## 1. Age Calculator

Question:
Write a JavaScript program that calculates a person’s age using the current year and birth year and prints the age as either the exact age or the previous age.

Answer:
The program subtracts the birth year from the current year and displays the result as:

- Age = currentYear - birthYear
- Example: if currentYear = 2026 and birthYear = 2000, then age = 26
- Output: You are either 26 or 25 years old.

Code idea:
let currentYear = 2026;
let birthYear = 2000;
let age = currentYear - birthYear;
console.log(`You are either ${age} or ${age - 1} years old.`);

---

## 2. Fortune Teller

Question:
Create a fortune teller that asks for the number of children, partner’s name, location, and job title, then displays a message about the future.

Answer:
The program collects values from input fields and prints a fortune sentence using string interpolation.

Example output:
You will be a Teacher in Nairobi, and married to Faith with 3 kids.

Code idea:
function tellFortune() {
const numChildren = document.getElementById("numChildren").value;
const partnerName = document.getElementById("partnerName").value;
const location = document.getElementById("location").value;
const jobTitle = document.getElementById("jobTitle").value;

console.log(
`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`
);
}

---

## 3. Full Name Creator

Question:
Write a function that combines a first name and a last name into a full name and prints a welcome message.

Answer:
The function joins the first and last names with a space and returns a greeting.

Example output:
Welcome, Angel Kenshial!

Code idea:
function fullName(firstName, lastName) {
let fullNameString = `${firstName} ${lastName}`;
return `Welcome, ${fullNameString}!`;
}

console.log(fullName("Angel", "Kenshial"));

---

## 4. Greeting Generator

Question:
Create a program that welcomes a user by name.

Answer:
The program defines a function named greetUser(name) that prints a personalized greeting.

Example output:
Hello, Angel! Welcome to our application.
Hello, Kenshial! Welcome to our application.
Hello, Samuel! Welcome to our application.

Code idea:
function greetUser(name) {
console.log(`Hello, ${name}! Welcome to our application.`);
}

---

## 5. Shopping List Reminder

Question:
Create a shopping list with three items and print them in numbered order.

Answer:
The program stores three products and uses a function to print each item with a number.

Example output:

1. Hollandia Milk
2. Eggs
3. Cake

Code idea:
let item1 = "Hollandia Milk";
let item2 = "Eggs";
let item3 = "Cake";

function printList(item1, item2, item3) {
console.log(`1. ${item1}`);
console.log(`2. ${item2}`);
console.log(`3. ${item3}`);
}

---

## 6. Temperature Converter

Question:
Convert a temperature from Celsius to Fahrenheit using the correct formula.

Answer:
The program uses the formula:

F = (C × 9 / 5) + 32

If C = 25, then:
F = (25 × 9 / 5) + 32 = 77

Output:
Celsius: 25°C
Fahrenheit: 77°F

Code idea:
function convertToFahrenheit() {
let celsius = 25;
let fahrenheit = (celsius \* 9) / 5 + 32;

console.log(`Celsius: ${celsius}°C`);
console.log(`Fahrenheit: ${fahrenheit}°F`);
}

---

## 7. What Am I? Parser / Type Checker

Question:
Write a function that checks the type of a variable and prints what it is.

Answer:
The program uses JavaScript’s typeof operator to determine whether the value is a string, number, or boolean.

Example output:
This variable is a string.
This variable is a number.
This variable is a boolean.

Code idea:
function typeChecker(value) {
console.log(`This variable is a ${typeof value}.`);
}

let myVariable = "Hello";
typeChecker(myVariable);
typeChecker(25);
typeChecker(true);

---

## 8. Even or Odd Detector

Question:
Write a function that determines if a number is even or odd.

Answer:
The program checks whether the number is divisible by 2 using the modulus operator (%).

If number % 2 === 0, the number is even.
Otherwise, it is odd.

Example output:
The number 10 is even
The number 7 is odd
The number 4 is even

Code idea:
function evenOrOdd(number) {
if (number % 2 === 0) {
return `The number ${number} is even`;
} else {
return `The number ${number} is odd`;
}
}

---

## 9. Simple Calculator

Question:
Create a calculator that performs addition, subtraction, multiplication, and division.

Answer:
The program defines four functions, each performing one arithmetic operation.

Example output:
5 + 3 = 8
10 - 4 = 6
6 \* 3 = 18
20 / 5 = 4

Code idea:
function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b) {
return a \* b;
}

function divide(a, b) {
return a / b;
}

---

## 10. Tip Calculator

Question:
Write a program that calculates the tip and total bill based on the bill amount and tip percentage.

Answer:
The program computes the tip using the formula:

tip = billAmount × (tipPercentage / 100)

total = billAmount + tip

Example:
Bill = 50
Tip = 20%
Tip amount = 10
Total = 60

Output:
Bill: $50, Tip (20%): $10, Total: $60

Code idea:
function calculateTip(billAmount, tipPercentage) {
let tip = billAmount \* (tipPercentage / 100);
let total = billAmount + tip;

return `Bill: $${billAmount}, Tip (${tipPercentage}%): $${tip}, Total: $${total}`;
}

console.log(calculateTip(50, 20));

---

## Final Summary

These 10 programs cover the basics of JavaScript, including:

- Variables and constants
- Arithmetic operations
- Functions and parameters
- Conditional statements
- String interpolation
- Type checking
- Input and output handling
- Practical real-life problem solving

All the programs together help learners understand the fundamentals of JavaScript programming step by step.
