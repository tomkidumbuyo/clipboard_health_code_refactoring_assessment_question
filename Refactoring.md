# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
first of all i had to break down the function. A function must serve one purpose well so instead of having one function for 3 things, it makes sense to have 3 function doing on thing each. second i moved the constants to the top of the document. constant are to be used throughout the project hence they need not to be located inside a function. i removed all the nested if statements since they are very hard to read. Since i needed the constants in the test files i changed the way i export my function. also to create a uniform function definition between the functions that i export and the one that i do not export.
