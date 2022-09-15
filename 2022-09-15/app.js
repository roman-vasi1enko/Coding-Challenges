// Task - shorter concat [reverse longer]
  // Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

  // In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

  // Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
  // If a and b have the same length treat a as the longer producing b+reverse(a)+b

    // Solution
    function shorter_reverse_longer(a,b){
      let insertParam = (c, d) => d.concat(c.split('').reverse().join('')).concat(d)
      
      return a.length > b.length || a.length == b.length ? insertParam(a, b) : insertParam(b, a);  
    }

    // Tests
    shorter_reverse_longer("first", "abcde") // "abcdetsrifabcde"
    shorter_reverse_longer("hello", "bau") // "bauollehbau"
    shorter_reverse_longer("abcde", "fghi") // "fghiedcbafghi"