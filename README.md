## Algorithms: Calculation of the factorial

You have to write two solutions to the same problem. You need to write two functions that do the same thing - they accept the same arguments and return the same values. The only thing that will be different between them is their implementation (i.e. HOW they work the way they work).

The problem you will be solving is the calculation of the factorial of a given integer. You will solve the problem by using both the *iterative* and *recursive* algorithms.

## Iterative algorithms
 
```javascript
function countdownScript(number) {
  let script = '';

  while(number > 0) {
    script += `${number} ... \n`;
    number -= 1;
  }

  script += 'Blast off!';
  return script;
}
```
*Figure 1*. Iterative algorithm of the countdown timer.

You are already familiar with working with [iterative algorithms](https://en.wikipedia.org/wiki/Iteration#Computing). What are the signs that we are using the iterative algorithm? Our methods include loops - either a `while` or `for` loop. We do something a certain number of times. For example, iterating over elements in an array.

On Figure 1 you see the iterative solution to the creation of a countdown timer. This method builds and returns a string. It does so by using a while loop: as long as the variable `number` points to a whole number that is bigger than 0, the method will keep adding integers to `script`. The most important thing to understand here is how to stop the loop. How do we stop the loop on Figure 1?

## Recursive algorithms
 
```javascript
function countdownScript(number) {
  if(number < 1) { 
    return 'Blast off!'; 
  }
 
  return `${number} ... \n` + countdownScript(number - 1)
}
```
*Рисунок 2*. Recursive algorithm of the countdown timer.

Using [recursive function](http://en.wikipedia.org/wiki/Recursion_%28computer_science%29) is one more way to solve the same problem. On Figure 2 we solve the problem with the creation of the countdown timer with the help of recursion.

One of the most important characteristics of the recursive method is the *base case*. It's a popular solution to the problem. We know that once the variable number is less than 1, we get "Blast off".  In other words, we have the base case; if the number, passed down as the argument, is less than 1, we just return the string `Blast off!`.

Question "What is the base case?" is the question that we need to ask ourselves every time when we want to solve the problem recursively. Lots of recursive algorithms have only one base case but they also might have several base cases.

In our base case we know what to do if an integer equals 0 or if it's negative. Otherwise, we need to keep adding to the`script`. We do it using small steps. We don't know for sure how the whole `script` but we know which one will look like this: `${number} ... \ n`.

We just need to combine this section with the rest of the creation of the countdown timer. In order to generate the rest of the script, we have to use our `countdownScript` method again - this time the number we get is less than before. It is one of the most obvious characteristics of the recursive method: it calls itself.

The method will keep calling itself until we get our base case. By that time we will have all the pieces of the script and we can combine them.

## Calculation of the factorial
 
```
0! = 1
1! = 1
2! = 1 * 2
3! = 1 * 2 * 3
4! = 1 * 2 * 3 * 4
```

*Figure 3*. Example of the factorial calculations

What is the [factorial](http://en.wikipedia.org/wiki/Factorial)? For the given number, factorial is the multiplication of all the positive integers, less or equal to the number itself. For instance, 2! (or the factorial of 2)) equals `1*2;` `3!=1*2*3;` `4!=1*2*3*4`. (see. Figure 3). We will define factorial as `n!`.

Though it might seem that this is too theoretical, calculating factorial has real world applications. For example, calculating factorial will tell us in how many ways we can organize a set of elements. For instance, you have ten books on a bookshelf, i.e. several different ways to organize them. If you have a set of elements `n`, then there is ` n! ` number of ways to organize them.

Let's go back to Figure 3, and you will notice that the factorial of 3, i.e 3! will be calculated as `3*2!`  Same with 3! and 4! - every number includes multipliers 3, 2 and 1.

```
0! = 1
1! = 1 * 0!
2! = 2 * 1!
3! = 3 * 2!
4! = 4 * 3!
```

*Figure 4*. Calculating numbers using factorial in terms of another factorial.

Because of that, we might say, for example, that the factorial of 4 (4!) equals 4 multiplied by the factorial of 3 (`4!=3!*4`). Or, more generally, the factorial of any number equals this number multiplied by the factorial of the previous number (see Figure 4).

*Note:* By convention, the factorial of 0 equals 1.


### Release 0. Iterative calculation of the factorial

You will start with writing a function that will calculate the factorial of a given number using the iterative method. The method must accept any non-negative whole number and calculate the factorial of that number.

### Release 1. Recursive calculation of the factorial

Now you need to write a function that will calculate the factorial of a given number using recursion. Try writing tests by yourself, at least for testing either one of the methods. Use jest.

### Release 2. Nesting 

What if you use recursion to calculate the factorial of 5 000? In order to calculate it, the method will be called again for number 4 999, 4 998 and so on till 1. Depending on the implementation, your method will call itself approximately 5 000 times.

Each of these method calls works in its own tiny part of the computer memory. And every call takes up this memory till the method starts a new cycle. When we call `factorialRecursive(5000)`, our method will not be starting a new cycle until it preliminarily calculates `factorialRecursive(4999)`, that cannot be calculated till the calculation of `factorialRecursive(4998)` and so on. Gradually we will use up more and more memory space.

Each of these 5 000 method calls takes up a small part of the memory space until we get to the base case and start returning values. `factorialRecrusive(1)` will start the cycle again which returns `factorialRecursive(2)`, which in its turn returns  `factorialRecursive(3)` and so on till all the method calls will return values and the memory space will be freed.

Try out different numbers as arguments to determine the highest value that our recursive method might take in as an argument. Which error do you get? What does it mean?


## Conclusion

Iteration and recursion are different types of implementation. Each one of them does exactly the same thing as the other. Which one to choose? Later on, when you've practiced writing more code and you've become more confident in using different methods, the choice will seem more natural to you. Later we will dive into some problems that we might face when using iterative and recursive methods.