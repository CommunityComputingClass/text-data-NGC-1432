let theMessage = "You will survive"
let myFont;

function preload(){
  myFont = loadFont("CloisterBlack.ttf")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lime");
  noStroke();
  fill("black");
  textFont(myFont)
  text(theMessage, 175, 200)
  
}