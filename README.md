# Bubblesort Kata

Write a programm that does a bubble sort

create a nodejs programm that takes one commandline
argument which should be a file with one integer on every line.

## Bubblesort

you have an array of unsorted numbers. you start at the first number and check if the next
number is smaller or bigger

if it is smaller, you swap places and check with the next highest number until the end.

if it is bigger you stop and take that number and go on checking with that.

after the first round the biggest number is at the rightmost place.

then you start again, until you touched every number.

Make one solution with and one without classes.

Make it so it extends the builtin Array (bad habit, but for understanding how that works).

How can you make it as readable as possible.

How long does your solution take with bigger arrays? (I provided some in the ressources folder, try the time command like `time npm start`)

## Additionals

where is room for improvement/optimization?

What if the array is already sorted? Or if it looks like that: `[ 5, 1, 2, 3, 4 ]` and we can skip after the first run?

How would you go at it and make it sort biggest to smallest?

What do you need to do to make it sort characters or words?

What would you need to do to ignore case?

How can we make it sort e.g. special characters in an order we specify like: `# + = & / $ ! - :`