function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>結果</h1>";
    gameOverHTML += "<h2 id='score'> 点数　:  " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    var retry = document.getElementById("btnRe")
    retry.classList.remove("hide")
        };

// クイズ問題
var questions = [
    new Question("1. こどもでもぜいきんはかかる", ["◯", "✕"], "◯"),
    new Question("2. 消費税は日本で始まった", ["◯", "✕"], "✕"),
    new Question("3. 日本の消費税は世界で一番税率が高い。", ["◯", "✕"], "✕"),
    new Question("4. 税金は、だれでも自由に新しく作ることができる。", ["◯", "✕"],"✕"),
    new Question("5. 税金は、日本に住む人だけのために使われている。", ["◯", "✕"], "✕")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
