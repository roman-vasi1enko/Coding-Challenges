// Task 1 - Hello, Name or World!
  // Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

  // Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

  // Examples:

  // * With `name` = "john"  => return "Hello, John!"
  // * With `name` = "aliCE" => return "Hello, Alice!"
  // * With `name` not given 
  //   or `name` = ""        => return "Hello, World!"

    // Solution
    const hello = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

  // Tests
  hello('alice') // 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'"
  hello() // 'Hello, World!', "returns 'Hello, World!' when name is not given"
  hello('') // 'Hello, World!', "returns 'Hello, World!' when name is an empty string"