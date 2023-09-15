var body = document.body;
var header = document.createElement("header");
var view_hs = document.createElement("p");
var time_text = document.createElement("p");
var countdown_timer = document.createElement("span");
var secondsLeft = 60;
var main_el = document.createElement("main");

var section1 = document.createElement("section")
section1.id = "intro_start";
section1.classList.add("section_center");

var intro_start_title = document.createElement("h1");
var intro_start_description = document.createElement("p")
var intro_start_button = document.createElement("button")





// enter text
view_hs.textContent = "View high scores";
time_text.textContent = "Time:";
intro_start_title.textContent = "Coding Quiz Challenge";

intro_start_description.textContent = "Try to answer the next 10 questions within the time limit. If you submit a wrong answer your time will be deducted by 10seconds!";

intro_start_button.textContent = "Start Quiz";


body.appendChild(header);
header.appendChild(view_hs);
header.appendChild(time_text);
time_text.appendChild(countdown_timer);
body.appendChild(main_el);
main_el.appendChild(section1);
section1.appendChild(intro_start_title);
section1.appendChild(intro_start_description);
section1.appendChild(intro_start_button);





// timer below
function setTime() {

  var timerInterval = setInterval(function () {

    secondsLeft--;
    countdown_timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log('game over')
    }

  }, 1000)
};


// function to render question

function startQuiz() {
  var questionsIndex = 0;

  main_el.innerHTML = '';

  var section2 = document.createElement("section");
  section2.id = "question_section";
  section2.classList.add("section_center");
  main_el.appendChild(section2);

  var question_text = document.createElement("h2");
  question_text.id = "question_text"
  question_text.textContent = questions[questionsIndex].questionText;

  section2.appendChild(question_text);

  var li1 = document.createElement("button");
  var li2 = document.createElement("button");
  var li3 = document.createElement("button");
  var li4 = document.createElement("button");

  var listEl = [li1, li2, li3, li4]

  for (var i = 0; i < listEl.length; i++) {
    listEl[i].textContent = questions[questionsIndex].choices[i];
    section2.appendChild(listEl[i]);
  }

  listEl[questions[questionsIndex].correctAnswer_choicesIndex].id = "correct_answer";



};

intro_start_button.addEventListener('click', function () {
  setTime();
  startQuiz();

});

