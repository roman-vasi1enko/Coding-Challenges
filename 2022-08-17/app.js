// Task - Bumps in the Road
    // Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

    // Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

        // Solution
        function bump(x){
            return x.split('n').length <= 15 ? 'Woohoo!' : 'Car Dead'
        }

        // Tests
        bump("n") // "Woohoo!"
        bump("__nn_nnnn__n_n___n____nn__nnn") // "Woohoo!"
        bump("nnn_n__n_n___nnnnn___n__nnn__") // "Woohoo!"
        bump("_nnnnnnn_n__n______nn__nn_nnn") // "Car Dead"
        bump("______n___n_") // "Woohoo!"