const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkLetter(letter) {
    letter = letter.toLowerCase();

    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(letter + " is a vowel.");
            break;
        default:
            if (letter >= 'a' && letter <= 'z') {
                console.log(letter + " is a consonant.");
            } else {
                console.log("Please enter a valid letter.");
            }
            break;
    }
}

function askForLetters() {
    rl.question('Enter a letter or letters (or type "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Goodbye!');
            rl.close();
        } else {
            for (let i = 0; i < input.length; i++) {
                checkLetter(input[i]);
            }
            askForLetters();
        }
    });
}

askForLetters();
