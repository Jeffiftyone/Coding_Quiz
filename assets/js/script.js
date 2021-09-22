//Coding quiz
let timerElement=document.querySelector(".timer-count");
let mainText=document.querySelector(".main-text");
let startButton=document.getElementById("start-btn");
let scorePanel=document.querySelector(".score-screen");
let endScreen=document.querySelector(".end-screen");
let scoreList=document.getElementById("scores");
let timerCount;
let player="";
let score=5;
let prevScore=0;
//Put questions as objects
let question = [{
    text: "Which of the following should be used to save an assigned value?",
    answer : "variable",
    option1 : "variable",
    option2 : "class",
    option3 : "type",
    option4 : "attribute"
},
{
    text: "Which of the following should be used to save an assigned value?",
    answer : "variable",
    option1 : "variable",
    option2 : "class",
    option3 : "type",
    option4 : "attribute"
},
{
    text: "Which of the following should be used to save an assigned value?",
    answer : "variable",
    option1 : "variable",
    option2 : "class",
    option3 : "type",
    option4 : "attribute"
},
{
    text: "Which of the following should be used to save an assigned value?",
    answer : "variable",
    option1 : "variable",
    option2 : "class",
    option3 : "type",
    option4 : "attribute"
},
{
    text: "Which of the following should be used to save an assigned value?",
    answer : "variable",
    option1 : "variable",
    option2 : "class",
    option3 : "type",
    option4 : "attribute"
}

];


//once the start button is pressed
function startGame(){
   timerCount=10;
   //hide start button
   startButton.style.display="none";
      startTimer();
}
//Timer begins
function startTimer(){
    //set timer
    timer=setInterval(function(){
        timerCount--;
        timerElement.textContent=timerCount;
        if (timerCount===0){
            clearInterval(timer); //clears the interval
            endGame();
        }
    },1000);
}
//main page switched to questions
function questionPage(question){
}

//if user selects an answer, they proceeed to the next question

//if the answer is correct their score is increased
//if the answer is incorrect, the time is lowered by 10 seconds

//when timer hits 0, game is over, score is displayed
function endGame(){
    //user can enter their initials to highscore (saved locally)
    console.log("End Screen enabled");
    mainText.textContent="Enter your initials: ";
    //create form
    let initialInput=document.createElement("input");
    initialInput.setAttribute("type","text");
    initialInput.setAttribute("name", "initials");
    initialInput.setAttribute("placeholder", "Enter your initials here");
    initialInput.setAttribute("maxlength","3");

    // create a submit button
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");

    //button is clicked
    submitButton.addEventListener("click",function(){
        //add to local storage
    localStorage.setItem("score",score);
    localStorage.setItem("player",initialInput.value);
    
    console.log("submit button pressed");

    //add new score to score list
    let newScore = document.createElement("li");
    let scoreInfo = document.createTextNode(initialInput.value+" : " +score);
    newScore.appendChild(scoreInfo);
    //if new score is higher, add to top of list
        if (prevScore<score){
            scoreList.prepend(newScore);
        }
        else{
            scoreList.appendChild(newScore);
        }
    //scoreScreen(); 
    
    });
    //create buttons
    endScreen.appendChild(initialInput);
    endScreen.appendChild(submitButton);
}

function scoreScreen(){

}

//user can wipe scores too by pressing 'clear scores' or go back to the first screen

startButton.onclick = function(){
    console.log("Start button clicked")
    startGame();
};

