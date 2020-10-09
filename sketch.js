var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sam , samimage ;
var ground , groundimage ,  invisibleGround;
var car1 , car2 , car3, carimage1 , car2image , car3image , carGroup;

var score

function preload(){
samimage= loadImage ("bick.jpg");
  
 groundimage= loadImage("background.png");
 car1image = loadImage("car2121-1.png");
  car2image = loadImage("car2.png");
     car3image = loadImage("car3.jpg");

}

function setup() {
  createCanvas(600,300);

 
  
  ground =  createSprite(300,80,800,20);
   ground .addImage( groundimage);
  ground.scale = 2 ;
  ground.velocityX = -3;
   ground.x = ground.width /2;
  
  invisibleGround = createSprite(300,300,900,4);
  invisibleGround.visible = true;
  
  sam = createSprite(70 , 270 , 10 ,10);
  sam.addImage(samimage);
  sam.scale = 0.06;
  carGroup = createGroup ();
  

  score = 0

  
 
}

function draw() {
  background(180);
  fill("red");
  text("Score: "+ score, 500,50);

  
    
  
  
  
  
  
  if(gameState === PLAY){
  car();
      if (ground.x < 0){
      ground.x = ground.width/2;
      }
    
    if (keyDown("space")&&sam.collide(invisibleGround)){
      sam.velocityY = -8;
      
      }
      sam.velocityY = sam.velocityY + 0.3
     sam.collide(invisibleGround);
    
    score = score + Math.round(getFrameRate()/60);
    
    
    if (sam.isTouching(carGroup)){
      gameState = END
      
     sam.destroy();
      
      }
  
  }
  else if (gameState === END) {
     carGroup.setVelocityXEach(0);
    textSize(50);
    fill("black");
    text("GameOver ", 200,100);
  }
    
drawSprites();
 
}
function car(){
if (frameCount % 100 === 0){
  var car = createSprite(600,270,10,40);
   car.velocityX = -(6 + score/100);
   
   // generate random car
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: car.addImage(car1image);
              break;
      case 2: car.addImage(car2image);
              break;
      case 3: car.addImage(car3image);
              break;
      
      default: break;
    }
   car.scale = 0.3
   car.scale = 0.3
   car.scale = 0.3
   car.lifetime = 100;
  carGroup.add(car);
 
 }
}