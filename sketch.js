
var backgroundImage
var food 
var CalorieState 


function preload(){
backgroundImage = loadImage("background.jpeg")
}




function setup() {
  createCanvas(1500,700);

  database = firebase.database()
  form = new Form()
  form.display();

  

  
  
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}