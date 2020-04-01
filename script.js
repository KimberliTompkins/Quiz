var countdown = $("#countDown");
var count = 60;
var questionList = $("#questionList");
var result = $("#result");
var currentQuestion = 0;
var correctCount = 0;
var incorrectCount = 0;

var quizQuestions = [
    {"question":"If Button is clicked .......Event Handler is invoked",
     "choices":["onSubmit()","onLoad()","isPostBack()","onClick()"],
     "answer": ["-","-","-","+"]}    
    ,
    {"question":"Which built-in method calls a function for each element in the array?",
     "choices":["while()","loop()","forEach()","None of the above"],
     "answer":["-","-","+","-"]}
     ,
     {"question":"Which of the following function of Array object returns a string representing the array and its elements?",
     "choices":["toSource()","sort()","splice()","toString()"],
     "answer": ["-","-","-","+"]}     
    ,
    {"question":"Which Of The Dialog Box Display a Message And a Data Entry Field",
     "choices":["Alert()","prompt()","confirm()"],
     "answer": ["-","+","-"]}     
    
    
    
];



//start the timer
var timeLeft = 1000;
$("#startButton").click(function(){
    $("#startButton").hide();
    writeQuestions(currentQuestion);
    var timeInterval = setInterval(function() {
        countdown.text(timeLeft + " seconds remaining");
      timeLeft--;
     
      if (timeLeft === 0) {
        countdown.text("") ;
        clearInterval(timeInterval);
        modalPopup();
      }
      
  
    }, 1000);
    
  });

  $("#questionList ").on("click",".choiceSelected",function(){
         
         var answer = $(this).attr("data-answer");
         result.empty();
         // + indicates that the correct answer was selected
         if(answer === "+"){
            $("#result").append("<p>Correct!</p>");
            correctCount++;
         }
         else{
            $("#result").append("<p>Wrong</p>");
            incorrectCount++
            timeLeft-10;
            countdown.text(timeLeft + " seconds remaining");
            
         }
         currentQuestion++
         if(currentQuestion === quizQuestions.length)
         {
          timeLeft=0
          countdown.text("") ;
          clearInterval(timeInterval);
          questionList.empty()
          modalPopup()

         }
         else{
          writeQuestions(currentQuestion)
         }
         
    });
  function modalPopup(){
     result.empty();
    $('.modal-title').text("Your Score");
    $(".modal-body").append("<p>correct: "+correctCount+"  incorrect: "+incorrectCount+"</p>")
    $('#myModal').modal('show');

  };
  function writeQuestions(questionNum){
    questionList.empty();
    
    
    questionList.append("<p>"+quizQuestions[questionNum].question+"</P>");  
   
     for(var i=0;i<quizQuestions[questionNum].choices.length;i++){
     
     questionList.append('<button type="button" data-answer="'+quizQuestions[questionNum].answer[i]+'" class="list-group-item list-group-item-action choiceSelected">'+quizQuestions[questionNum].choices[i]+'</button>');
    

     };
    
   
    // <button type="button" class="list-group-item list-group-item-action ">
    //   Cras justo odio
    // </button>
    // <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
    // <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
    // <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
    // <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
  }