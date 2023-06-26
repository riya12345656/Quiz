const questions = [
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
     {
         question:"How Many days are there in week?",
         answers:[
             {text:"7 days",correct:true},
             {text:"6 days",correct:false},
             {text:"9 days",correct:false},
             {text:"4 days",correct:false},
         ]
    },
 {
     question:"How many hours are there in a day?",
     answers:[
         {text:"12 hours",correct:false},
         {text:"26 hours",correct:false},
         {text:"18 hours",correct:false},
         {text:"24 hours",correct:true},
         ]
    },
 {
     question:"Rainbow consist how may colors?",
     answers:[
         {text:"8 colors",correct:false},
         {text:"7 colors",correct:true},
         {text:"5 colors",correct:false},
         {text:"9 colors",correct:false},
         ]
    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


    let currentQuestionIndex = 0;
    let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQustion();
}
function showQustion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
       const button = document.createElement("button");
       button.innerHTML = answers.text;
       button.classList.add("btn");
       answerButton.appendChild(button);
       if(answers.correct){
        button.dataset.correct = answers.correct;
    }
    button.addEventListener("click",selectAnswer);

 });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
     if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;

    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQustion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz()
    }
})
       startQuiz();
