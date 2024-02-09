// Election Countdown
var countdownDate = new Date("February 17, 2024 13:00:00").getTime(); // Just adjust the date and time to election when needed
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (100 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);

const yesBtn = document.getElementById('choices-yes');
const noBtn = document.getElementById('choices-no');
const yesContent = document.getElementById('ifYes');
const noContent = document.getElementById('ifNo');

yesBtn.addEventListener('click', () => {    
    yesContent.style.display = 'block';
    noContent.style.display = 'none';
  });

noBtn.addEventListener('click', () => {
    yesContent.style.display = 'none';
    noContent.style.display = 'block';
  });
