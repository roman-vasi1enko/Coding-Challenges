// Task 1 - Can they code in the same language?
  //You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

  // Your task is to return either:
    // true if all developers in the list code in the same language; or
    // false otherwise.
    // For example, given the following input array:

    var list1 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
      { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
    ];
  // your function should return true.

  // Notes:
  // The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
  // The input array will always be valid and formatted as in the example above.

    // Solution
    function isSameLanguage(list) {
      return list.every(dev => dev.language === list[0].language);
    }

    // Tests
    let list1 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
      { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
    ];
    
    let list2 = [
      { firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
      { firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
      { firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' },
    ];
    
    isSameLanguage(list1) //true
    isSameLanguage(list2) //false