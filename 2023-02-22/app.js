// Task - Remove consecutive duplicate words
  // Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

  // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

  // --> "alpha beta gamma delta alpha beta gamma delta"
  // Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

    // Solution
    function removeConsecutiveDuplicates(string) {
      if (!string.length) return '';
      
      let result = [];
      string.split(' ').map((w,i,a) => w !== a[i+1] ? result.push(w) : w)
      
      return result.join(' ');
    }

    // Tests
    console.log(removeConsecutiveDuplicates(""), "");
		console.log(removeConsecutiveDuplicates("alpha"), "alpha");
		console.log(removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha"), "alpha alphaalpha alphaalphaalpha");