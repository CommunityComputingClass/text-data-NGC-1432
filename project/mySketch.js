let headline = "Query of Great Import"
let surveyquestion = "What is thy favorite song?"
let myFont;
let contents = "";

function preload(){
  myFont = loadFont("CloisterBlack.ttf")
}

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("white");
  fill("black");
  textSize(25)
  textFont(myFont)
  text(headline, 25, 75)
  SurveyQuery(25,100)
  fill("black");
  textSize(20)
  textFont(myFont)
  text(contents, 25,150,200,600)
}

function SurveyQuery(x,y){
  fill("black")
  textSize(20)
  textFont(myFont)
  text(surveyquestion, x, y)
}

function keyTyped() {
  contents = contents + key;
}