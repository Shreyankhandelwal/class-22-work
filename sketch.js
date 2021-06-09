const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies ;
var engine,world;
var grnd, circ;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

  var ground = {

    isStatic: true

   }

  grnd = Bodies.rectangle(200,390,100,20,ground)
  World.add(world,grnd)
 // console.log(grnd.position.x)
 // console.log(grnd.position.y)

var ball = {

  restitution: 0.9
}

  circ = Bodies.circle(200,200,10,ball)
  World.add(world,circ)
}

function draw() {

  background(0);  
  Engine.update(engine)

  rectMode(CENTER)
  fill("yellow")
  rect(grnd.position.x,grnd.position.y,400,10)

  ellipseMode(RADIUS)
  ellipse(circ.position.x,circ.position.y,15)

}