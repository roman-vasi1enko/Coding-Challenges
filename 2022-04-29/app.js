// Task 1 - Replace all vowel to exclamation mark in the sentence
    // Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

    // Examples
    // replace("Hi!") === "H!!"
    // replace("!Hi! Hi!") === "!H!! H!!"
    // replace("aeiou") === "!!!!!"
    // replace("ABCDE") === "!BCD!"

        // Solution 1
        function replace(s){
            let arr = s.split('');
            for (let i = 0; i < arr.length; i++) {
              if (arr[i].toLowerCase() === 'a' || arr[i].toLowerCase() === 'e' || arr[i].toLowerCase() === 'i' || arr[i].toLowerCase() === 'o' || arr[i].toLowerCase() === 'u') {
                arr[i] = '!';
              }
            }
            return arr.join('');
        }

        // Solution 2
        const replace = s => s.replace(/[aeiou]/gi, '!');

        // Tests
        replace("!Hi! Hi!") //"!H!! H!!"
        replace("Hi!") //"H!!"
        replace("aeiou") //"!!!!!"
        replace("ABCDE") //"!BCD!"


// Task 2 - How old will I be in 2099?
        //Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

        // Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

        // Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

        // "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

            // Solution
            function  calculateAge(y1, y2) {
                let age = 0;
                if (y1 > y2) {
                  age = y1 - y2;
                  return age === 1 ? 'You will be born in 1 year.' : `You will be born in ${age} years.`;
                }
                else if (y1 < y2) {
                  age = y2 - y1;
                  return age === 1 ? 'You are 1 year old.' : `You are ${age} years old.`;
                }
                else {
                  return 'You were born this very year!';
                }
            }

            // Tests
            calculateAge(2012, 2016) //"You are 4 years old."
            calculateAge(1989, 2016) //"You are 27 years old."
            calculateAge(2000, 2090) //"You are 90 years old."
            calculateAge(2000, 1990) //"You will be born in 10 years."
            calculateAge(3400, 3400) //"You were born this very year!")
            calculateAge(900, 2900) //"You are 2000 years old."
            calculateAge(2010, 1990) //"You will be born in 20 years."
            calculateAge(2010, 1500) //"You will be born in 510 years."
            calculateAge(2011, 2012) //"You are 1 year old."
            calculateAge(2000, 1999) //"You will be born in 1 year."