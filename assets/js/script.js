
// Set up timer. If timer runs out, call gameOver function, the timer will go down 1 second at a time
function setTime() {

  var timerInterval = setInterval(function () {

    secondsLeft--;
    countdown_timer.textContent = secondsLeft;

    if (secondsLeft <= 0 || questionsIndex > 4) {
      clearInterval(timerInterval);

      gameOver();
    }

  }, 1000)
};

// This function is to start quiz
function startQuiz() {

  if (questionsIndex < 5) {

    // page setup to show questions
    main_el.innerHTML = '';

    var section2 = document.createElement("section");
    section2.id = "question_section";
    section2.classList.add("section_center");
    main_el.appendChild(section2);

    var question_text = document.createElement("h1");
    question_text.id = "question_text"
    question_text.textContent = questions[questionsIndex].questionText;

    section2.appendChild(question_text);

    // Loop through all questions until all questions are answered. This will add title of question and list of choices through every loop
    for (var i = 0; i < listEl.length; i++) {
      listEl[i].textContent = questions[questionsIndex].choices[i];
      section2.appendChild(listEl[i]);
    }

    listEl[questions[questionsIndex].correctAnswer_choicesIndex].id = "correct_answer";
  } else {
    gameOver();
  };



};


// this function will allow us to remove designated IDs after a choice is selected
function removeIdAttribute() {
  listEl.forEach(function (e) {
    e.removeAttribute('id');
  });
};



// This will check for correct and wrong answers. If it's correct then the user will get 10 points and go onto the next question, if user answer incorrect then the user loses 10seconds on the timer and moves onto the next question
li1.addEventListener('click', function () {
  if (li1.id !== "correct_answer") {
    secondsLeft -= 10;
    removeIdAttribute()
    questionsIndex++;
    startQuiz();
  } else {
    currentScore = currentScore + 10;
    questionsIndex++;
    removeIdAttribute()
    startQuiz();
  }
});

li2.addEventListener('click', function () {
  if (li2.id !== "correct_answer") {
    secondsLeft -= 10;
    removeIdAttribute()
    questionsIndex++;
    startQuiz();
  } else {
    currentScore = currentScore + 10;
    questionsIndex++;
    removeIdAttribute()
    startQuiz();
  }
});
li3.addEventListener('click', function () {
  if (li3.id !== "correct_answer") {
    secondsLeft -= 10;
    removeIdAttribute()
    questionsIndex++;
    startQuiz();
  } else {
    currentScore = currentScore + 10;
    questionsIndex++;
    removeIdAttribute()
    startQuiz();
  }
});

li4.addEventListener('click', function () {
  if (li4.id !== "correct_answer") {
    secondsLeft -= 10;
    removeIdAttribute()
    questionsIndex++;
    startQuiz();
  } else {
    currentScore = currentScore + 10;
    questionsIndex++;
    removeIdAttribute()
    startQuiz();
  }

});


// telling javascript that the quiz has not started
var quizStarted = false;

// once the quiz starts, variable for quiz start will be tru and the startQuiz function is called
intro_start_button.addEventListener('click', function () {
  if (!quizStarted) {
    setTime();
    quizStarted = true;
    startQuiz();
  }
});


// this listens for buttons to be clicked for the view highscore, and calls the showScore
view_hs.addEventListener('click', function () {
  header.innerHTML = '';
  showScores();
})

