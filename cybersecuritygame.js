const questions = [
    {
        question: "Is this email a phishing attempt?",
        options: ["Yes", "No"],
        answer: "Yes", // Correct answer
        feedback: "Phishing emails often have urgent language and suspicious links."
    },
    {
        question: "Is this password secure?",
        options: ["1234", "P@ssw0rd!", "abcde12345"],
        answer: "P@ssw0rd!", // Correct answer
        feedback: "A good password should include uppercase, lowercase, numbers, and symbols."
    },
    {
        question: "What does the term malware refer to?",
        options: [" A type of anti-virus software", "A computer that is running slowly", "Software designed to damage or exploit a computer system","A backup file for your computer"],
        answer: "Software designed to damage or exploit a computer system", // Correct answer
        feedback: "Great job! You got it right—**malware** is indeed harmful software designed to exploit or damage systems. Understanding this helps you stay aware of potential threats and protect your devices. Keep up the good work, and keep learning about cybersecurity! You're on the right track!."

    },
    {
        question: "What does pharming refer to in cyberattacks?",
        options: ["An attempt to obtain private information through emails",
             "Redirecting users from legitimate websites to fake ones without their knowledge",
             "A method of encrypting web traffic",
             "A type of social engineering attack",],
        answer: "Redirecting users from legitimate websites to fake ones without their knowledge", // Correct answer
        feedback: "very  good yes Redirecting users from legitimate websites to fake ones without their knowledge."

    },

];

let currentQuestionIndex = 0;
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const feedbackDiv = document.getElementById("feedback");
    if (selectedOption === question.answer) {
        feedbackDiv.innerText = "Correct! " + question.feedback;
    } else {
        feedbackDiv.innerText = "Incorrect. " + question.feedback;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
    } else {
        setTimeout(() => alert("Game Over!"), 2000); // End the game
    }
}

// Start the game
loadQuestion();
