
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,stoneobj,chain;

function preload(){
	boy=loadImage("images/boy.png");
	//stone1=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	/*stoneobj=createSprite(230,420,20,20);
	stoneobj.addImage(stone1);
	stoneobj.scale=0.07;*/

	mango1=new mango(1100,120,30);
	mango2=new mango(1000,150,30);
	mango3=new mango(1135,170,35);
	mango4=new mango(1045,80,30);
	mango5=new mango(1050,180,30);
	mango6=new mango(950,185,30);
	mango7=new mango(1200,180,45);

    stoneobj=new stone(230,410);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	chain=new slingshot(stoneobj.body,{x:230,y:410})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stoneobj.display();
  groundObject.display();

  chain.display();

  detectcollision(stoneobj,mango1);
  detectcollision(stoneobj,mango2);
  detectcollision(stoneobj,mango3);
  detectcollision(stoneobj,mango4);
  detectcollision(stoneobj,mango5);
  detectcollision(stoneobj,mango6);
  detectcollision(stoneobj,mango7);

  drawSprites();
}

function mouseDragged(){

	Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
	
}

function mouseReleased(){
	chain.fly();
    //Matter.Body.setStatic(stoneobj.body,false);
}

function detectcollision(lstone,lmango){
	mangobodypos=lmango.body.position;
	stonebodypos=lstone.body.position;

	var distance=dist(stonebodypos.x,stonebodypos.y,mangobodypos.x,mangobodypos.y);
	if(distance<=100){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		chain.attach(stoneobj.body);
	}
}