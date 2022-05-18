const { 
  factorialIteration,
  factorialRecrusive,
 } 
 = require('../index')



test('factorialIteration', function ()  {
  expect(factorialIteration(0)).toBe(1)
  expect(factorialIteration(1)).toBe(1)
  expect(factorialIteration(2)).toBe(2)
  expect(factorialIteration(3)).toBe(6)
  expect(factorialIteration(4)).toBe(24)
  expect(factorialIteration(5)).toBe(120)
  expect(factorialIteration(6)).toBe(720)
});

test('factorialRecrusive', function () {
  expect(factorialIteration(0)).toBe(1)
  expect(factorialIteration(1)).toBe(1)
  expect(factorialIteration(2)).toBe(2)
  expect(factorialIteration(3)).toBe(6)
  expect(factorialIteration(4)).toBe(24)
  expect(factorialIteration(5)).toBe(120)
  expect(factorialIteration(6)).toBe(720)
});
