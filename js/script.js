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

  