const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");
 
  if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode"
  }

  modeSwitch.addEventListener("click",() =>{
    body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");

  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  localStorage.setItem("mode",isDarkMode ? "Dark Mode" : "Light Mode");

});


 const updateTime = () => {
     let date = new Date(),
     SecToDeg = (date.getSeconds () / 60) *360;
     minToDeg = (date.getMinutes () / 60) *360;
     hrToDeg = (date.getHours () / 12)  *360; 
    //  console.log(SecToDeg);

     secondHand.style.transform = `rotate(${SecToDeg}deg)`
     minuteHand.style.transform = `rotate(${minToDeg}deg)`
     hourHand.style.transform = `rotate(${hrToDeg}deg)`
  

 };

setInterval(updateTime,1000);



updateTime();