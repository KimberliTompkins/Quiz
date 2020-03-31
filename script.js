var countdown = $("#countDown");
var count = 60;
var questionList = $("#questionList");
var currentQuestion = 0;

var quizQuestions = [
    {"question":"What is your name?",
     "choices":["Kim","Bob"],
        "answer": ["Correct","incorrect"]}
          
    ,
    {"question":"What is your age?",
     "choices":["21","42"],
      "answer":["Correct","incorrect"]}
    
];

// var choices1 = ["Kim","Bob"];

//start the timer
var timeLeft = 10;
$("#startButton").click(function(){
    $("#startButton").hide();
    writeQuestions(currentQuestion);
    var timeInterval = setInterval(function() {
        countdown.text(timeLeft + " seconds remaining");
      timeLeft--;
     
      if (timeLeft === 0) {
        countdown.text("") ;
        clearInterval(timeInterval);
      }
      
  
    }, 1000);
    
  });

//   function dotheTest(){
//       $("#questions").text(timeLeft)
//       question1();
    //   $.each(quizQuestions, function(key, value) {
    //       writeQuestion(value);
       
    //   });
//   };
  function writeQuestions(questionNum){
    
    questionList.append("<p>"+quizQuestions[questionNum].question+"</P>");  
   
     for(var i=0;i<quizQuestions[questionNum].choices.length;i++){
    
       questionList.append('<button type="button" id="choiceSelected" class="list-group-item list-group-item-action">'+quizQuestions[questionNum].choices[i]+'</button>');
      
     };
    
   
    // <button type="button" class="list-group-item list-group-item-action ">
    //   Cras justo odio
    // </button>
    // <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
    // <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
    // <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
    // <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
  }