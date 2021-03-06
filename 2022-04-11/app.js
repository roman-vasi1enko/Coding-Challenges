// Task 1 - The Feast Of Many Beasts
    // All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

    // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

    // Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

        // Solution
        function feast(beast, dish) {
            return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false;
          }

        // Tests
        feast("great blue heron", "garlic naan") // true
        feast("brown bear", "bear claw") // false

// Task 2
    //altERnaTIng cAsE <=> ALTerNAtiNG CaSe
    //altERnaTIng cAsE <=> ALTerNAtiNG CaSe
    //Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
    // "hello world".toAlternatingCase() === "HELLO WORLD"
    // "HELLO WORLD".toAlternatingCase() === "hello world"
    // "hello WORLD".toAlternatingCase() === "HELLO world"
    // "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"

          // Solution
          String.prototype.toAlternatingCase = function () {
            return this.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
          }

          // Tests
          'hello world'.toAlternatingCase() // 'HELLO WORLD'
          'HeLLo WoRLD'.toAlternatingCase() // 'hEllO wOrld'