// grabbing html elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    toggleSeconds = document.getElementById('toggleSeconds');

// function to set time
function showTime() {
   let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();
    
// set AM or PM
    const amPM = hours >= 12 ? 'PM' : 'AM';

// Make hours go 1-12 instead of 1-23
    hours = hours % 12 || 12;


// insert time into html element  
    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;

// add zeros onto minutes and seconds when < 10
    function addZero (n){
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

// run function every second
    setTimeout(showTime, 1000);
}    
    




// change theme per time of day
function setGreetBg() {
    let today = new Date(),
        hours = today.getHours();

    if (hours < 12) {
    document.body.style.background = "linear-gradient(rgba(220,220,220,0), rgba(0,0,0,0)), url('nyc_morning.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "bottom";
    document.body.style.color = "white";
    document.body.style.textShadow = "3px 3px black";
    greeting.innerHTML = "Good morning,";
}
else if (hours < 18) {
    document.body.style.background = "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.7)), url('nyc_day.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    document.body.style.textShadow = "2px 2px black";
    greeting.innerHTML = "Good afternoon,";
}
else {
    
    document.body.style.backgroundImage = "linear-gradient(rgba(200,200,200,0), rgba(0,0,0,.5)), url('nyc_night.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.color = "white";
    document.body.style.textShadow = "3px 3px black";
    greeting.innerHTML = "Good Evening,";
}
}



// // Get Name
function getName(){
    if (localStorage.getItem("name") === null){
        name.innerHTML = "[Enter Name]";
    }
    else {
        name.innerHTML = localStorage.getItem("name");
    }
}

// Set Name
function setName(e){
        if (e.which == 13 || e.keycode == 13){
            localStorage.setItem("name", e.target.innerHTML);
            name.blur();
        }
        else {
            localStorage.setItem("name", e.target.innerHTML);
        }    
}


// Get Focus
function getFocus() {
    if (localStorage.getItem("focus") === null){
        focus.innerHTML = "[Enter Your Focus Here]";
    }
    else {
        focus.innerHTML = localStorage.getItem("focus");
    }
}

// Set Focus
function setFocus(e){
    if (e.which == 13 || e.keycode == 13){
        localStorage.setItem("focus", e.target.innerHTML);
        focus.blur();
    }
    else {
        localStorage.setItem("focus", e.target.innerHTML);
    }
}





name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);



// run function
showTime();
setGreetBg();
getName();
getFocus();
