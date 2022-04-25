// Task 1 - USD => CNY
    // Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

    // Examples (Input -> Output)
    // * 15  -> '101.25 Chinese Yuan'
    // * 465 -> '3138.75 Chinese Yuan'
    // The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

        // Solution
        function usdcny(usd) {
            return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;  
        }

        // Tests 
        usdcny(15) //'101.25 Chinese Yuan'
        usdcny(465) //'3138.75 Chinese Yuan'


// Task 2 - Twist
        // Add the string "100devs" to an array 1,000 times.

            // Solution 
            let websites = [];
            for (let i = 0; i < 1000; i++) {
            websites.push('codewars');
            }


// Task 3 - Terminal game combat function
    // Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

        // Solution
        function combat(health, damage) {
            return health > damage ? health - damage : 0;
        }

        // Tests
        combat(100, 5) //95
        combat(20, 30) //0


