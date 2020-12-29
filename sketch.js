const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Engine=Matter.Engine;
const World=Matter.World;
var engine,world;
var boy,boyimg;
var lightning,limg,lg;
var maxDrops=100;
var drops=[]
function preload(){
limg=loadAnimation("1.png","2.png","3.png","4.png");
lg=new Group() 
  boyimg=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")   
}

function setup(){
createCanvas(500,500)  
engine=Engine.create();
world=engine.world;
Engine.run(engine);  
  boy=createSprite(250,300,20,20);
  boy.addAnimation("moving",boyimg) 
  boy.scale=0.5 


  for(var i=0; i<maxDrops; i++){
    drops.push(new rain(random(0,400),random(0.400)));
  }

}

function draw(){
  background(0);
  Lightning()
  textSize(20);
  fill("red");
  text("made by Ayush",350,350);  
  for(var i=0; i<maxDrops; i++){
    drops[i].display()
  }

  drawSprites()  
}   
function Lightning(){
  if(frameCount%50===0){
lightning=createSprite(Math.round(random(50,350)),30,20,20);
lightning.addAnimation("ml",limg);
lightning.scale=0.5
lightning.lifetime=100;
  }
 // lg.add(lightning) 
}
