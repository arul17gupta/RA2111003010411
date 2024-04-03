const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Prime numbers
app.get("/test/primes", (req, res) => {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]; // Predefined list of primes
  res.json({ numbers: primes });
});

// Fibonacci numbers
app.get("/test/fibonacci", (req, res) => {
  const limit = 10; // Generate Fibonacci numbers up to the 10th term
  let fib = [0, 1];
  for (let i = 2; i < limit; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  res.json({ numbers: fib });
});

// Random numbers
app.get("/test/random", (req, res) => {
  const min = 1;
  const max = 100;
  const count = 10;
  const randomNumbers = Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
  res.json({ numbers: randomNumbers });
});

// Even numbers
app.get("/test/even", (req, res) => {
  const limit = 10;
  let evenNumbers = [];
  for (let i = 2; i <= limit * 2; i += 2) {
    evenNumbers.push(i);
  }
  res.json({ numbers: evenNumbers });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
