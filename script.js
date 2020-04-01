var countdown = $("#countDown");
var count = 60;
var questionList = $("#questionList");
var modalScreen = $(".modal-content");
var result = $("#result");
var currentQuestion = 0;
var correctCount = 0;
var incorrectCount = 0;

var quizQuestions = [
  {
    "question": "If Button is clicked .......Event Handler is invoked",
    "choices": ["onSubmit()", "onLoad()", "isPostBack()", "onClick()"],
    "answer": ["-", "-", "-", "+"]
  }
  ,
  {
    "question": "Which built-in method calls a function for each element in the array?",
    "choices": ["while()", "loop()", "forEach()", "None of the above"],
    "answer": ["-", "-", "+", "-"]
  }
  ,
  {
    "question": "Which of the following function of Array object returns a string representing the array and its elements?",
    "choices": ["toSource()", "sort()", "splice()", "toString()"],
    "answer": ["-", "-", "-", "+"]
  }
  ,
  {
    "question": "Which Of The Dialog Box Display a Message And a Data Entry Field",
    "choices": ["Alert()", "prompt()", "confirm()"],
    "answer": ["-", "+", "-"]
  }



];



//start the timer
var timeLeft = 10;

$("#startButton").click(function () {
  $("#startButton").hide();
  writeQuestions(currentQuestion);
  var timeInterval = setInterval(function () {
    countdown.text(timeLeft + " seconds remaining");
    timeLeft--;

    if (timeLeft === 0) {
      countdown.text("");
      clearInterval(timeInterval);
      modalPopup();
    }


  }, 1000);

});

$("#questionList ").on("click", ".choiceSelected", function () {

  var answer = $(this).attr("data-answer");
  result.empty();
  // + indicates that the correct answer was selected
  if (answer === "+") {
    $("#result").append("<p>Correct!</p>");
    correctCount++;
  }
  else {
    $("#result").append("<p>Wrong</p>");
    incorrectCount++
    timeLeft - 10;
    countdown.text(timeLeft + " seconds remaining");

  }
  currentQuestion++
  if (currentQuestion === quizQuestions.length) {
    
    countdown.text("");
    questionList.empty();
    modalPopup();

  }
  else {
    writeQuestions(currentQuestion)
  }

});

$("#saveChanges").click(function () {

  var playerName = $("#yourName").val()
  localStorage.setItem(playerName, correctCount);
  $('#myModal').modal('hide');
});

$("#highScore").click(function () {
  max = null;
  player = ""
  for (var i = 0; i < localStorage.length; i++) {

    //get the highest score
    var propertyName = localStorage.key(i);
    var score = localStorage.getItem(propertyName);
    if ((max === null) || (localStorage.getItem(propertyName) > max)) {
      max = localStorage.getItem(propertyName);
      player = propertyName
    }

    console.log(i + " : " + propertyName + " = " +
      localStorage.getItem(propertyName));


  }
  modalHighScore(player, max)
});

function modalPopup() {
  result.empty();
  $(".modal-body").empty();
  $('.modal-title').text("Your Score");
  $(".modal-body").append("<p>correct: " + correctCount + "  incorrect: " + incorrectCount + "</p>")
  $(".modal-body").append('<p><input type="text" id="yourName"> Enter your to save score </p>')
  $("#saveChanges").show();
  $('#myModal').modal('show');
  $("#startButton").show();

};
function modalHighScore(player, max) {
  $(".modal-body").empty();
  $('.modal-title').text("High Score");
  $(".modal-body").append("<p>" + player + " has the highest score of " + max + " correct answers!</p>")
  $("#saveChanges").hide();
  $('#myModal').modal('show');
  $("#startButton").show();

};
function writeQuestions(questionNum) {
  questionList.empty();


  questionList.append("<p><h5>" + quizQuestions[questionNum].question + "</h5></P>");

  for (var i = 0; i < quizQuestions[questionNum].choices.length; i++) {

    questionList.append('<button type="button" data-answer="' + quizQuestions[questionNum].answer[i] + '" class="list-group-item list-group-item-action choiceSelected">' + quizQuestions[questionNum].choices[i] + '</button>');


  };



}