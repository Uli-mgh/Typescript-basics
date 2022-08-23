console.log("hello typescript");

// implicit types
let helloworld = "hello world";

// Explicit types
let firstName: string = "jhon";

let age: number = 30;

// Built in Types
// Boolean
// Number
// String
// Array
// Tuple
// enum
// Unknow
// any
// void
// Null undefined

// Tuple
type stringAndNumber = [string, number];

let x: stringAndNumber = ["hello", 10];

// Enums
enum Continents {
  America,
  Africa,
  Asia,
  Europa,
  Oceania,
}
// Usage
var region = Continents.Africa;

// interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "jhon",
  id: 0,
  // age: 20,
  // Type '{ name: string; id: number; age: number; }' is not assignable to type 'User'.
  // Object literal may only specify known properties, and 'age' does not exist in type 'User'.
};

// Composing types -> Union
type WindowStates = "open" | "closed" | "minimized";

const windowState: WindowStates =
  //"not a window";
  // Type '"not a window"' is not assignable to type 'WindowStates'.
  "open";

type LockStates = "locked" | "unlocked";
type OddNumberUnderTen = 1 | 2 | 3 | 9;

const odd: OddNumberUnderTen =
  // 6; WRONG
  9; // RIGHT

const getLenght = (param: string | string[]) => {
  return param.length;
};
getLenght("test"); // 4
//getLenght([0, 1, 2, 3]); // Type 'number' is not assignable to type 'string'. ARRAY OF STRING ALLOWED ONLY
getLenght(["0", "1", "2", "3"]); // RIGHT?
