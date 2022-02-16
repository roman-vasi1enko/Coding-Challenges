// Task 1 - validate the username
  // Write a simple regex to validate a username. Allowed characters are:
  // lowercase letters,
  // numbers,
  // underscore

  // Length should be between 4 and 16 characters (both included).

    // Solution
    function validateUsr(username) {
      /**
        - `^`        Start from the beginning of the string.
        - `[]`       Allow any character specified, including...
        - `a-z`      anything from a to z,
        - `0-9`      anything from 0 to 9,
        - `_`        and underscore.
        - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
        - `$`        End the string right after specified amount of allowed characters is given.
      */
      const validator = /^[a-z0-9_]{4,16}$/;
      
      return validator.test(username);
    }

    // Tests
    validateUsr('asddsa') // true
    validateUsr('a') // false
    validateUsr('Hass') // false
    validateUsr('Hasd_12assssssasasasasasaasasasasas') // false
    validateUsr('') // false
    validateUsr('____') // true
    validateUsr('012') // false
    validateUsr('p1pp1') // true
    validateUsr('asd43 34') // false
    validateUsr('asd43_34') // true