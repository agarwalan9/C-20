var object1;
var object2;

function setup() {
  
  createCanvas(800,400);

  object1 = createSprite(400, 200, 50, 50);
  object1.shapeColor = "blue";

  object2 = createSprite(200,200,50,50);
  object2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  object1.x = World.mouseX;
  object1.y = World.mouseY;
  console.log(object2.x-object1.x);

  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
    object1.shapeColor = "pink";
    object2.shapeColor = "pink";
  } else{
    object1.shapeColor = "blue";
    object2.shapeColor = "blue";
  }

  drawSprites();
}