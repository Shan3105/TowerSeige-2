const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);



  ground = new Ground();
  //set1
  stand1 = new Stand(390,300,250,10);
  //level one
  block1 = new block(300,275,30,40);
  console.log(block1);
  block2 = new block(330,275,30,40);
  block3 = new block(360,275,30,40);
  block4 = new block(390,275,30,40);
  block5 = new block(420,275,30,40);
  block6 = new block(450,275,30,40);
  block7 = new block(480,275,30,40);
  //level two
  block8 = new block(330,235,30,40);
  block9 = new block(360,235,30,40);
  block10 = new block(390,235,30,40);
  block11 = new block(420,235,30,40);
  block12 = new block(450,235,30,40);
  //level three
  block13 = new block(360,195,30,40);
  block14 = new block(390,195,30,40);
  block15 = new block(420,195,30,40);
  //top
  block16 = new block(390,155,30,40);

  //set2
  stand2 = new Stand(700,200,200,10);
  //level one
  b1 = new block(640,135,30,40);
  b2 = new block(640 + 30 ,135,30,40);
  b3 = new block(640 + 60,135,30,40);
  b4 = new block(640 + 90,135,30,40);
  b5 = new block(640 + 120 ,135,30,40);
  //level two
 b6 = new block(670,125,30,40);
  b7 = new block(700,125,30,40);
  b8 = new block(730,125,30,40);
  //level three 
  b9 = new block(700,105,30,40);


  polygon= Bodies.circle(100, 200, 20);
  World.add(world, polygon);

slingShot = new Slingshot(polygon, {x:75,y:200});
  
}
function draw() {
  background(13, 155, 194); 
  //polygon displaying
  imageMode(CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  //instructions for how to play 
  textSize(20);
  fill(86, 11, 75);
  text("Place the Cursor on the Object and Drag and Release to Play!!!",20,60 )

  //instructions for how to play after the first time 
  textSize(15);
fill(107, 10, 10);
text("Press Space To Play Again!!!", 290, 330);
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill(198,198,198);
  block16.display();
fill(191,15,15);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
fill(244, 200, 117);
 b6.display();
 b7.display();
  b8.display();
fill(153,193,179);
  b9.display();
  
 
slingShot.display();
}

// mouseDragged function 
function mouseDragged() {
  Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
}

// mouseReleased function 
function mouseReleased() {
  slingShot.fly();
}

//create keyPressed function here
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon, { x: 75, y: 220 });
    slingShot.attach(polygon);
  }
}