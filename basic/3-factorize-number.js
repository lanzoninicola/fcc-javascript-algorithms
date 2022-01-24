/**
 * Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
 */

function factorialize(num) {
  if (num === 0) return 1;

  let i = 1;
  let series = [];

  while (i <= num) {
    series.push(i++);
  }

  return series.reduce((acc, i) => i * acc);
}

function factorialize2(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

factorialize(5);
