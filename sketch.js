var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var leftEdge ;
var rightEdge;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);

	 fairyVoice.loop();

	fairy = createSprite(125, 455);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.24;
	

	leftEdge = createSprite(797,350,2,800);
	leftEdge.visible = false;
	
	rightEdge = createSprite(3,350,2,800);
	rightEdge.visible = false;

	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.debug = false
	
	
	
	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);


	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.velocityX = 0;

  if(star.position.y > 470){
     star.velocityY = 0;
	 fairy.x = 520;
	
}
    

    leftEdge.setCollider("rectangle",0,0,leftEdge.width+125,leftEdge.height);
	leftEdge.debug = false;

	rightEdge.setCollider("rectangle",0,0,rightEdge.width+120,rightEdge.height);
	rightEdge.debug = false;

	fairy.setCollider("rectangle",0,0,fairy.width+50,fairy.height+30);
	fairy.debug = false;

	if(keyWentDown(RIGHT_ARROW)){
		fairy.velocityX =50;
		fairy.velocityY =0;
	}
	
	if(keyWentDown(LEFT_ARROW)){
		fairy.velocityX =-50;
		fairy.velocityY =0;
	}

	if(keyWentDown(DOWN_ARROW)){
		star.velocityY = 4;

	}

	

	fairy.collide(leftEdge);
    fairy.collide(rightEdge);

	
  drawSprites();

}

