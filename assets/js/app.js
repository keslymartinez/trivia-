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
                             <div>${category}</div>
                             <h3>${question}</h3>
                             <li>${incorrectUno}</li>
                             <li>${incorrectDos}</li>
                             <li>${correct_answer}</li>
                             <li>${incorrectTres}</li>
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
})