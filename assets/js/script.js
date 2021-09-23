//Coding quiz
let timerElement=document.querySelector(".timer-count");
let mainText=document.querySelector(".main-text");
let startButton=document.getElementById("start-btn");
let scorePanel=document.getElementById("high-scores");
let mainPanel=document.getElementById("main-panel");
let endScreen=document.querySelector(".end-screen");
let scoreList=document.getElementById("scores");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");
let option4=document.getElementById("option4");
let backButton=document.getElementById("back-btn");
let clearButton=document.getElementById("clear-btn");
let correctPopup=document.getElementById("correct");
let incorrectPopup=document.getElementById("incorrect");
let viewScores=document.getElementById("view");
let timerCount;
let player="";
let score=0;
let highestScore=0;

viewScores.addEventListener

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
    text: "Which of the following is a unique selector in CSS?",
    answer : "id",
    option1 : "class",
    option2 : "semantic",
    option3 : "id",
    option4 : "header"
},
{
    text: "What index does an array start at in most programming languages?",
    answer : "0",
    option1 : "1",
    option2 : "0",
    option3 : "-1",
    option4 : "2"
},
{
    text: "which loop should be used when you know how many times to run?",
    answer : "for loop",
    option1 : "while loop",
    option2 : "for loop",
    option3 : "do while loop",
    option4 : "loopty loop"
},
{
    text: "The following can be used to describe code but not run anything",
    answer : "comments",
    option1 : "stickers",
    option2 : "instructions",
    option3 : "console.log",
    option4 : "comments"
}
];

//once the start button is pressed
function startGame(){
    //set timer to 75
    timerCount=75;
    //set score to 0
    score=0;
   //hide start button
   startButton.style.display="none";
      startTimer();
      questionPage();
}
//Timer begins
function startTimer(){
    //set timer
    timer=setInterval(function(){
        timerCount--;
        timerElement.textContent=timerCount;
        if (timerCount<=0){
            clearInterval(timer); //clears the interval
            endGame();
        }
    },1000);
}

//main page switched to questions

function questionPage(){
    showOptions();
    //get questions from array
         let i=0;
         mainText.textContent=question[i].text;
         option1.textContent=question[i].option1;
         option2.textContent=question[i].option2;
         option3.textContent=question[i].option3;
         option4.textContent=question[i].option4;
         
         function updateQuestions(){
            i++;
            if(i==question.length){
                timerCount=timerCount-75;
            }
        mainText.textContent=question[i].text;
        option1.textContent=question[i].option1;
        option2.textContent=question[i].option2;
        option3.textContent=question[i].option3;
        option4.textContent=question[i].option4;
         }

         
        //button logic, if the option chosen matches the answer, its correct
        option1.onclick = function(){
            if(question[i].option1==question[i].answer){
                updateQuestions();
                optionCorrect();
            }
            else {
                 updateQuestions();
                 optionWrong();
                }
        }
        option2.onclick = function(){
            if(question[i].option2==question[i].answer){
                updateQuestions();
                optionCorrect();
            }
            else {
                 updateQuestions();
                 optionWrong();
                }
        }
        option3.onclick = function(){
            if(question[i].option3==question[i].answer){
                updateQuestions();
                optionCorrect();
            }
            else {
                 updateQuestions();
                 optionWrong();
                }
        }
        option4.onclick = function(){
            if(question[i].option4==question[i].answer){
                updateQuestions();
                optionCorrect();
            }
            else {
                timerCount=timerCount-10;
                updateQuestions();
                optionWrong();
                }
        }
}


function optionWrong(){
    //decrease time
    //display text on screen for a short amoount of time
    incorrectPopup.style.display="block";
    setTimeout(function(){
        incorrectPopup.style.display="none";
   },1000);

   //decrease time
    timerCount=timerCount-10


}
function optionCorrect(){
    //display text on screen for a short amount of time
    correctPopup.style.display="block";
    setTimeout(function(){
    correctPopup.style.display="none";
    },1000);
    //increment score
    score+=5;
 
 
}
//hide buttons 
function hideOptions(){
    incorrectPopup.style.display="none";
    correctPopup.style.display="none";
    option1.style.display="none";
    option2.style.display="none";
    option3.style.display="none";
    option4.style.display="none";
}

function showOptions(){
    option1.style.display="block";
    option2.style.display="block";
    option3.style.display="block";
    option4.style.display="block";
}


//if user selects an answer, they proceeed to the next question

//if the answer is correct their score is increased
//if the answer is incorrect, the time is lowered by 10 seconds


//when timer hits 0, game is over, score is displayed
function endGame(){
    //set timer to 0
    timerElement.textContent='';
    //hide question buttons
    hideOptions();
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

    //create buttons and text field
    endScreen.appendChild(initialInput);
    endScreen.appendChild(submitButton);
    
    //button is clicked
    submitButton.addEventListener("click",function(){
        //add to local storage
        localStorage.setItem("score",score);
        localStorage.setItem("player",initialInput.value);
        console.log("submit button pressed");
        //remove submit button and text field
        endScreen.removeChild(initialInput);
        endScreen.removeChild(submitButton);

        //add new score to score list
        let newScore = document.createElement("li");
        let scoreInfo = document.createTextNode(initialInput.value+" : " +score);
        newScore.appendChild(scoreInfo);
        //add score to list
        scoreList.appendChild(newScore);
        scoreScreen(); 
        //revert to main screen
        mainText.textContent="Coding Quiz"
        startButton.style.display="block";
    });
}
function sortList(ul){
    var new_ul = ul.cloneNode(false);
    // Add all lis to an array
    var lis = [];
    for(var i = ul.childNodes.length; i--;){
        if(ul.childNodes[i].nodeName === 'LI')
            lis.push(ul.childNodes[i]);
    }

    // Sort the lis in descending order
    lis.sort(function(a, b){
       return parseInt(b.childNodes[0].data , 10) - 
              parseInt(a.childNodes[0].data , 10);
    });

    // Add them into the ul in order
    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}
function hideScores(){
    scorePanel.style.display="none";
}

function scoreScreen(){
    mainPanel.style.display="none";
    scorePanel.style.display="block";

    backButton.onclick = function(){
        mainPanel.style.display="block";
        hideScores();
    }
    clearButton.onclick = function(){
        scoreList.innerHTML='';
    }
}

//user can wipe scores too by pressing 'clear scores' or go back to the first screen
//hide options buttons on startup
viewScores.addEventListener("click", function(){
    scoreScreen();
});

startButton.onclick = function(){
    console.log("Start button clicked")
    startGame();
};

