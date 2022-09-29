// Task - Alternate capitalization
  // Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

  // For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

  // The input will be a lowercase string with no spaces.

    // Solution
    function capitalize(s){
      let result = [];
      result.push(s.split('').map((x,i) => i % 2 === 0 ? x.toUpperCase() : x).join(''));
      result.push(s.split('').map((x,i) => i % 2 !== 0 ? x.toUpperCase() : x).join(''));
      return result;
    };

    // Tests
    capitalize("abcdef") // ['AbCdEf', 'aBcDeF']
    capitalize("codewars") // ['CoDeWaRs', 'cOdEwArS']
    capitalize("abracadabra") // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
    capitalize("codewarriors") // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']