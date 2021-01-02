const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




function setup() {
  createCanvas(800,400);
  //created engine
  engine=Engine.create();

  //my own world
  world=engine.world;
   
   //my own bodies
  var ball_options={
    isStatic : false,
    restitution:1
  }

  ball=Bodies.circle(200,20,50,ball_options);
  World.add(world,ball);


  var ground_options={
   isStatic:true ,
   friction :0
  }

  ground=Bodies.rectangle(400,390,800,20,ground_options);
  World.add(world,ground)
  
}

function draw() {
  Engine.update(engine);
  background(0);  
  
 fill("yellow")
 ellipseMode(RADIUS) 
 ellipse(ball.position.x,ball.position.y,50,50);



 fill("green")
 rectMode(CENTER) 
 rect(ground.position.x,ground.position.y,800,20);
 


}