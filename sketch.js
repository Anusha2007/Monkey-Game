
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
 background("white")
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  //calling banana function
  food();
  obstacles();
  
  if (obstacleGroup.isTouching(monkey)){
    text("Game over",200,200);
    FoodGroup.destroyEach;
    obstacleGroup.destroyEach;
  }
  
  drawSprites();
}

function food() {
  if(frameCount%80===0){
  banana = createSprite(400,200,10,10);
  banana.velocityX=-4;
  banana.addImage(bananaImage);
  banana.y=Math.round(random(120,200));
  banana.scale=0.1;
  banana.lifetime=130;
    
  FoodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount%300===0){
    obstacle = createSprite(400,315,30,30);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.y=Math.round(random(314,315));
    obstacle.scale=0.2
    
    obstacleGroup.add(obstacle);
  }
}

