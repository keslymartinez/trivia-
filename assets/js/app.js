$(document).ready(function () {
    // Preguntas de seleción multiple
    $('#startTrivia').click(function () {
        $('.content').html('');

        $.ajax({
                url: `https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple`,
                mothod: 'GET',
                datatype: 'json'
            }).done(questionsTrivia)
            .fail(error)
            /**

        function questionsTrivia(news) {
            const trivia = news.results
            trivia.forEach(element => {
                const category = element.category
                const question = element.question
                const incorrectUno = element.incorrect_answers[2]
                const incorrectDos = element.incorrect_answers[0]
                const incorrectTres = element.incorrect_answers[1]
                const correct_answer = element.correct_answer

                let $div = (`
                            <div class="container">
                            <br>
                            <div class="text">
                                <p>Categoria: ${category}</p>
                                <h3>${question}</h3>
                            </div>
                            <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                                        ${incorrectUno}
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> 
                                        ${incorrectDos}
                                    </label>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        ${correct_answer}
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                        ${incorrectTres}
                                    </label>
                                </div>
                            </div>
                `)
                console.log(category);
                console.log(trivia[0]);
                $('#questions').append($div)
            });
            console.log(trivia);
        
**/

$("body").on("click", ".start-button", function(event){
  event.preventDefault();  
  
  generateHTML();

  timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
  
  selectedAnswer = $(this).text();
  if(selectedAnswer === correctAnswers[questionCounter]) {
    

    clearInterval(theClock);
    generateWin();
  }
  else {
    
    clearInterval(theClock);
    generateLoss();
  }
}); 

$("body").on("click", ".reset-button", function(event){
  
  resetGame();
}); 
});  
function generateLossDueToTimeOut() {
  unansweredTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 4000);  
}

function generateWin() {
  correctTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 4000); 
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 4000);
}

function generateHTML() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
  $(".mainArea").html(gameHTML);
}

function wait() {
  if (questionCounter < 7) {
  questionCounter++;
  generateHTML();
  counter = 30;
  timerWrapper();
  }
  else {
    finalScreen();
  }
}

function timerWrapper() {
  theClock = setInterval(thirtySeconds, 1000);
  function thirtySeconds() {
    if (counter === 0) {
      clearInterval(theClock);
      generateLossDueToTimeOut();
    }
    if (counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}

function finalScreen() {
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
  $(".mainArea").html(gameHTML);
}

function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  counter = 30;
  generateHTML();
  timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the capital of Australia?", "What is the capital of Liberia?", "What is the capital of Taiwan?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
var answerArray = [["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var correctAnswers = ["A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
    });
}
    // preguntas de verdadero/falso
    $('#startTriviaTf').click(function () {
        $('.content').html('');
        $.ajax({
                url: `https://opentdb.com/api.php?amount=20&difficulty=easy&type=boolean`,
                mothod: 'GET',
                datatype: 'json'
            }).done(questionsTrivia)
            .fail(error)

        function questionsTrivia(news) {
            const trivia = news.results[0]
            const category = trivia.category
            const question = trivia.question
            const incorrect = trivia.incorrect_answers
            const correct = trivia.correct_answer

            let $div = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${question}</h3>
                                </div>
                                <button class="btn btn-primary" id="false">${incorrect}</button>
                                <button class="btn btn-primary" id="true">${correct}</button>
                            </div>
                `)
            $('#questions').append($div)
            // Cambia a la siguiente pregunta
            $('#true').click(function () {
                $('#questions').html('');
                $.ajax({
                        url: `https://opentdb.com/api.php?amount=20&difficulty=easy&type=boolean`,
                        mothod: 'GET',
                        datatype: 'json'
                    }).done(questionsTrivia)
                    .fail(error)
            })
            console.log(trivia);
        }

        function error() {
            console.log('Se ha presentado un error')
        }
    })

})

// Login de Facebook

window.fbAsyncInit = function () {
    FB.init({
        appId: '204432946965031',
        cookie: true,
        xfbml: true,
        version: "v2.5"
    });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = "We are connected";
        } else if (response === 'not authotized') {
            document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'you are not logget into facebook';
        }
    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = "We are connected";
            document.getElementById('login')
        } else if (response === 'not authotized') {
            document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'you are not logget into facebook';
        }
    });
};