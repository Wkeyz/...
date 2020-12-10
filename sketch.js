
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.
	// bobObject1 = new Bob(40,500,70,70);
	// bobObject2 = new Bob(110,500,70,70);
	// bobObject3 = new Bob(180,500,70,70);
	// bobObject4 = new Bob(250,500,70,70);
	// bobObject5 = new Bob(320,500,70,70);
	roof1 = new Roof(width/2,height/4,width/7,20);
	bobd=40;
	startBobX=width/2;
	startBobY=height/4+500;
bobObject1= new Bob(startBobX-bobd*2,startBobY,bobd);
bobObject2= new Bob(startBobX-bobd,startBobY,bobd);
bobObject3= new Bob(startBobX,startBobY,bobd);
bobObject4= new Bob(startBobX+bobd,startBobY,bobd);
bobObject5= new Bob(startBobX+bobd*2,startBobY,bobd);
rope1=new Rope(bobObject1.body,roof1.body,-bobd*2,0);
rope2=new Rope(bobObject2.body,roof1.body,-bobd*1,0);
rope3=new Rope(bobObject3.body,roof1.body,0,0);
rope4=new Rope(bobObject4.body,roof1.body,+bobd*1,0);
rope5=new Rope(bobObject5.body,roof1.body,+bobd*2,0);
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body.position,{x:-50,y:-35})
	}
}
