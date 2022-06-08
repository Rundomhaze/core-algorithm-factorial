function factorialIteration(num) {
  let res = 1;
  if (num > 0) {
    for (let i = 1; i <= num; i++)
      res = res * i
  }
  return res;
};


function factorialRecrusive(num) {
  let res;
  if (num <= 0) {
    return 1
  }
  res = num * factorialRecrusive(num - 1)
  return res;
};

factorialRecrusive(6)

module.exports = {
  factorialIteration,
  factorialRecrusive
}
