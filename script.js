var countdown = $("#countDown");
var count = 60;


//start the timer
var timeLeft = 10;
$("#startButton").click(function(){
    

    var timeInterval = setInterval(function() {
        countdown.text(timeLeft + " seconds remaining");
      timeLeft--;
     
      if (timeLeft === 0) {
        countdown.text("") ;
        clearInterval(timeInterval);
      }
      else{
        dotheTest();
      }
  
    }, 1000);
    
  });

  function dotheTest(){
      $("#questions").text(timeLeft)
  };
