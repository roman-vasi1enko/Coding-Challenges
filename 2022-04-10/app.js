// Task 1
    // Rock Paper Scissors
    // Let's play! You have to return which player won! In case of a draw return Draw!.

    // Examples:

    // rps('scissors','paper') // Player 1 won!
    // rps('scissors','rock') // Player 2 won!
    // rps('paper','paper') // Draw!

        // Solution
        const rps = (p1, p2) => {
            if (p1 === p2) {
            return 'Draw!'
            }
            else if ( (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors') ) {
            return 'Player 1 won!'
            }
            else {
            return 'Player 2 won!'
            }
        };
        
        // Tests
        rps('rock', 'scissors') // Player 1 won!
        rps('scissors', 'rock') // Player 2 won!
        rps('rock', 'rock') // Draw!

// Task 2 - Logic Drills: Traffic light
    // You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

    // Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

    // For example, update_light('green') should return 'yellow'.

        // Solution 1:
        function updateLight(current) {
            return current === 'green' ? 'yellow' : ('yellow' ? 'red' : 'green')
        }

        // Solution 2 (refactored):
        let updateLight = current => current === 'green' ? 'yellow' : (current === 'yellow' ? 'red' : 'green')

        // Tests
        updateLight("green"); // 'yellow'
        updateLight("yellow"); // 'red'
        updateLight("red"); // 'green'

// Task 3 - Grade Book
    // Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

    // Numerical Score	Letter Grade
    // 90 <= score <= 100 - 'A'
    // 80 <= score < 90	- 'B'
    // 70 <= score < 80	- 'C'
    // 60 <= score < 70	- 'D'
    // 0 <= score < 60	- 'F'

        // Solution
        function getGrade (s1, s2, s3) {
            let avg = (s1 + s2 + s3) / 3;
            return avg >= 90 ? 'A' : avg >= 80 ? 'B' : avg >= 70 ? 'C' : avg >= 60 ? 'D' : 'F';
        }

        // Tests
        getGrade(95,90,93) // 'A'
        getGrade(70,70,100) // 'B'
        getGrade(70,70,70) // 'C'
        getGrade(65,70,59) // 'D'
        getGrade(44,55,52) // 'F'

// Task 4 - Double as old
    // Your function takes two arguments:

    // current father's age (years)
    // current age of his son (years)
    // Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

        // Solution
        function twiceAsOld(dadYearsOld, sonYearsOld) {
            let doubleSonAge = sonYearsOld * 2;
            return dadYearsOld >= doubleSonAge ? dadYearsOld - doubleSonAge : doubleSonAge - dadYearsOld;
        }
        // Tests
        twiceAsOld(36,7) // 22
        twiceAsOld(55,30) // 5
        twiceAsOld(42,21) // 0
        twiceAsOld(29,0) // 29