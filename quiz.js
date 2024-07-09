 // Define the checkAnswer function
function checkAnswer() {
    // Define the correct answer
    let correctAnswer = "4";

    // Retrieve the user's answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if a radio button is checked
    if (userAnswer) {
        userAnswer = userAnswer.value;
        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

