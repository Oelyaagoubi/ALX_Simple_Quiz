function checkAnswer(){
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if(userAnswer === correctAnswer){
        document.getElementById("feedback").innerHTML = 'Correct! Well done.';
    }else if(correctAnswer !== userAnswer){
        document.getElementById("feedback").innerHTML = "That's incorrect. Try again!";
    }
}

const buttonCheck = document.getElementById("submit-answer");
buttonCheck.addEventListener("click", checkAnswer);

//adiind 