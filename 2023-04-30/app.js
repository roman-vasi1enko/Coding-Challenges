// Task - makeBackronym
  // back·ro·nym
  // An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

  // "Biodiversity Serving Our Nation", or BISON

  // (from https://en.oxforddictionaries.com/definition/backronym)

  // Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

  // The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

  // dict["P"] == "perfect"
  // Examples
  // "dgm" ==> "disturbing gregarious mustache"

  // "lkj" ==> "literal klingon joke"

    // Solution
    function makeBackronym(string){
      return string.toUpperCase().split('').map(w => dict[w]).join(' ');
    }

    // Tests
    const testCases = [
      ['dgm', 'disturbing gregarious mustache'],
      ['lkj', 'literal klingon joke'],
      ['interesting', 'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious'],
      ['codewars', 'confident oscillating disturbing eager weird awesome rant stylish'],
    ];
    for(const [input, expected] of testCases) {
      assert.strictEqual(makeBackronym(input), expected);
    };