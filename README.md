# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

## Answer

Looking at the version of the normal recursive Fibonacci from GeeksforGeeks, 
```
function fibonacci(n) {
    if (n &lt;= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```
we can see that the recursive Fibonacci is called 2 times for each n. Or $\Theta(2^n)$.

The complexity of the tail-recursive Fibonacci has one call for each value of n. This means that the time complexity of the tail-recursive value is $\Theta(n)$.

The normal recursive Fibonacci is almost the worst possible asymptotic complexity, and the tail-recursive is far better. This is because tail-recursive functions make use of accumulators to make sure that the last thing done in the function is always the recursive call. This eliminates multiple recursive calls and keeps things much more efficient. The non-tail recursive version uses two recursive calls for each, which make their own two, then their own two, etc. The tail version only uses a line of recursive calls. This is far better in both memory and time complexity. 

## Sources and Plagarism Statement
Got the test code from KobeLimon21's repository. Used this video [Neso Academy](https://www.youtube.com/watch?v=HIt_GPuD7wk&ab_channel=NesoAcademy) and this article [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_sequence) to help me ensuring I used the proper methods for tail recursion and fibonacci.

Glancing through other repositories, almost every single one has the same exact implementation. I did not look at any other's code prior to writing my own, I think this is just to do with the relative simplicity of the coding portion of this assignment. 
I have left comments explaining my process to help with any questions.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
