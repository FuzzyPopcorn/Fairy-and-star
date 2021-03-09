var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

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
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5, {isStatic:true, restitution:0.5})
	
	World.add(world, starBody);
	
	Engine.run(engine);




}

function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(starBody.position.y > 470 && star.isTouching(fairy)){
	Matter.Body.setStatic(starBody,true)
  }

  fairy.setCollider("rectangle", 50, 0, 1090, 150);
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === LEFT_ARROW){ 
		fairy.x = fairy.position.x - 25
	}

	if(keyCode === RIGHT_ARROW){ 
		fairy.x = fairy.position.x + 25
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false)
		}
}
