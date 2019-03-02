const quiz = [
  {
    question: "1. In what city were the Beatles formed?",
    answers: ["Hamburg", "Liverpool", "London", "Manchester"],
    correctAnswer: "Liverpool"
  },

  {
    question:
      "2. What club did the Beatles frequently play in their early years?",
    answers: ["The Bell Hop", "The Burren", "The Cavern", "The Shoe Horn"],
    correctAnswer: "The Cavern"
  },

  {
    question: "3. What was the name of the band that evolved into the Beatles?",
    answers: ["The Crickets", "The Moths", "The Kingsmen", "The Quarrymen"],
    correctAnswer: "The Quarrymen"
  },

  {
    question: "4. Who was the youngest member of the Beatles?",
    answers: [
      "George Harrison",
      "John Lennon",
      "Paul MccCartney",
      "Ringo Starr"
    ],
    correctAnswer: "George Harrison"
  },

  {
    question: "5. Who was the last member to join the Beatles?",
    answers: [
      "George Harrison",
      "John Lennon",
      "Paul MccCartney",
      "Ringo Starr"
    ],
    correctAnswer: "Ringo Starr"
  },

  {
    question: "6. What was the Beatles first studio album?",
    answers: [
      "<i>With the Beatles</i>",
      "<i>Meet the Beatles</i>",
      "<i>Please Please Me</i>",
      "<i>Twist and Shout</i>"
    ],
    correctAnswer: "<i>Please Please Me</i>"
  },

  {
    question: "7. What year did the Beatles come to the United States?",
    answers: ["1962", "1963", "1964", "1965"],
    correctAnswer: "1964"
  },

  {
    question: "8. Which Beatles song did NOT reach #1 in the US and UK charts?",
    answers: [
     "Get Back",
     "I Want to Hold Your Hand",
     "Norwegian Wood (This Bird Has Flown)",
     "We Can Work It Out"
    ],
    correctAnswer: "Norwegian Wood (This Bird Has Flown)"
  },

  {
    question: "9. What is the Beatles’ final studio album?",
    answers: [
      "<i>Abbey Road</i>",
      "<i>The Beatles (The White Album)</i>",
      "<i>Let it Be</i>",
      "<i>Revolver</i>"
    ],
    correctAnswer: "<i>Let it Be</i>"
  },

  {
    question: "10. In what year did the Beatles break up?",
    answers: ["1969", "1970", "1971", "1972"],
    correctAnswer: "1970"
  }
];

const state = {
  questionNumber: 0,
  score: 0,
};

function quizPageTemplate() {
    return `
    <div class="quizQuestions">
    <form>
    <fieldset>
    <legend id="quizQuestion">${quiz[state.questionNumber].question}<span class="required"></legend>
      <label class="answerChoice">
      <input class="answer" type="radio" value="${quiz[state.questionNumber].answers[0]}" name="option" required></input>
          <span>${quiz[state.questionNumber].answers[0]}</span>
        </label>
  
        <label class="answerChoice">
          <input class="answer" type="radio" value="${quiz[state.questionNumber].answers[1]}" name="option" required></input>
          <span>${quiz[state.questionNumber].answers[1]}</span>
        </label>
  
        <label class="answerChoice">
          <input class="answer" type="radio" value="${quiz[state.questionNumber].answers[2]}" name="option" required></input>
          <span>${quiz[state.questionNumber].answers[2]}</span>
        </label>
  
        <label class="answerChoice">
          <input class="answer" type="radio" value="${quiz[state.questionNumber].answers[3]}" name="option" required></input>
          <span>${quiz[state.questionNumber].answers[3]}</span>
        </label>
      </fieldset>  
      <div aria-live="polite"></div>
    </form> 
    </div>`;
};

