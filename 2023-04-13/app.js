// Task - Return a string's even characters.
  // Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

  // For example:

  // "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
  // "a"             --> "invalid string"

    // Solution
    function evenChars(string) {
      let arr = string.split('')

      return arr.length < 2 || arr.length > 100 ? "invalid string" : arr.filter((char, i) => i % 2);
    }

    // Tests
    console.log(evenChars ("1234"), ["2", "4"])
    console.log(evenChars (";;;--"), [";", "-"])
    console.log(evenChars ("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"])
    console.log(evenChars ("aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva"), "invalid string")
    console.log(evenChars ("a"), "invalid string")
    console.log(evenChars (""), "invalid string")