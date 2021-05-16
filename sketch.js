const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var d1,d2,d3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(10,375,40);
	ground= new Ground(600,400,1200,20);
	d1= new Dustbin(875,310,20,130);
	d2= new Dustbin(940,375,130,20);
	d3= new Dustbin(1005,310,20,130);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  //drawSprites();

  //keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}


