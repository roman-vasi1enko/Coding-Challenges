// Task - Did she say hello?
  // You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
  // Write a simple function to check if the string contains the word 'hello' in different languages.

  // These are the languages of the possible people you met the night before:
  // hello - english
  // ciao - italian
  // salut - french
  // hallo - german
  // hola - spanish
  // ahoj - czech republic
  // czesc - polish
  
  // Notes:
  // you can assume the input is a string.
  // you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
  // function should be case insensitive to pass the tests

    // Solution
    function isHello(message) {
      let greetings = ['hello', 'ciao', 'salut','hallo','hola', 'ahoj', 'czesc']
      let msgArr = message.split(' ')
      
      for (let i = 0; i < greetings.length; i++) {
        for (let k = 0; k < msgArr.length; k++) {
          if (msgArr[k].toLowerCase().includes(greetings[i])) {
            return true;
          }
        }
      }
      
      return false;
      
    
    console.log(isHello('hello'), 'true')
    console.log(isHello('ciAo'), 'true')
    console.log(isHello('stroller'), 'false')
    console.log(isHello('hellOween'), 'true')