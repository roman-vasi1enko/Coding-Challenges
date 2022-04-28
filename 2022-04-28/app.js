// Task 1 - Count letters
    // Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

    // If no occurrences can be found, a count of 0 should be returned.

    // ("Hello", "o")  ==>  1
    // ("Hello", "l")  ==>  2
    // ("", "z")       ==>  0
    // Notes:

    // The first argument can be an empty string
    // The second string argument will always be of length 1

        // Solution
        function strCount(str, letter){  
            let arr = str.split('');
            let counter = 0;
            arr.forEach(e => e === letter ? counter++ : counter);
            return counter;
        }

        // Solution 2
        let strCount = (str, letter) => str.split('').filter(e => e === letter).length;

        // Tests
        strCount('Hello', 'o') //1
        strCount('Hello', 'l') //2
        strCount('', 'z') //0


// Task 2 - I love you, a little , a lot, passionately ... not at all
    // Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    // I love you
    // a little
    // a lot
    // passionately
    // madly
    // not at all
    // When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

    // Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

        //Solution 1
        function howMuchILoveYou(nbPetals) {
            let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
            return phrases[(nbPetals - 1) % 6];
        }

        // Solution 2
        function howMuchILoveYou(nbPetals) {
            let phrase = {    
              0: "not at all",
              1: "I love you",
              2: "a little",
              3: "a lot",
              4: "passionately",
              5: "madly"
            }
            return phrase[nbPetals%6]
        }

        // Tests
        howMuchILoveYou(7) //"I love you"
        howMuchILoveYou(3) //"a lot"
        howMuchILoveYou(6) //"not at all"