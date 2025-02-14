let headline = "Query of Great Import"
let surveyquestion = "What is thy favorite song? By what artist?"
let myFont;
let contents = "";
let buttonSavePost
let textBox;
let buttonPrintPosts
let theanswers = []

function preload(){
  myFont = loadFont("CloisterBlack.ttf")
}

function setup() {
  createCanvas(1000, 800);
  buttonSavePost = createButton("Save Post")
  buttonSavePost.position(20,120)
  buttonSavePost.mousePressed(saveAnswer)

  buttonPrintPosts = createButton("Show Replies")
  buttonPrintPosts.position(100,120)
  buttonPrintPosts.mousePressed(showText)

  textBox = createInput("answer goes here")
  textBox.size(300,40)
  textBox.position(25,150)
  textBox.input(storeText)

}

function draw() {
  fill("black");
  textSize(25)
  textFont(myFont)
  text(headline, 25, 75)
  SurveyQuery(25,100)
}
function saveAnswer(){
  theanswers.push(contents)
  contents = "";
  textBox.value("type your answer here")
  print(theanswers)
}

function showText(){
  let specificY = 250
  let specificX = 25
  for (let n = 0; n<theanswers.length; n++){
    textSize(20)
    textFont(myFont)
    text(theanswers[n],specificX,specificY);
    specificY +=50
    console.log(specificY)
    if(specificY>840){
      specificY = 250
      specificX = 550
    }
  }

}
function SurveyQuery(x,y){
  fill("black")
  textSize(20)
  textFont(myFont)
  text(surveyquestion, x, y)
}

function storeText() {
  contents = this.value()
}