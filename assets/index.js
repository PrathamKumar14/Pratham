var isPop = false;

function animateButton() {
  if (isPop == 0) {
    document.getElementById("btn1").style.transform =
      "translateY(-70px) rotate(1080deg)";
    document.getElementById("btn2").style.transform =
      "translateY(-140px) rotate(1080deg)";
    document.getElementById("btn3").style.transform =
      "translateY(-210px) rotate(1080deg)";
    document.getElementById("btn4").style.transform =
      "translateY(-280px) rotate(1080deg)";

    // document.getElementById("btn1").style.transform = "";

    isPop = true;
  } else {
    document.getElementById("btn1").style.transform = "translateY(0)";
    document.getElementById("btn2").style.transform = "translateY(0)";
    document.getElementById("btn3").style.transform = "translateY(0)";
    document.getElementById("btn4").style.transform = "translateY(0)";

    isPop = false;
  }
}
