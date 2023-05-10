var isMobile = window.orientation > -1;
if (!isMobile){window.location = "../index.html"}


var hochzeitsdatum = new Date("Sep 2, 2023 13:30:00").getTime() / 1000;

var flipdown = new FlipDown(hochzeitsdatum, {theme: "dark"}).start();

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }


    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const dus = ["Sammy & Deborah", "Deborah & Sammy", "Zinser & Gräber", "Gräber & Zinser", "Sammy & Zinser", "Zinser & Sammy", "Gräber & Deborah", "Deborah & Gräber"];

  var number;
  var voherig = 0;
  
  function getRandomInt(max) {
    number = Math.floor(Math.random() * max);
    while (number ==  voherig) {
      number = Math.floor(Math.random() * max);
    }
    voherig = number;
    return number;
  }
  
  document.getElementById("sud").onclick = function(){
    document.getElementById("sud").innerHTML = dus[getRandomInt(dus.length)];
  }