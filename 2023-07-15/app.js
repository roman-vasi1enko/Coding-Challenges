// Task - Replace every nth
  // Write a method, that replaces every nth char oldValue with char newValue.

  // Inputs
  // text: the string to modify
  // n: change the target letter every nth occurrencies
  // old_value (or similar): the targetted character
  // new_value (or similar): the character to use as replacement
  // Note for untyped languages: all inputs are always valid and of their expected type.

  // Rules
  // Your method has to be case sensitive!
  // If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
  // Example:
  // n:         2
  // old_value: 'a'
  // new_value: 'o'
  // "Vader said: No, I am your father!"
  //   1     2          3        4       -> 2nd and 4th occurence are replaced
  // "Vader soid: No, I am your fother!"
  // As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

    // Solution
    function replaceNth(text, n, oldValue, newValue) {  
      let counter = 0;
      if (n <= 0) return text;
      
      return text.split('').map((item, index) => {
        if (item === oldValue) counter++;
        if (item === oldValue && counter % n === 0) return newValue;
        else return item;
      }).join('');
    }

    // Tests
    console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'), "Vader soid: No, I am your fother!");
    console.log(replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'), "Vader said: No, I am your fother!");
    console.log(replaceNth("Vader said: No, I am your father!", 6, 'a', 'o'), "Vader said: No, I am your father!");
    console.log(replaceNth("Vader said: No, I am your father!", 0, 'a', 'o'), "Vader said: No, I am your father!");
    console.log(replaceNth("Vader said: No, I am your father!", -2, 'a', 'o'), "Vader said: No, I am your father!");
    console.log(replaceNth("Vader said: No, I am your father!", 1, 'i', 'y'), "Vader sayd: No, I am your father!");
    console.log(replaceNth("Luke cries: Noooooooooooooooo!", 6, 'o', 'i'), "Luke cries: Noooooioooooioooo!");