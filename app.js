// concatenated string
let welcomeMessage = "Simple " + "Math Quiz!";
console.log(welcomeMessage);
document.write("<h2>" + welcomeMessage + "</h2>");

// string method
function askQuestion(question, correctAnswer) {
    let userAnswer = prompt(question);
    userAnswer = userAnswer.toLowerCase().trim();
    
    // number method
    let numericAnswer = parseInt(userAnswer);

    // "if"
    if (numericAnswer === correctAnswer) {
        document.write("<p>" + question + " Correct!</p>");
        return 1;
    } else {
        document.write("<p>" + question + " The correct answer was ... " + correctAnswer + "</p>");
        return 0;
    }
}

let score = 0;
score += askQuestion("What is 5 + 3?", 8);
score += askQuestion("What is 12 ÷ 4?", 3);
score += askQuestion("What is the square root of 16?", 4);

// "switch"
let feedback;
switch (score) {
    case 3:
        feedback = "Your Score Is . . . 3/3!";
        break;
    case 2:
        feedback = "Your Score Is . . . 2/3!";
        break;
    case 1:
        feedback = "Your Score Is . . . 1/3!";
        break;
    default:
        feedback = "Your Score Is . . . 0/3!";
}

document.write("<h3>" + feedback + "</h3>");