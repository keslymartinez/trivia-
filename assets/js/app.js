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

// Login de Facebook

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '204432946965031',
      cookie     : true,
      xfbml      : true,
      version    : "v2.5"
    });
      
    FB.getLoginStatus(function(response) {
        if(response.status === 'connected'){
            document.getElementById('status').innerHTML = "We are connected";
        } else if (response === 'not authotized') {
            document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'you are not logget into facebook';
        }
    });   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function login() {
    FB.login(function(response){
               if(response.status === 'connected'){
            document.getElementById('status').innerHTML = "We are connected";
        } else if (response === 'not authotized') {
            document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'you are not logget into facebook';
        }
    });
  };