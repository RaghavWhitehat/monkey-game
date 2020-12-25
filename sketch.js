
var monkey , monkey_running
var ground,movingground;
var obstacle,obstacleImage,obstacleGroup;
var banana,bananaImage,bananaGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  obstaclesImage=loadImage("obstacle.png")
  bananaImage=loadImage("banana.png")
 
}



function setup() {
  canvas=(600,500);
 monkey=createSprite(120,300,10,20)
  monkey.addAnimation("monkey",monkey_running)
 monkey.scale=0.1;

  ground=createSprite(170,332,600,5)
  
  
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
}


function draw() {
background("lightGreen")  
 if (ground.x < 0){
   ground.x = ground.width/2;
   ground.velocityX=-4;
 }
  if (keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8; 
   
 
monkey.collide(ground)
 drawSprites(); 
}

function spawnObstacles(){
     if(World.frameCount%50===0)
    obstacle=createSprite(400,470,20,20)
     obstacle.addImage(obstacleImage);
    obstacle.y=Math.round(random(100,300))
    obstacle.velocityX=-8;
    obstacle.setLifetime=200;
    
    obstacleGroup.add(obstacle);
   
 } 
function spawnBananas(){
  if(World.frameCount% 30 === 0)
    banana=createSprite=(400,390,20,20)
  obstacle.addImage(bananaImage);
  banana.y=Math.round(random(100,300))
obstacle.velocityX=-10;
  banana.setLifetime=200
  
  bananaGroup.add(banana)
} 




