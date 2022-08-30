// Task - Switcheroo
  // Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

  // Example:
  // 'acb' --> 'bca'
  // 'aabacbaa' --> 'bbabcabb'

    // Solution
    function switcheroo(x){
      return x.split('').map(char => char === 'a' ? char = 'b' : char === 'b' ? char = 'a' : 'c').join('');
    }

    // Tests
    switcheroo('abc') // 'bac'
    switcheroo('aaabcccbaaa') // 'bbbacccabbb'
    switcheroo('ccccc') // 'ccccc'