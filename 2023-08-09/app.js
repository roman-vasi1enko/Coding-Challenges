// Task - Break camelCase
  // Complete the solution so that the function will break up camel casing, using a space between words.

  // Example
  // "camelCasing"  =>  "camel Casing"
  // "identifier"   =>  "identifier"
  // ""             =>  ""

    // Solution
    function solution(string) {
      return [...string].map(char => char === char.toUpperCase() ? ` ${char}` : char).join('')
    }

    // Tests
    console.log(solution('camelCasing'), 'camel Casing')
    console.log(solution('camelCasingTest'), 'camel Casing Test')