function startQuiz() {
  $(".submitButton").hide();
  $(".quizImage").hide();
  $(".restartButton").hide();
  $(".questionInfo").hide();
  $(".quizQuestions").hide();
  $(".correctAnswerPage").hide();
  $(".wrongAnswerPage").hide();
  $(".nextButton").hide();
  $(".endPage").hide();
  nextQuestionNumber();
  $(".startButton").click(function(event) {
  $(".startPage").hide();
  $(".containerHeader").hide(); 
  $(".quizImage").show();
    displayQuestion();
  });
};

function nextQuestionNumber() {
  $(".nextButton").click(function(event) {
     if (state.questionNumber > quiz.length - 1) {
      endPage();
      }else{;
    $(".wrongAnswerPage").hide();
    $(".correctAnswerPage").hide(); 
    $(".nextButton").show();
    $(".quizPage").show();
    displayQuestion();
    };
  });
};

function displayQuestion() { 
if (state.questionNumber < quiz.length + 1) {
  $(".quizQuestions").show();
  $(".quizImage").show();
  $(".quizQuestions").html(quizPageTemplate());  
  $(".submitButton").show();
  $(".questionInfo").show();
  $(".nextButton").hide();
  $(".restartButton").hide();
  };
};

function submitAnswer() {
  $(".submitButton").click(function(event) {
    if (!$("input[name='option']:checked").val()) {
   alert('Please select an answer!');
  }
else {
  changeQuestionNumber();
  userAnswer();
  }
 });
};

function changeQuestionNumber() {
  state.questionNumber++;
  $(".questionNumber").text(state.questionNumber + 1);
};

function updateScore() { 
  state.score++;
  $(".score").text(state.score);
};

function userAnswer () {
  let selected = $('input:checked');
  let answer = selected.val();
  let rightAnswer = `${quiz[state.questionNumber - 1].correctAnswer}`;
  if (answer === rightAnswer) {
    correctAnswerPage();
  } else {
    wrongAnswerPage() ;
 }
};

function correctAnswerPage() {
  $(".correctAnswerPage").show();
  $(".nextButton").show();
  $(".containerHeader").hide();
  $(".questionInfo").hide();
  $(".nextButton").show();
  $(".quizQuestions").hide();
  $(".submitButton").hide();
  $(".restartButton").hide();
  $(".quizImage").hide();
  updateScore();
};

function wrongAnswerPage() {
  $(".wrongAnswerPage").show();
  $(".containerHeader").hide();
  $(".questionInfo").hide();
  $(".nextButton").show();
  $(".quizQuestions").hide();
  $(".submitButton").hide();
  $(".restartButton").hide();
  $(".quizImage").hide();
  showRightanswer();
};

function showRightanswer() {
let correctAnswer = `${quiz[state.questionNumber - 1].correctAnswer}`;
  $('.wrongAnswerPage').html(`<div class=".wrongAnswerPage"><p>You say yes, I say no!<br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The_Beatles_magical_mystery_tour.jpg/800px-The_Beatles_magical_mystery_tour.jpg" alt="the Beatles with guitars in 1965"><br>the correct answer is:<br><span>${correctAnswer}</span></p></div>`);
};

function endPage() {
  $(".submitButton").hide();
  $(".questionInfo").hide();
  $(".quizQuestions").hide();
  $(".correctAnswerPage").hide();
  $(".wrongAnswerPage").hide();
  $(".quizPage").hide();
  $(".containerHeader").hide();
  $('.endPage').show();
  $('.nextButton').hide();
  $(".quizImage").hide();
  $(".restartButton").show();
  restartQuiz();
    $('.endPage').html(`<div class="endPage">
      <p>And in the end...</p><br> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Beatles_with_Ed_Sullivan.jpg/800px-Beatles_with_Ed_Sullivan.jpg" alt="the Beatles with Ed Sullivan in 1964"><br><p>Final score: ${state.score}</p></div>`);
};

function restartQuiz() {
  $(".restartButton").click(function(event) {
      location.reload();
  });
};

function createQuiz() {
  startQuiz();
  submitAnswer();   
};

$(createQuiz);
