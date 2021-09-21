//Coding quiz
let timerElement=document.querySelector(".timer-count");
let mainText=document.querySelector(".main-text");
let startButton=document.querySelector(".start-btn");
let timerCount;
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
            scoreScreen();
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
function scoreScreen(){
    mainText.textContent="Enter your initials";
    let btn=document.createElement("button");
    btn.innerHTML="Submit";
    btn.type="submit";
    btn.name="formBtn";
    btn.onclick = function () {
        alert("Button is clicked");
      };
    document.body.main.section.appendChild(btn);


}
//user can enter their initials to highscore (saved locally)

//user can wipe scores too by pressing 'clear scores' or go back to the first screen

startButton.onclick = function(){
    console.log("button clicked")
    startGame();
};

