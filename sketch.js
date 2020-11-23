var PLAY=1;
var END=0;
var z1,z1img;
var backgroundimg;
var s1,s1img;
var t1,t1img;
var ghostimg;
var batimg;
var invisibleGround;
var bg;
var ob1,ob1img, obGroup;
var gameState = PLAY;
var s1collided;
var cz1collided
function preload(){
z1img=loadAnimation("zombie1.png","zombie2.png","zombie4.png","zombie5.png","zombie6.png","zombie7.png","zombie8.png","zombie9.png","zombie10.png")  
  backgroundimg=loadImage("background.jpg")
  s1img=loadAnimation("simba1.png","simba2.png","simba3.png","simba4.png","simba5.png","simba6.png","simba7.png")
 // t1img=loadAnimation("t1.gif")
ghostimg=loadImage("ghost.png")
batimg=loadImage("bat.png")
ob1img=loadImage("obstacle1.png")
}

function setup() {
  createCanvas(800, 800);
  bg=createSprite(500,400,3500);
bg.addImage("background1",backgroundimg);
obGroup=new Group();

bg.velocityX=-5;
//bg.y=bg.height/2;
bg.scale=2.5;
bg.x=bg.width/2;
  z1=createSprite(70,550,10,100);
  z1.addAnimation("zombie",z1img);
  z1.scale=0.5;
  z1.setCollider("circle",0,0,85);
 
  s1=createSprite(350,550,10,10);
  s1.addAnimation("simba",s1img);
  s1.scale=0.8;
  
  s1.setCollider("circle",0,0,85);
  //t1=createSprite(200,200,10,10);
  //t1.addAnimation("t1",t1img);
   invisibleGround = createSprite(600,650,1000,5);
  invisibleGround.visible = false;
  ghostGroup = new Group();
  batGroup = new Group();

}

function draw() {
  background("black" );
  console.log(gameState)
  spawnGhost();
    spawnBat();
    spawnOb1();
  if(gameState === PLAY){
    
    if (keyDown("space")) {
     s1.velocityY=-10;
  
    }
    s1.velocityY=s1.velocityY+0.8;
    if(obGroup.isTouching(s1)){
      gameState =END;
    }
  }
  else if(gameState === END) {
    //set velcity of each game object to 0
    s1.velocityY = 0;
    z1.velocityY = 0;
    obGroup.setVelocityXEach(0);
    ghostGroup.setVelocityXEach(0);
    batGroup.setVelocityXEach(0);
    //restart.visible=true;
    //gameOver.visible=true;
    
    obGroup.setLifetimeEach(-1);
    ghostGroup.setLifetimeEach(-1);
    batGroup.setLifetimeEach(-1);
  }
  //z1.velocityX=5;
 // s1.velocityX=5;
  
s1.collide(invisibleGround);

if(bg.x<0){
bg.x=bg.width/2;

}
  drawSprites();
}

function spawnGhost(){
if(frameCount % 120===0) {
var ghost=createSprite(300,400,10,10);
ghost.addImage("ghost",ghostimg);
ghost.velocityX=-3;
ghost.scale=0.3;
ghost.lifetime=100;
ghostGroup.add(ghost);
}
}

function spawnBat(){
  if(frameCount % 180===0) {
  var bat=createSprite(300,300,10,10);
  bat.addImage("bat",batimg);
  bat.velocityX=3;
  bat.scale=0.55;
  bat.lifetime=200;
  batGroup.add(bat);
  }

}
function spawnOb1(){
  if(frameCount % 180===0) {
  var ob1=createSprite(650,600,10,10);
  ob1.addImage("ob1",ob1img);
  ob1.velocityX=-3;
  ob1.scale=0.15;
  ob1.lifetime=200;
  obGroup.add(ob1);
  }
}



















