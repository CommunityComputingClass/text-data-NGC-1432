let headline = "Query of Great Import"
let surveyquestion = "What is thy favorite song? By what artist?"
let myFont;
let contents = "";
let buttonSavePost
let textBox;
let buttonPrintPosts
let theanswers = ["Everybody Wants To Rule The World - Tears for Fears","Gangsta's Paradise - Coolio","Darwin Derby - Vulfpeck","360 - Charli XCX",
  "Can't Touch This - MC Hammer","All The Stars - Kendrick Lamar\, SZA","Mighty Wings - Cheap Trick","When Doves Cry - Prince",
  "Make Me Feel - Janelle Monae","Red Wine Supernova - Chappell Roan","Make You Mine - Madison Beer",
  "She Calls Me Daddy - King Mala","After Midnight - Chappell Roan","Wade In The Water - Unknown"]

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