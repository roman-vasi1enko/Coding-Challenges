// Task 1 - Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

  // Solution
  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( (e, i, w) => w.indexOf(e) == w.lastIndexOf(e) ? '(' : ')')
      .join('');
  }

  // Tests
  duplicateEncode("din") //"((("
  duplicateEncode("recede") //"()()()"
  duplicateEncode("Success") //")())())","should ignore case"
  duplicateEncode("(( @") //"))(("


// Task 2 - Count devs
  // You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
  // Your task is to return the number of JavaScript developers coming from Europe.
  // For example, given the following list:

  // var list1 = [
  //   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  //   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  //   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  //   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  // ];
  // your function should return number 1.
  // If, there are no JavaScript developers from Europe then your function should return 0.

  // Notes:
  // The format of the strings will always be Europe and JavaScript.
  // All data will always be valid and uniform as in the example above.

    //Solution 1
    function countDevelopers(list) {
      let devs = 0;
      list.forEach(obj => obj.continent === 'Europe' && obj.language === 'JavaScript' ? devs++ : devs);
      return devs;
    }

    //Solution 2
    function countDevelopers(list) {
      return list.filter(obj => obj.continent === 'Europe' && obj.language === 'JavaScript').length;
    }


    // Tests
    const list1 = [
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
      { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
      { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ]
    countDevelopers(list1); //1

    const list2 = [
      { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
      { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
    ];
    countDevelopers(list2); //0