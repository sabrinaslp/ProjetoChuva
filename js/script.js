// Seção de Resumo

var showContent = document.getElementById("showContent"); // ver mais
var textResume = document.getElementById("textResume"); // texto expandido
var resumeContent = document.getElementById("resumeContent"); // todo o conteúdo de texto

function showHiddenText() {
    if (showContent.style.display === "none") {
     showContent.style.display = "inline";
     textResume.style.display = "none";
     resumeContent.style.height = '144px';
    } else {
      showContent.style.display = "none";
      textResume.style.display = "block";
      resumeContent.style.height = '390px';
    }
  }

// Menu responsivo

var menuSide = document.getElementById("menuSide")
var responsiveMenu = document.getElementById("responsiveMenu")
var logoSide = document.getElementById("logoSide")
var aside = document.getElementsByTagName("aside")

function showMenuResp() {
  menuSide.style.display ="block";
  menuSide.style.paddingTop = "70px";
  menuSide.style.background = "white";
  logoSide.style.position = "absolute";
  logoSide.style.display = "block";
  logoSide.style.top = "320px";
}

function hiddenMenu() {
  menuSide.style.display ="none";
  logoSide.style.display = "none";
}


  