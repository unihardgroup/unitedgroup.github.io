window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var Header = document.querySelector(".navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky,100) {
    header.classList.add("sticky");
    Header.classList.add("header_small")
  } else {
    header.classList.remove("sticky");
    Header.classList.remove("header_small");
  }
}



/* open close div */
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const myDiv = document.getElementById("myDiv");

openBtn.addEventListener("click", function() {
  myDiv.style.display = "grid";
  setTimeout(function() {
    myDiv.classList.add("open");
  }, 10);
});

closeBtn.addEventListener("click", function() {
  myDiv.classList.remove("open");
  setTimeout(function() {
    myDiv.style.display = "none";
  }, 500);
});

/* second div opening for united agencies */

const openbtn = document.getElementById("openbtn");
const closebtn = document.getElementById("closebtn");
const mydiv = document.getElementById("mydiv");

openbtn.addEventListener("click", function() {
  mydiv.style.display = "grid";
  setTimeout(function() {
    mydiv.classList.add("open");
  }, 10);
});

closebtn.addEventListener("click", function() {
  mydiv.classList.remove("open");
  setTimeout(function() {
    mydiv.style.display = "none";
  }, 500);
});


/*ending of the modal open */
/* starting of the modal popup for the data collection */
setTimeout(function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "flex";
  modal.style.width = "500px";
  modal.style.marginLeft = "500px";
  modal.style.marginTop = "50px";
}, 5000);

// Close the modal when the user clicks on the "x"
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
};

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



/* gsap scrolling */
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".container"
});

gsap.to(".orange p", {
  scrollTrigger: ".orange", 
  duration: 2, 
  rotation: 360
});

gsap.to(".red", {
  scrollTrigger: {
    trigger: ".red",
    toggleActions: "restart pause reverse pause"
  }, 
  duration: 1, 
  backgroundColor: "#FFA500", 
  ease: "none"
});

gsap.to(".yoyo p", {
  scrollTrigger: ".yoyo", 
  scale: 2, 
  repeat: -1, 
  yoyo: true, 
  ease: "power2"
});