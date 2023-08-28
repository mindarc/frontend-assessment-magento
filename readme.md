# Instructions to run the project
* I have created `index.html` inside src folder, which will have two buttons to run the two exercises.
* For `exercise 1`, I tried to make it as simple as possible and used only `HTML`, and `CSS`, there was no need to use any `JS`.
* For `exercise 2`, I used `HTML`, `CSS`, and `vanilla JS`.

# Explantaion
1. 'b' + 'a': Both are strings, so they get concatenated to form "ba".
2. \+ 'a': The unary plus (+) operator tries to convert the string 'a' to a number. Since 'a' is not a number, it returns NaN which is Not a Number.
3. ba' + NaN: The result of the first step "ba" (a string) is concatenated with NaN (Not a Number), resulting in "baNaN".
4. 'baNaN' + 'a': Finally, the string "baNaN" is concatenated with the string 'a', resulting in "baNaNa".
5. Which then uses `.toLowerCase()` method as it says, it lowercases the string resulting in "banana".