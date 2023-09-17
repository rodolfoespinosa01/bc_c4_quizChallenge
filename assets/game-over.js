
function getScores() {
  return JSON.parse(localStorage.getItem('scores')) || [];
}

function gameOver() {

  main_el.innerHTML = '';
  header.innerHTML = '';
  var section2 = document.createElement("section");
  section2.classList.add("section_center");
  main_el.appendChild(section2);
  var gameOver = document.createElement('p')
  gameOver.id = "gameOver"
  section2.appendChild(gameOver);
  gameOver.textContent = "GAME OVER!"

  var allDone = document.createElement("h1");
  section2.appendChild(allDone);
  allDone.textContent = "All done!";

  var finalScore = document.createElement("p");
  section2.appendChild(finalScore);
  finalScore.textContent = "Your final Score is: " + currentScore + '/50';

  var form = document.createElement("form");
  section2.appendChild(form);
  form.id = "score-form";

  var label = document.createElement("label");
  form.appendChild(label);
  label.textContent = "Enter your Initials"

  var input_box = document.createElement("input");
  input_box.type = "text";
  input_box.id = "inputName";
  form.appendChild(input_box);

  var submit_btn = document.createElement('button')
  form.appendChild(submit_btn);
  submit_btn.textContent = "Submit";

  var scoreForm = document.querySelector("#score-form");
  scoreForm.addEventListener('submit', addScore);






  function addScore(eventObj) {

    eventObj.preventDefault();


    var nameInput = document.querySelector("#inputName");


    var scoreObject = {
      initials: input_box.value,
      finalScore: currentScore
    };

    var scores = getScores();

    scores.push(scoreObject);

    localStorage.setItem('scores', JSON.stringify(scores));

    input_box.value = '';

    showScores();
  };

};

function showScores() {

  main_el.innerHTML = '';

  var section2 = document.createElement("section");
  section2.classList.add("section_center");
  main_el.appendChild(section2);


  var hsText = document.createElement('h1');
  hsText.textContent = "All Scores";
  section2.appendChild(hsText);

  var olEl = document.createElement('ol');
  section2.appendChild(olEl);

  var scores = getScores();
  if (scores.length) {
    scores.innerHTML = '';
  }

  scores.forEach(function (scoreObj) {
    var liNew = document.createElement('li');

    liNew.innerText = scoreObj.initials + ' has a score of: ' + scoreObj.finalScore + '/50';
    olEl.appendChild(liNew);

  });


  var div = document.createElement('div');
  section2.appendChild(div);
  div.id = "lastButtons"

  var gobackBTN = document.createElement('button');
  gobackBTN.textContent = "Go Back";
  div.appendChild(gobackBTN);


  var clearhsBTN = document.createElement('button');
  clearhsBTN.textContent = "Clear High Scores";
  div.appendChild(clearhsBTN);

  gobackBTN.addEventListener('click', function () {
    window.location.href = './index.html';


  });
  clearhsBTN.addEventListener('click', function () {
    localStorage.clear();
    showScores();
  })


}














