gamestate=1
var drum,drumgroup;
var count=3;
var bkg;
var zombie,zimg
function preload(){
  bkg=loadImage("Pics/adi1.jpg")
  knn=loadAnimation("Pics/a1/tile000.png","Pics/a1/tile001.png","Pics/a1/tile002.png",
  "Pics/a2/tile000.png","Pics/a2/tile001.png","Pics/a2/tile002.png",
 "Pics/a3/tile001.png","Pics/a3/tile002.png");

 //knn2=loadAnimation("Pics/1.png","Pics/2.png", "Pics/3.png")

 ob=loadImage("Pics/obs2.png")

 lives=loadImage("Pics/a4/tile000.png")

 zimg=loadAnimation("Pics/zz1.png", "Pics/zz2.png");
 
 
}
function setup() { 
  createCanvas(1300,500); 
 ground= createSprite(650, 500-20, 1300,40)
 //ground.visible=false;

 player=createSprite(70,135,50,50)
 player.addAnimation("running",knn);
 player.scale=0.5;
 //player.shapeColor="red"

 player2=createSprite(70,135,50,50)
 //player2.addAnimation("walking",knn2);
 player2.scale=0.5;

 player2.visible=false;

  life1=createSprite(1100,50);
  life1.addImage(lives);
  life1.scale=0.2

  life2=createSprite(1200,50);
  life2.addImage(lives);
  life2.scale=0.2

  life3=createSprite(1000,50);
  life3.addImage(lives);
  life3.scale=0.2

 drumgroup=new Group();

 zombie=createSprite(1150,135,50,50)
    zombie.addAnimation("zombies",zimg);
    zombie.scale=0.4
    zombie.visible=false
    zombie.speed=0.3
    
 exitgate1=createSprite(1290,250,10,500) 

 
 
}

function draw(){
  background(bkg);
  
  
  if(gamestate===1)
  {
    
  if(keyDown("space") && (player.y>=250)){
    player.velocityY=-10;
    
  }
  player.velocityY+=0.8;
  
  
  
  
  player.collide(ground)
  
  
  if(keyDown("right")){
    player.x+=8;
    
  }
    spawnObstacles();
    if(drumgroup.isTouching(player)){
      count=count-1;
      drumgroup.destroyEach();
        if(count===2)
        {
            life3.visible=false;
        }
        if(count===1)
        {
          life2.visible=false;
        }
        if(count===0)
        {
            life1.visible=false;
            gameState="end"
        }
    }
}
  if(player.isTouching(exitgate1)){
    gamestate=2;
    player.destroy();
    //player2.collide(ground)
    
    
  }

  if(gamestate===2){
    bkg=loadImage("Pics/adi3.jpg");
    player2.visible=true;
    zombie.visible=true;
    
  if(keyDown("space") && (player2.y>=250)){
    player2.velocityY=-10;
    
  }
  player2.velocityY+=0.8;
  
  
  
  
  player2.collide(ground)
  
 
  if(keyDown("right")){
    player2.x+=8;
    
  }
  }
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%60===0){
    drum = createSprite(1300,400) 
    drum.addImage(ob);
    drum.scale=0.2;
    drum.velocityX=-7
    drum.lifetime=1300;
    drum.rotationSpeed=7
 drumgroup.add(drum);
 }
}

