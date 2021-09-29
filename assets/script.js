var question = $("#question")
var currentQuestion = 0
var secondsLeft = 60
var timeEl = $('#timer')
var grid = $('#answer-grid')
var body = $('body')
var questionArray = [
    {
        question:"How was Minato Namikaze related to Naruto?",
        answer: "He was his father",
        options:  ["He was his father","He was the Fourth Hokage","He was Naruto's sensei","He was Naruto's brother"]
    },
    {
        question:"Who was Naruto's best friend and greatest foe?",
        answer: "Sasuke Uchiha",
        options:  ["Madara Uchiha", "Sasuke Uchiha", "Orochimaru", "Sakura"]
    },
    {
        question:"What was the nickname that Naruto gaver to Jiraiya Sensei?",
        answer: "Pervy Sage",
        options:  ["Pervy Sage", "Master Sensei", "Orochimaru", "Sakura"]
    },
    {
        question:"Who was the creater of the Reanimation Jutsu?",
        answer: "Orochimaru",
        options:  ["Orochimaru", "Kabuto", "Sasori, the Puppet Master", "Lady Tsunade"]
    },
    {
        question:"What is Naruto's ninja way?",
        answer: "I never go back on my word",
        options:  ["A true Shinobi will die for a comrade",  "I never give up", "I'll do anything to protect the Hidden Leaf", "I never go back on my word"]
    }]

    var startButton = $('#bottom-btn')
    // Set listening event for start Game
    // Start game function
    function startGame(event){
        startButton.text('');
        startButton.text('Next');  
        timerCountdown();
        updateQuiz();
    
    
    
    
    function timerCountdown() {
        var timerInterval = setInterval(function(){
        timeEl.textContent = secondsLeft + " seconds left";
        secondsLeft--;
    
        if(secondsLeft === 0) {
            alert('Game Over. Restarting');
            clearInterval(timerInterval);
            timeEl.text('')}
    
    }, 1000)}

    function updateQuiz() {
        body.removeClass();
        grid.empty()
        question.text('')
        question.text(questionArray[currentQuestion].question)};
        console.log(questionArray[currentQuestion].options.length)
        for (var i = 0; i < questionArray[currentQuestion].options.length; i++) { 
        let btn = document.createElement('button');
        btn.textContent = questionArray[currentQuestion].options[i]
        btn.value=questionArray[currentQuestion].options[i]
        btn.classList.add("btn")
        btn.addEventListener('click', function(){
            checkAnswer(this.value);
            currentQuestion++;
            })
        grid.append(btn)
    }

   
    }

    
    function checkAnswer(selectedAnswer){
        //var selectedAnswer = this.value
        
        if (currentQuestion === questionArray.length) {
            alert('Game Over. Restarting');
            clearInterval(timerInterval);
            timeEl.text('');
            grid.empty()
        } 
        console.log(selectedAnswer,questionArray[currentQuestion].answer)
        if (selectedAnswer === questionArray[currentQuestion].answer) {
            // score variable +
            body.addClass("correct")
        } else {
            body.addClass("wrong")

        }


    }
    startButton.on('click', startGame)
    
    
    
    // check answer

    // check if last question, if not, next question

    // end game function with local storage


// 21,23,25

