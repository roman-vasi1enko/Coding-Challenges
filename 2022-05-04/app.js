// Task 1 - Correct the mistakes of the character recognition software

  // Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
  // When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
  // Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
  // S is misinterpreted as 5
  // O is misinterpreted as 0
  // I is misinterpreted as 1
  // The test cases contain numbers only by mistake.

    // Solution
    let correct = string => string.split('').map(e => e === '0' ? e = 'O' : e === '1' ? e = 'I' : e === '5' ? e = 'S' : e).join('');

    // Tests
    correct("L0ND0N") //"LONDON"
    correct("DUBL1N") //"DUBLIN"
    correct("51NGAP0RE") //"SINGAPORE"
    correct("BUDAPE5T") //"BUDAPEST"
    correct("PAR15") //"PARIS"


// Task 2 - Welcome!
    // Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

    // The Task
    // Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
    // Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
    // The Database
    // english: 'Welcome',
    // czech: 'Vitejte',
    // danish: 'Velkomst',
    // dutch: 'Welkom',
    // estonian: 'Tere tulemast',
    // finnish: 'Tervetuloa',
    // flemish: 'Welgekomen',
    // french: 'Bienvenue',
    // german: 'Willkommen',
    // irish: 'Failte',
    // italian: 'Benvenuto',
    // latvian: 'Gaidits',
    // lithuanian: 'Laukiamas',
    // polish: 'Witamy',
    // spanish: 'Bienvenido',
    // swedish: 'Valkommen',
    // welsh: 'Croeso'

    // Possible invalid inputs include:
    // IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
    // IP_ADDRESS_NOT_FOUND - ip address not in the database
    // IP_ADDRESS_REQUIRED - no ip address was supplied

      // Solution 
      function greet(language) {
        let message = {
          english: 'Welcome',
          czech: 'Vitejte',
          danish: 'Velkomst',
          dutch: 'Welkom',
          estonian: 'Tere tulemast',
          finnish: 'Tervetuloa',
          flemish: 'Welgekomen',
          french: 'Bienvenue',
          german: 'Willkommen',
          irish: 'Failte',
          italian: 'Benvenuto',
          latvian: 'Gaidits',
          lithuanian: 'Laukiamas',
          polish: 'Witamy',
          spanish: 'Bienvenido',
          swedish: 'Valkommen',
          welsh: 'Croeso'
        }
        
        return message[language] || 'Welcome';
      }

      // Tests
      greet('english') //'Welcome'
      greet('dutch') //'Welkom'
      greet('IP_ADDRESS_INVALID') //'Welcome'