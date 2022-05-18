function factorialIteration(n) {
  let res = 1;
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      res *= i
    }
  }
  return res
};

function factorialRecrusive(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorialRecrusive(n - 1)
};

console.log(factorialRecrusive(4000))


module.exports = {
  factorialIteration,
  factorialRecrusive
}
