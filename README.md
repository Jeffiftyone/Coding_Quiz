# 04 Web APIs: Coding Quiz
This applications will allow the user to take a quiz on basic coding questions

The user may start the quiz by pressing the "Start" button

A timer begins to countdown on the upper left corner of the screen

Each question will have 4 options to choose from, one of them being the correct answer
    These questions are stored in an array of objects and accessed by their index

Whatever option the user chooses, they will proceed to the next question.
    If their answer is correct, text will pop up notifying the user and points will be added to the user's score
    If their answer is wrong, text will pop up notifying the user and seconds will be deducted from the remaining time

The quiz ends once the user has answered all the questions or there is no time left remaining on the timer

Once the quiz ends, the user will be prompted to enter their initials

The User's initials are then displayed on a highscore screen with their name and score
    on this screen, the user can either choose to go back or clear the scores on the screen
    if the user chooses to go back after entering their initials, they will be taken back to the start screen.
    The most recent score is saved locally.

This highscore screen can also be accessed by clicking the "View Highscores" text at the top right at any point during the application.
