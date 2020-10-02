// Dark and light theme

const toggler = document.getElementById("t");

toggler.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("frontend").classList.toggle("stroke");
  document.getElementById("cursor").classList.toggle("stroke");
  document.getElementsByClassName("my-name")[0].classList.toggle("stroke");
  document.getElementById("resume-btn").classList.toggle("btn-bg");
  document.getElementById("text-wrapper").classList.toggle("au-text-bg");
  document.getElementById("path").classList.toggle("border");
});

// Typing effect

setInterval(() => {
  setTimeout(function () {
    if (cursor) {
      document.getElementById("cursor").innerHTML = "_";
      document.getElementById("cursor").style.opacity = 0;
      cursor = false;
    } else {
      document.getElementById("cursor").innerHTML = "_";
      document.getElementById("cursor").style.opacity = 1;
      cursor = true;
    }
  }, 0);
}, 400);

// Expand Timeline

var isOpen = false;

function expandTimeline() {
  if (!isOpen) {
    document.getElementById("list-wrapper").style.height = "auto";
    document.getElementById("expand-btn").innerHTML = "COLLAPSE";
    isOpen = true;
  } else {
    document.getElementById("list-wrapper").style.height = "94px";
    document.getElementById("expand-btn").innerHTML = "EXPAND";
    isOpen = false;
  }
}

// Resume modal view

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("resume-btn");
var modalImg = document.getElementById("img01");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./assets/Img/Resume.jpg";
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Footer

var isPop = false;

function animateButton() {
  if (isPop == 0) {
    document.getElementById("btn1").style.transform =
      "translateX(-62px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateX(-124px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateX(-186px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateX(-248px) rotate(1080deg)";
    document.getElementById("btn5").style.transform =
      "translateY(-52px) rotate(1080deg)";
    document.getElementById("btn6").style.transform =
      "translateY(-104px) rotate(1080deg)";
    document.getElementById("btn7").style.transform =
      "translateY(-156px) rotate(1080deg)";
    document.getElementById("btn8").style.transform =
      "translateY(-208px) rotate(1080deg)";
    document.getElementById("btn9").style.transform =
      "translateY(-260px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateX(0)";
    document.getElementById("btn2").style.transform = "translateX(0)";
    document.getElementById("btn3").style.transform = "translateX(0)";
    document.getElementById("btn4").style.transform = "translateX(0)";
    document.getElementById("btn5").style.transform = "translateY(0)";
    document.getElementById("btn6").style.transform = "translateY(0)";
    document.getElementById("btn7").style.transform = "translateY(0)";
    document.getElementById("btn8").style.transform = "translateY(0)";
    document.getElementById("btn9").style.transform = "translateY(0)";

    isPop = false;
  }
}
