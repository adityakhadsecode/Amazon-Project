import { formatCurrency } from "../scripts/utils/money.js";

// Tests for formatCurrency function
//A group of tests is called a test suite
//Each individual test is called a test case

console.log("test suite: formatCurrency");
console.log("Running tests for formatCurrency...");

console.log("Converting cents to dollars...");
if (formatCurrency(2095) === "20.95") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("works with zero...");
if (formatCurrency(0) === "0.00") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

console.log("rounds up to nearest cents...");
if (formatCurrency(2000.5) === "20.01") {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
