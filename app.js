// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("fixedHeaderOnScroll");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.getElementById('timer').innerHTML =
  01 + ":" + 15;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    alert('You Are Out Of Time!')
    alert(' Submit & Check Your Answers!')
    
    // showResults();

    return;
  }
  
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <p class="answers"> ${answers.join("")} </p>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var myQuestions = [
    {
      question: "Travis Barker was the Drummer for which 90s band?",
      answers: {
        a: "Green Day",
        b: "Sound Garden",
        c: "Blink-182",
        d: "Weezer",
        e: "Janes Addiction"

      },
      correctAnswer: "c"
    },
    {
      question: "Kurt Cobain was the lead singer for which 90s band?",
      answers: {
        a: "Nirvana",
        b: "Radiohead",
        c: "Stone Temple Pilots",
        d: "R.E.M",
        e: "The Foo Fighters"
      },
      correctAnswer: "a"
    },
    {
      question: "Michael Peter Balzary 'Flea' was the bassist for which hit 90s band?",
      answers: {
        a: "System of a Down",
        b: "Korn",
        c: "Rage Against",
        d: "Nine Inch Nails",
        e: "Red Hot Chilli Peppers"
      },
      correctAnswer: "e"
    },
    {
      question: "Tiffani Thiessen ' Kelly Kapowski' was a hearthrob on which hit 90s TV Series??",
      answers: {
        a: "Boy Meets World",
        b: "Freaks & Geeks",
        c: "Melrose Place",
        d: "Save by The Bell",
        e: "90210"
      },
      correctAnswer: "d"
    },
    {
      question: "Daniele Fisher 'Topanga' dated who on the hit 90s TV Series Boy Meets World?",
      answers: {
        a: "Eric Matthews",
        b: "Shawn Hunter",
        c: "Jack Hunter",
        d: "Cory Matthews",
        e: "Mr. Feeney"
      },
      correctAnswer: "d"
    },
    {
      question: "Jennifer Anniston 'Rachel' ended up with who on the hit 90s TV Series Friends ?",
      answers: {
        a: "Joey",
        b: "Chandler",
        c: "Waldo",
        d: "Carl",
        e: "Ross"
      },
      correctAnswer: "e"
    },
    {
      question: "What was Steve Urkle's trademark saying in the hit 90s TV Series Family Matters?",
      answers: {
        a: "Did I do that?",
        b: "Dude",
        c: "How Rude",
        d: "What did I do?",
        e: "Sounds Good!"
      },
      correctAnswer: "a"
    },
    {
      question: "'Zack Morris' played what instrument in Save by the Bell? ",
      answers: {
        a: "The Drums",
        b: "The Guitar",
        c: "The Keyboard",
        d: "The Bass",
        e: "Tambourine"
      },
      correctAnswer: "b"
    },
    {
      question: "Britney Spear's first hit 90s single was?",
      answers: {
        a: "Bye Bye Bye",
        b: "I want it that way..",
        c: "Hit me baby one more time",
        d: "Closing Time",
        e: "Sex & Candy"
      },
      correctAnswer: "c"
    },
    {
      question: "Finish this Fresh Prince of Bel-Air lyric stanza 'I looked at my kingdom I was finally there To...'",
      answers: {
        a: "Tell you how I became the prince of a town called Bel Air",
        b: "Get to the playground where I spent most of my days",
        c: "Chillin' out maxin' relaxin' all cool",
        d: "Shootin some b-ball outside of the school",
        e: "Sit on my throne as the Prince of Bel-Air"
      },
      correctAnswer: "e"
    },
    {
      question: "What was Carlton Bank's favorite singer on the Fresh Prince of Bel-Air ?",
      answers: {
        a: "Rod Stewart",
        b: "Neil Diamond",
        c: "Tom Jones",
        d: "Mick Jagger",
        e: "Bono"
      },
      correctAnswer: "c"
    },

    {
      question: "Carson Daily was the TV host for which major 90s TV show?",
      answers: {
        a: "Yo MTV Raps",
        b: "TRL (Total Request Live)",
        c: "The Real World",
        d: "MTV News",
        e: "Singled Out"
      },
      correctAnswer: "b"
    }

  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  alert('Press Enter To Start 90s Quiz Now!')
  submitButton.addEventListener("click", showResults);
})();