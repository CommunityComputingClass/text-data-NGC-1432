let headline = "Generic Placeholder Headline"
let surveyquestion = "Press any button if you like ice cream"
let myFont;

function preload(){
  myFont = loadFont("CloisterBlack.ttf")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("black");
  textSize(25)
  textFont(myFont)
  text(headline, 25, 200)
  SurveyQuery(25,250)
}

function SurveyQuery(x,y){
  fill("black")
  textSize(20)
  textFont(myFont)
  text(surveyquestion, x, y)
}

function keyPressed(){
  fill("green")
  ellipse(random(0,400),random(0,400),10,10)
}