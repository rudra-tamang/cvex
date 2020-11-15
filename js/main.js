window.onload = function () {

  setTimeout(function(){
    var relax = document.getElementById("audio");
    relax.muted = false;
    relax.play();
  }, 3000);

  var rbt = document.getElementById("rbt1");
  var menuC = document.getElementById("menuContainer");
  var personalTwist = document.getElementById("personalTwist");
  var cs = getComputedStyle(rbt);

  var personalTwistHeight = rbt.offsetHeight -  (parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)) - menuC.offsetHeight - 20;
  personalTwist.style.minHeight = personalTwistHeight + "px";
  personalTwist.style.maxHeight = personalTwistHeight + "px";


  console.log(personalTwistHeight);
}

function fader(ele) {

  if (ele.id == "home") {
    //console.log(ele.id);
    reHide("fader");
    document.getElementById("rbt1bg").style.backgroundImage = "url('images/fish-in-a-pond.gif')";
    document.getElementById("rbt1bg").style.backgroundPosition = "auto";
    document.getElementById("rbt1bg").style.backgroundPosition = "70% center";
    document.getElementById(ele.id + "C").style.display = "block";
  } else if (ele.id == "edu") {
    //console.log(ele.id);
    reHide("fader");
    document.getElementById("rbt1bg").style.backgroundImage = "url('images/edu1.gif')";
    document.getElementById("rbt1bg").style.backgroundPosition = "center top";
    document.getElementById(ele.id + "C").style.display = "block";
  } else if (ele.id == "work") {
    //console.log(ele.id);
    reHide("fader");
    document.getElementById("rbt1bg").style.backgroundImage = "url('images/work4.gif')";
    document.getElementById("rbt1bg").style.backgroundPosition = "center center";
    document.getElementById(ele.id + "C").style.display = "block";
  } else if (ele.id == "hob") {
    //console.log(ele.id);
    reHide("fader");
    document.getElementById("rbt1bg").style.backgroundImage = "url('images/hob3.gif')";
    document.getElementById("rbt1bg").style.backgroundPosition = "center top";
    document.getElementById(ele.id + "C").style.display = "block";
  }

}

function reHide(funCaller) {
  switch (funCaller) {
    case "fader":
      //console.log(funCaller);
      var personalTwist = document.getElementById("personalTwist");

      for (i = 0; i < personalTwist.childElementCount; i++) {
        personalTwist.children[i].style.display = "none";
      }
      break;
    case "nextWork":
      var workCEx = document.getElementById("workC");
      //console.log(workCEx);
      var nextOne;
      for (i = 0; i < workCEx.childElementCount - 1; i++) {
        if (workCEx.children[i].classList.contains("workExS") == true) {
          workCEx.children[i].classList.remove("workExS");
          if (i < workCEx.childElementCount - 2) {
            nextOne = i + 1;
          } else {
            nextOne = 0;
          }
        }
        workCEx.children[i].classList.add("workExH");
      }
      workCEx.children[nextOne].classList.remove("workExH");
      workCEx.children[nextOne].classList.add("workExS");
      return nextOne;
      break;
  }
}

function nextWork() {
  var nextShow = reHide("nextWork");
  console.log(nextShow + " - Visible");
}
