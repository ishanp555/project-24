
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var hammer;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


	//Create the Bodies Here.
    hammer = new hammer (240,300,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  drawSprites();
 
}



