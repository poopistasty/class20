var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  
  movingrect=createSprite(100,200,50,50);
  fixedrect=createSprite(500,200,50,50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  movingrect.velocityX=10;
  fixedrect.velocityX=-10;
}

function draw() {
  background(255,255,255);  
 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
  } 
 drawSprites();
}