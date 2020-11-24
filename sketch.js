var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,50,100);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background("black");  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}