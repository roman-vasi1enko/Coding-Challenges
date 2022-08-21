// Task - Love vs friendship
  // If　a = 1, b = 2, c = 3 ... z = 26

  // Then l + o + v + e = 54

  // and f + r + i + e + n + d + s + h + i + p = 108

  // So friendship is twice as strong as love :-)

  // Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

  // The input will always be made of only lowercase letters and will never be empty.

    // Solution
    function wordsToMarks(string){
      return string.split('').reduce((sum, num) => sum + num.charCodeAt() - 96, 0)
    }

    // Tests
    wordsToMarks("attitude") // 100
    wordsToMarks("friends") // 75
    wordsToMarks("family") // 66
    wordsToMarks("selfness") // 99
    wordsToMarks("knowledge") // 96