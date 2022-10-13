// Task 1 - Square an argument
  // Now you have to write a function that takes an argument and returns the square of it.

    // Solution
    let square = n => n ** 2;

    // Test
    square(3) // 9


// Task 2 - Keep up the hoop
  // Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

  // Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

  // If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
  // If he doesn't get 10 hoops, return the string "Keep at it until you get it".

    // Solution
    function hoopCount (n) {
      return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
    }

    // Tests
    hoopCount(3) //"Keep at it until you get it" 
    hoopCount(11) //"Great, now move on to tricks"


// Task 3 - Calculate Messi Goals
  // Use variables to find the sum of the goals Messi scored in 3 competitions

  // Information
  // Messi goal scoring statistics:

  // La Liga	43
  // Champions League	10
  // Copa del Rey	5

  // Create these three variables and store the appropriate values using the table above:
  // laLigaGoals
  // championsLeagueGoals
  // copaDelReyGoals
  // Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

    // Solution
    let laLigaGoals = 43;
    let championsLeagueGoals = 10;
    let copaDelReyGoals = 5;

    let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;