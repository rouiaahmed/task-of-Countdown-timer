
  loadEventListeners();

  function loadEventListeners() {
    document.addEventListener('DOMContentLoaded',
     function() { 
       calcTime();
       });
  };
  
  var countDate = document.getElementsByClassName("datee").value;
  let text = document.getElementsByClassName("memory").value;
      now = new Date(),
      newTime = new Date('1.1.2021').getTime(),
    countTimer = '';
  
  function calcTime(dates) {
    clearInterval(countTimer);
  
    if(typeof(dates) == 'undefined'){
      date = new Date(newTime).getTime();
    }else {
      date = new Date(dates).getTime();
    }
  
    function newTimer(date){
  
      var now = new Date().getTime();
      var diff= date - now;
  
           const  seconds = 1000;
                  minutes = seconds * 60;
                  hours = minutes * 60;
                  days = hours * 24;

         document.getElementById("days").innerHTML = Math.floor(diff / (days));
           document.getElementById("hours").innerHTML = Math.floor((diff % (days)) / (hours));
          document.getElementById("minutes").innerHTML = Math.floor((diff % (hours)) / (minutes));
          document.getElementById("seconds").innerHTML = Math.floor((diff % (minutes)) / seconds);
      
          if(diff <= 0){
            			clearInterval(loadEventListeners);
                  document.getElementById("days").innerHTML = "0";
                  document.getElementById("hours").innerHTML = "0";
                 document.getElementById("minutes").innerHTML = "0";
                 document.getElementById("seconds").innerHTML	="0";
          }
        
        }
      
        
           countTimer = setInterval(function() { newTimer(date);
           }, 1000);
      }
  