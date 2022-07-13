// Set the date we're counting down to
var countDownDate = new Date("Sep 2, 2023 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  if (((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 12){
    var days = Math.floor((distance / (1000 * 60 * 60 * 24)) + 1);
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  }

  if (((distance % (1000 * 60 * 60)) / (1000 * 60)) > 30){
    var hours = Math.floor((distance / (1000 * 60 * 60)) + 1);
  } else {
    var hours = Math.floor(distance / (1000 * 60 * 60));
  }
  
  if (((distance % (1000 * 60)) / 1000) > 30){
    var minutes = Math.floor((distance / (1000 * 60)) + 1);
  } else {
    var minutes = Math.floor(distance / (1000 * 60));
  }
  
  if ((distance % (1000)) > 500){
    var seconds = Math.floor((distance / 1000) + 1);
  } else {
    var seconds = Math.floor(distance / 1000);
  }

  // Display the result in the element with id="demo"
  document.getElementById("cdtm").innerHTML = days + " Tagen<br>" + hours + " Stunden<br>"
  + minutes + " Minuten<br>" + seconds + " Sekunden";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cdtm").innerHTML = "Entweder bist du zu spät,<br>oder nicht aufmerksam";
  }
}, 1);