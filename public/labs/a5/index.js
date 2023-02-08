// alert("Hello World!");

// 2.3 Writing to the Console
console.log("Hello World!");

// 2.4 Variables and Constants
console.log("\nVariables and Constants");
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

// 2.4.1 Variable Types
console.log("\nVariable types");
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = "Hello World!";
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// 2.4.2 Boolean Variables
console.log("\nBoolean Variables");
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = "1" == 1;
let notTrue = "1" === 1;

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

// 2.5 Conditionals
// 2.5.1 If Else
console.log("\nIf else");
if (true1) {
  console.log(true);
}

if (!false1) {
  console.log("!false1");
} else {
  console.log("false1");
}

// 2.5.2 Ternary Conditional Operator
console.log("\nTernary conditional operator");
let loggedIn = true;
const greeting = loggedIn ? "Welcome!" : "Please login";
console.log(greeting);

// 2.6 Functions
// 2.6.1 Legacy ES5 function
console.log("\nLegacy ES5 function");
function add(a, b) {
  return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// 2.6.2 New ES6 arrow functions
console.log("\nNew ES6 functions");
const subtract = (a, b) => {
  return a - b;
};
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// 2.6.3 Implied returns
console.log("\nImplied returns");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// 2.6.4 Optional parenthesis and parameters
console.log("\nParenthesis and parameters");
const square = (a) => a * a;
const plusOne = (a) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// 2.7 Arrays
console.log("\nArrays");
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ["string1", "string2"];
let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1,
];

// Print an integer array with its length at front.
// For example, [1, 2, 3, 4, 5] would be print like
// "(5) [1, 2, 3, 4, 5]"
function printIntArrayWithLength(array) {
  let arrayStr = array.map((number) => number).join(", ");
  console.log("(%d) [%s]", array.length, arrayStr);
}

let numberArray1Str = numberArray1.map((number) => number).join(", ");
console.log(numberArray1);
console.log("(%d) [%s]", numberArray1.length, numberArray1Str);

let stringArray1Str = stringArray1.map((string) => `"${string}"`).join(", ");
console.log("(%d) [%s]", stringArray1.length, stringArray1Str);

let variableArray1Str = variableArray1
  .map((variable) => {
    if (Array.isArray(variable)) {
      return `Array(${variable.length})`;
    } else {
      return variable;
    }
  })
  .join(", ");
console.log(variableArray1Str);
console.log("(%d) [%s]", variableArray1.length, variableArray1Str);

// 2.7.1 Array index and length
console.log("\nArray index and length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

// 2.7.2 Adding and Removing Data to/from Arrays
console.log("\nAdd and remove data to arrays");

// adding new items
numberArray1.push(6);
stringArray1.push("string3");

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// 2.7.3 For Loops
console.log("\nFor loops");
for (let i = 0; i < stringArray1.length; i++) {
  const string1 = stringArray1[i];
  console.log(string1);
}

// 2.7.4 The Map Function
console.log("\nMap function");
const squares = numberArray1.map(square);
const cubes = numberArray1.map((a) => a * a * a);
printIntArrayWithLength(squares);
printIntArrayWithLength(cubes);

// 2.7.5 The Find Function
console.log("\nFind function");
const four = numberArray1.find((a) => a === 4);
console.log(four);
const string3 = stringArray1.find((a) => a === "string3");
console.log(string3);

// 2.7.6 The Find Index Function
console.log("\nFind index");
const fourIndex = numberArray1.findIndex((a) => a === 4);
console.log(fourIndex);
const string3Index = stringArray1.findIndex((a) => a === "string3");
console.log(string3Index);

// 2.7.7 The Filter Function
console.log("\nFilter function");
const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
printIntArrayWithLength(numbersGreaterThan2);
const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
printIntArrayWithLength(evenNumbers);
const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
printIntArrayWithLength(oddNumbers);

/**
 * 2.8 Template Strings
 */
console.log("\nTemplate strings");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2);

/**
 * 2.10 Executing jQuery scripts
 */
console.log("\nExecuting jQuery scripts");
const init = () => {
  console.log("Hello world from jQuery");
  /* do the rest of the lab work here */

  // 2.11 Binding to the DOM
  console.log("\nBinding to the DOM");
  const bindById = $("#bind-by-id");
  const bindByClass = $(".bind-by-class");
  console.log("Binding to DOM");
  console.log(bindById);
  console.log(bindByClass);

  // 2.12 Changing style programmatically
  const changeStyle = $("#change-style");
  const changeStyle2 = $(".change-style");
  changeStyle.css("color", "red");
  changeStyle2.css("color", "blue");

  // 2.13 Getting and setting attributes
  console.log("\nGet and set attributes");
  const getIdAttr = $("#get-id-attr");
  const id = getIdAttr.attr("id");
  console.log(id);

  const setClassAttr = $("#set-class-attr");
  setClassAttr.attr("class", "class-0");

  // 2.14 Adding and removing classes
  const addClass1Example = $("#add-class-1");
  addClass1Example.addClass("class-1");
  const removeClass1Example = $("#remove-class-1");
  removeClass1Example.removeClass("class-2");

  // 2.15 Hiding and showing content
  const hideMe = $("#hide-me");
  hideMe.hide();
  const showMe = $("#show-me");
  showMe.show();

  // 2.16 Creating new elements
  const newLineItem = $("<li>Line item 1</li>");
  const anotherLineItem = $("<li>Line item 2</li>");

  // 2.17 Appending new elements
  const ul = $("#append-new-elements");
  ul.append(newLineItem);
  ul.append(anotherLineItem);

  // 2.18 Removing and emptying content
  const removeLi = $("#remove-this");
  const emptyUl = $("#empty-this");
  removeLi.remove();
  emptyUl.empty();

  // 2.19 Changing content
  const changeThisText = $("#change-this-text");
  const changeThisHtml = $("#change-this-html");
  changeThisText.html("New text");
  changeThisHtml.html(`
   <li>Line item A</li>
   <li>Line item B</li>
   <li>Line item C</li>
`);

  // 2.20 Navigating up and down the DOM tree
  const child2 = $("#child-2");
  const parent1 = child2.parents("#parent");
  parent1.css("background-color", "red").css("color", "white");

  const parent = $("#parent");
  const child = parent.find("#child-2");
  child.css("background-color", "blue");

  // 2.21 Handling click events
  const handleClick = () => console.log("Handle click");
  const clickable = $(".clickable");
  clickable.click(handleClick);

  // 2.22 Event target
  const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    $(target).css("background-color", "blue").css("color", "white");
  };
  const eventTarget = $("#event-target");
  eventTarget.click(handleEventTarget);

  // 2.23 Hiding and showing content
  let hideBtn, showBtn, hideShowHeader;
  hideBtn = $("#hide");
  showBtn = $("#show");
  hideShowHeader = $("#hide-show");
  const hideHandler = () => {
    hideShowHeader.hide();
  };
  const showHandler = () => {
    hideShowHeader.show();
  };
  hideBtn.click(hideHandler);
  showBtn.click(showHandler);
};

$(init);
