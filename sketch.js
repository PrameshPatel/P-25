
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg;
var bin1,bin2,bin3;
var ground;

function preload()
{
    
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,550,20);
	bin1 = new Dustbin(600,550,110,20);
	bin2 = new Dustbin(550,490,20,160);
	bin3 = new Dustbin(650,490,20,160);
	ground = new Ground(400,570,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-60});
	}
}

