var button = $("<button>")

var questionArray = [
    "How was Minato Namikaze related to Naruto?",
    "Who was Naruto's best friend and greatest foe?",
    "What was the nickname that Naruto gaver to Jiraiya Sensei?",
    "Who was the creater of the Reanimation Jutsu?",
    "What is Naruto's ninja way?"
]

var question1Answers = [
    "He was his father",
    "He was the Fourth Hokage",
    "He was Naruto's sensei",
    "He was Naruto's brother"
]

var question2Answers = [
    "Madara Uchiha",
    "Sasuke Uchiha",
    "Orochimaru",
    "Sakura"
]

var question3Answers = [
    "Master Sensei",
    "The Great Sage",
    "Legendary Sannin",
    "Pervy Sage"
]

var question4Answers = [
    "Orochimaru",
    "Kabuto",
    "Sasori, the Puppet Master",
    "Lady Tsunade"
]

var question5Answers = [
    "A true Shinobi will die for a comrade",
    "I never give up",
    "I never go back on my word",
    "I'll do anything to protect the Hidden Leaf"
]

// Check for errors in syntax on variable creation
// console.log(questionArray)
// console.log(question1Answers)
// console.log(question2Answers)
// console.log(question3Answers)
// console.log(question4Answers)
// console.log(question5Answers)

// Gather all buttons
var startButton = $('.btn')
// Set listening event for start Game
startButton.on('click', startGame)
// Start game function
function startGame(_event){
    timerCountdown();



var secondsLeft = 10
var timeEl = $('#timer')

function timerCountdown() {
    var timerInterval = setInterval(function(){
    timeEl.text(secondsLeft + ' seconds left');
    secondsLeft--;

    if(secondsLeft === 0) {
        alert('Game Over. Restarting');
        console.log("end");
        clearInterval(timerInterval);
        timeEl.text('')
        }

}, 1000)}
}

// function setNextQuestion() {

// }

// function endGame() {

// }