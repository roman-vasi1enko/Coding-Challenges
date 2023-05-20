// Task - Num of letters in city name
  // You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

  // For example:
  // "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
  // As you can see, the letter c is shown only once, but with 2 asterisks.

  // The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

  // Note that the return string must list the letters in order of their first appearance in the original string.

  // More examples:
  // "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
  // "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

    // Solution
    function getStrings(city) {
      city = city.toLowerCase();
      let obj = {};
      let str = '';
  
      for (let char of city) {
          if (!(char in obj)) {
              obj[char] = '*';
          } else {
              obj[char] += '*';
          }
      }
  
      for (let key in obj) {
          if (key !== ' ') {
              str += key + ':' + obj[key] + ',';
          }
      }
  
      return str.substring(0, str.length - 1);
  }

    // Tests
    console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");