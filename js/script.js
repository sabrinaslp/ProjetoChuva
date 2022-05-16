// Seção de Resumo

var showContent = document.getElementById("showContent"); // ver mais
var textResume = document.getElementById("textResume"); // texto expandido
var resumeContent = document.getElementById("resumeContent"); // todo o conteúdo de texto
var postDiscussion = document.getElementById("postDiscussion"); // seção de discussões

function showHiddenText() {
  if (showContent.style.display === "none") {
    showContent.style.display = "inline";
    textResume.style.display = "none";
    resumeContent.style.height = '144px';
    postDiscussion.style.marginTop = '0';
  } else {
    showContent.style.display = "none";
    textResume.style.display = "block";
    resumeContent.style.height = '390px';
    postDiscussion.style.marginTop = "250px";
  }
}

// Menu responsivo

var menuSide = document.getElementById("menuSide");
var responsiveMenu = document.getElementById("responsiveMenu");
var logoSide = document.getElementById("logoSide");
var aside = document.getElementsByTagName("aside");

function showMenuResp() {
  menuSide.style.display = "block";
  menuSide.style.paddingTop = "70px";
  menuSide.style.background = "white";
  logoSide.style.position = "absolute";
  logoSide.style.display = "block";
  logoSide.style.top = "320px";
}

function hiddenMenu() {
  menuSide.style.display = "none";
  logoSide.style.display = "none";
}

// Criar novo tópico

var createTopic = document.getElementById("createTopic");
var topics = document.getElementById("topics");
var createTopicButton = document.getElementById("createTopicButton");
var homeTopic = document.getElementById("homeTopic");

function newTopic() {
  topics.style.position = "absolute";
  topics.style.width = "100%";
  topics.style.marginTop = "73px";
  createTopic.style.display = "block";
  homeTopic.style.display = "none";
  expandedTopic.style.display = "none";
  postDiscussion.style.height = "700px";
  sentTopic.style.display = "none";
  footerPage.style.marginTop = "100px";
}

// Enviar novo tópico

var sentTopic = document.getElementById("sentTopic");
var submittedTopic = document.getElementById("submittedTopic");
var sendTopicButton = document.getElementById("sendTopicButton");

function sendTopic() {
  createTopic.style.display = "none";
  sentTopic.style.display = "block";
  submittedTopic.style.display = "block";
  topics.style.marginTop = "150px";
  topics.style.left = "1px";
  expandedTopic.style.display = "none";
  footerPage.style.marginTop = "160px";
  postDiscussion.style.height = "753px";
}

// Expandir tópico

var collapsedTopics = document.getElementById("collapsedTopics");
var expandedTopic = document.getElementById("expandedTopic");
var postDiscussion = document.getElementById("postDiscussion");

function expandTopic() {
  if (sentTopic.style.display === "none") {
    expandedTopic.style.display = "block";
    postDiscussion.style.height = "1170px";
    expandedTopic.style.marginTop = "78px";
    expandedTopic.style.height = "600px";
    expandedTopic.style.position = "Absolute";
    expandedTopic.style.left = "5px";
    footerPage.style.marginTop = "650px";
  } else {
    expandedTopic.style.display = "block";
    expandedTopic.style.marginTop = "0px";
    expandedTopic.style.height = "600px";
    postDiscussion.style.height = "1170px";
    footerPage.style.marginTop = "550px";
  }
}

var footerPage = document.getElementById("footerPage");