let theme = localStorage.getItem("theme");
if(theme == null){
    setTheme("light")
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot");

for(var i= 0; i < themeDots.length; i++){
    themeDots[i].addEventListener("click", function(){
     let mode = this.dataset.mode
     console.log("ooption clicked:", mode)
     setTheme(mode)
    })
}

function setTheme(mode){
if(mode == "light"){
    document.getElementById("theme-style").href = "default.css"
}
if(mode == "blue"){
    document.getElementById("theme-style").href = "theme.css"
}
if(mode == "green"){
    document.getElementById("theme-style").href = "green.css"
}
if(mode == "purple"){
    document.getElementById("theme-style").href = "purple.css"
}

localStorage.setItem("theme", mode)
}



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });