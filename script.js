const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForDay() {
    rl.question("Enter a day number (1-7): ", (day) => {
        day = parseInt(day);

        switch (day) {
            case 1:
                console.log("Today is Monday. Workout time!");
                break;
            case 2:
                console.log("Today is Tuesday. Study some coding!");
                break;
            case 3:
                console.log("Today is Wednesday. Go for a run!");
                break;
            case 4:
                console.log("Today is Thursday. Read a new book!");
                break;
            case 5:
                console.log("Today is Friday. Have a movie night!");
                break;
            case 6:
                console.log("Today is Saturday. Go out and have fun!");
                break;
            case 7:
                console.log("Today is Sunday. Rest and recharge!");
                break;
            default:
                console.log("Invalid day number! Please enter a number between 1 and 7.");
                askForDay();
                return;
        }

        rl.close();
    });
}

askForDay();
