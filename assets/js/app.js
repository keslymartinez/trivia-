$(document).ready(function () {
    // llama a la funcion de seleccion multiple
    $('#startTrivia').click(function () {
        $('.content').html('');
        $('#questions').append(`
                <div class="jumbotron">
                <div class="container">
                    <div class="row">
                        <h1 class="text-center">Trivia Quiz</h1>
                        <div class="mainArea col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container"></div>
        `)
        initialScreen()
    })
    // preguntas de verdadero/falso
    $('#startTriviaTf').click(function () {
        $('.content').html('');
        $.ajax({
            url: `https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`,
            mothod: 'GET',
            datatype: 'json'
        }).done(questionsTrivia, incorrects)
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
                                <button class="btn btn-primary" id="true">${incorrect}</button>
                                <button class="btn btn-primary" id="false">${correct}</button>
                            </div>
                `)
            $('#questions').append($div)
            // Cambia a la siguiente pregunta
            const api = $.ajax({
                url: `https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean`,
                mothod: 'GET',
                datatype: 'json'
            })
            // pregunta dos
            $('#false').click(function () {
                console.log('dos');

                $('#questions').html('');
                api
                    .done(questionsTwo, incorrects)
                    .fail(error)

                function questionsTwo(news) {

                    const trivia = news.results[0]
                    let $div = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                            </div>
                `)
                    $('#questionsIn').append($div)
                }
                // pregunta tres
                $('#false').click(function () {
                    $('#questionsIn').html('');
                    api
                        .done(questionsThree, incorrects)
                        .fail(error)

                    function questionsThree(news) {
                        console.log('tres');

                        const trivia = news.results[5]
                        let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                            </div>
                `)
                        $('#questions').append($divs)
                    }
                    // pregunta cuatro
                    $('#false').click(function () {
                        $('#questions').html('');
                        api
                            .done(questionsThree, incorrects)
                            .fail(error)

                        function questionsThree(news) {
                            console.log('cuatro');

                            const trivia = news.results[3]
                            let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                            </div>
                `)
                            $('#questionsIn').append($divs)
                        }
                        // pregunta cinco
                        $('#false').click(function () {
                            $('#questionsIn').html('');
                            api
                                .done(questionsFive, incorrects)
                                .fail(error)

                            function questionsFive(news) {
                                console.log('cinco');

                                const trivia = news.results[1]
                                let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                            </div>
                `)
                                $('#questions').append($divs)
                            }
                            // pregunta seis
                            $('#false').click(function () {
                                $('#questions').html('');
                                api
                                    .done(questionsFive, incorrects)
                                    .fail(error)

                                function questionsFive(news) {
                                    console.log('seis');

                                    const trivia = news.results[8]
                                    let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                            </div>
                `)
                                    $('#questionsIn').append($divs)
                                }
                                // pregunta siete
                                $('#false').click(function () {
                                    $('#questionsIn').html('');
                                    api
                                        .done(questionsFive, incorrects)
                                        .fail(error)

                                    function questionsFive(news) {
                                        console.log('siete');

                                        const trivia = news.results[6]
                                        let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                            </div>
                `)
                                        $('#questions').append($divs)
                                    }
                                    // pregunta ocho
                                    $('#false').click(function () {
                                        $('#questions').html('');
                                        api
                                            .done(questionsFive, incorrects)
                                            .fail(error)

                                        function questionsFive(news) {
                                            console.log('ocho');

                                            const trivia = news.results[2]
                                            let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                            </div>
                `)
                                            $('#questionsIn').append($divs)
                                        }
                                        // pregunta nueve
                                        $('#false').click(function () {
                                            $('#questionsIn').html('');
                                            api
                                                .done(questionsFive, incorrects)
                                                .fail(error)

                                            function questionsFive(news) {
                                                console.log('nueve');

                                                const trivia = news.results[0]
                                                let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                            </div>
                `)
                                                $('#questions').append($divs)
                                            }
                                            // pregunta diez
                                            $('#false').click(function () {
                                                $('#questions').html('');
                                                api
                                                    .done(questionsFive, incorrects)
                                                    .fail(error)

                                                function questionsFive(news) {
                                                    console.log('diez');

                                                    const trivia = news.results[7]
                                                    let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <p>Categoria: ${trivia.category}</p>
                                    <h3 style="padding-bottom: 45px;padding-top: 32px;">${trivia.question}</h3>
                                </div>
                                <button class="btn btn-primary" id="true">${trivia.incorrect_answers}</button>
                                <button class="btn btn-primary" id="false">${trivia.correct_answer}</button>
                            </div>
                `)
                                                    $('#questionsIn').append($divs)
                                                }
                                                // final
                                                $('#false').click(function () {

                                                    $('#questionsIn').html('');
                                                    api
                                                        .done(questionsFive, incorrects)
                                                        .fail(error)

                                                    function questionsFive(news) {
                                                        console.log('final');

                                                        const trivia = news.results[9]
                                                        let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <h1>Congratulations!!, you managed to reach the end</h1>
                                    <img class="img-responsive" src="https://st.depositphotos.com/3484379/5101/v/950/depositphotos_51011783-stock-illustration-golden-cup.jpg" alt="copa">
                                    <a href="index.html">
                                        <button type="button" class="btn btn-default">Volver a jugar</button>
                                    </a>
                                </div>
                            </div>
                `)
                                                        $('#questions').append($divs)
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }

        function error() {
            console.log('Se ha presentado un error')
        }
        function incorrects() {
            $('#true').click(function () {
                console.log('incorrecto');
                $('#questions').html('');
                $('#questionsIn').html('');
                let $divs = (`
                            <div class="container text-center">
                            <br>
                                <div class="text">
                                    <h1>You were wrong!!</h1>
                                    <h2>start again<h2>
                                    <img class="img-responsive" src="https://www.recreoviral.com/wp-content/uploads/2015/06/Luhu-la-gatita-con-la-cara-de-expresi%C3%B3n-triste-4.jpg" alt="copa">
                                    <a href="index.html">
                                        <button type="button" class="btn btn-default">Volver a jugar</button>
                                    </a>
                                </div>
                            </div>
                `)
                $('#questions').append($divs)
            })
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
        } else if (response === 'not authotized') {
            document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'you are not logget into facebook';
        }
    });
};

// inicia las preguntas de seleccion multiple
function initialScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
    $(".mainArea").html(startScreen);
}
initialScreen();
//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
$("body").on("click", ".start-button", function (event) {
    event.preventDefault();

    generateHTML();
    timerWrapper();
});
$("body").on("click", ".answer", function (event) {

    selectedAnswer = $(this).text();
    if (selectedAnswer === correctAnswers[questionCounter]) {

        clearInterval(theClock);
        generateWin();
    } else {

        clearInterval(theClock);
        generateLoss();
    }
});
$("body").on("click", ".reset-button", function (event) {

    resetGame();
});

function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}

function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}

function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: " + correctAnswers[questionCounter] + "</p>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);
}

function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".mainArea").html(gameHTML);
}

function wait() {
    if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    } else {
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
var answerArray = [
    ["Canberra", "Melbourne", "Sydney", "Darwin"],
    ["Arthington", "Monrovia", "Tuzon", "Marshall"],
    ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
    ["Kyoto", "Hiroshima", "Tokyo", "Osaka"],
    ["Hong Kong", "Macau", "Shanghai", "Beijing"],
    ["Ankara", "Istanbul", "Antalya", "Bursa"],
    ["Medellin", "Bogota", "Cartagena", "Cali"],
    ["Mumbai", "Hyderabad", "Bangalore", "New Delhi"]
];
var correctAnswers = ["A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
