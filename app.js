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
        console.log("Correct!");
        document.write("<p>✅ " + question + " Correct!</p>");
        return 1;
    } else {
        console.log("Wrong! The correct answer is " + correctAnswer);
        document.write("<p>❌ " + question + " The correct answer is " + correctAnswer + ".</p>");
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
        feedback = "Excellent! You got all correct! 🎉";
        break;
    case 2:
        feedback = "Good job! You got 2 out of 3! 👍";
        break;
    case 1:
        feedback = "You got 1 out of 3. Keep practicing! 💪";
        break;
    default:
        feedback = "Better luck next time! Try again! 😅";
}

console.log("Final Score: " + score + "/3");
document.write("<h3>" + feedback + "</h3>");