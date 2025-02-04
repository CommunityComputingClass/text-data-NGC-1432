let headline = "Generic Survey Title"
let surveyquestion = "Press the left arrow if thee would have thy ice cream in a cone, or the right arrow if thou wouldst have it from a cup."
let myFont;
let balance = 0

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
  text(balance,40,170)
  if (balance < 0){
    fill("azure")
    rect([400+balance],150,[0-balance],30)
  }
  if (0 < balance){
    fill("lavender")
    rect(400,150,[0+balance],30)
  }
}

function SurveyQuery(x,y){
  fill("black")
  textSize(20)
  textFont(myFont)
  text(surveyquestion, x, y)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    balance = balance -1;
  }
  if(keyCode === RIGHT_ARROW){
    balance = balance +1;
  }
}