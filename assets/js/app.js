$(document).ready(function () {
    $('#startTrivia').click(function () {
        $('.content').html('');
        $.ajax({
            url: `https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple`,
            mothod: 'GET',
            datatype: 'json'
        }).done(questionsTrivia)
            .fail(error)

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
        }

        function error() {
            console.log('Se ha presentado un error')
        }
    })
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


            console.log(category);
            $('#questions').append($div)

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
        } else if (response === 'not authotized') {
            document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'you are not logget into facebook';
        }
    });
};