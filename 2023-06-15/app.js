// Task - Password maker
  // One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

  // Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

  // instead of including i or I put the number 1 in the password;
  // instead of including o or O put the number 0 in the password;
  // instead of including s or S put the number 5 in the password.
  // Examples:
  // "Give me liberty or give me death"  --> "Gml0gmd"
  // "Keep Calm and Carry On"            --> "KCaC0"

    // Solution
    function makePassword(phrase) {
      let map = {i:1, o:0, s:5}
      
      return phrase.split(' ').map(word => {
        let c = word[0].toLowerCase();
        if(c in map) return map[c];
        return word[0];
      }).join('')
    }

    // Tests
    console.log(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
    console.log(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");