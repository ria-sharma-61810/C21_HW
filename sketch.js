
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var groundObj;
var leftSide;
var rightSide;




function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	
	

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	ball = Bodies.circle(100,100,10,ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);
	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground(1000,600,20,120);
	rightSide = new ground(1100,600,20,120);

	Engine.run(engine);
	
	
	
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  fill("white")
  ellipse(ball.position.x,ball.position.y,10);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  if(keyDown("UP_ARROW")){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.3, y:0.1})}
  
  
 
}








