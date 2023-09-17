function setTime() {

  var timerInterval = setInterval(function () {

    secondsLeft--;
    countdown_timer.textContent = secondsLeft;

    if (secondsLeft === 0 || questionsIndex > 4) {
      clearInterval(timerInterval);

      gameOver();
    }

  }, 1000)
};

function startQuiz() {

  if (questionsIndex < 5) {
    main_el.innerHTML = '';

    var section2 = document.createElement("section");
    section2.id = "question_section";
    section2.classList.add("section_center");
    main_el.appendChild(section2);

    var question_text = document.createElement("h1");
    question_text.id = "question_text"
    question_text.textContent = questions[questionsIndex].questionText;

    section2.appendChild(question_text);

    for (var i = 0; i < listEl.length; i++) {
      listEl[i].textContent = questions[questionsIndex].choices[i];
      section2.appendChild(listEl[i]);
    }

    listEl[questions[questionsIndex].correctAnswer_choicesIndex].id = "correct_answer";
  } else {
    gameOver();
  };



};



function removeIdAttribute() {
  listEl.forEach(function (e) {
    e.removeAttribute('id');
  });
};



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


var quizStarted = false;

intro_start_button.addEventListener('click', function () {
  if (!quizStarted) {
    setTime();
    quizStarted = true;
    startQuiz();
  }
});


view_hs.addEventListener('click', function () {
  header.innerHTML = '';
  showScores();
})

