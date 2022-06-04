// Task 1 - Reversed words
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

  // Solution
  function reverseWords(str){
    return str.split(' ').reverse().join(' ')
  }

  // Tests
  reverseWords("hello world!"                 ) // "world! hello"
  reverseWords("yoda doesn't speak like this" ) // "this like speak doesn't yoda"
  reverseWords("foobar"                       ) // "foobar"
  reverseWords("kata editor"                  ) // "editor kata"
  reverseWords("row row row your boat"        ) // "boat your row row row"