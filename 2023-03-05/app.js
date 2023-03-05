// Task - Changing letters
  // When provided with a String, capitalize all vowels

  // For example:
  // Input : "Hello World!"
  // Output : "HEllO WOrld!"
  // Note: Y is not a vowel in this task.

    // Solution
    function swap(string) {
      let vowels = 'aeiouAEIOU'
      return string.split('').map(char => vowels.includes(char) ? char.toUpperCase() : char).join('')
    }

    // Tests
    console.log(swap(""), "");
		console.log(swap("   @@@"), "   @@@");
		console.log(swap("HelloWorld!"), "HEllOWOrld!");
		console.log(swap("Sunday"), "SUndAy");
		console.log(swap("Codewars"), "COdEwArs");
		console.log(swap("Monday"), "MOndAy");