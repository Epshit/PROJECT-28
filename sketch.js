
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,100,200,20);
	stone = new Stone(100,50,20,100);
	boy = new Boy(110,60,10,20);
	tree = new tree(700,200,10,10);
	mango1 = new Mango(650,50,20,20);
	mango2 = new Mango(600,50,20,20);
	mango3 = new Mango(550,50,20,20);
	



	Engine.run(engine);







  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stone.display();
  Body.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();

  drawSprites();

  detectcollison(stoneObj,mango1);
  detectcollison(stoneObj,mango2);
  detectcollison(stoneObj,mango3);

function keyPresseed() {
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	launcherObject.attach(stoneObj.body);	
	}
}








 
}



