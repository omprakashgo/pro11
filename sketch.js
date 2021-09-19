var ship, ship_running;
var ground;
function preload(){
 ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}


function setup(){
  createCanvas(400,200);
  
ship = createSprite (50, 180, 30, 15)
ship.shapeColor="white"
ship.addAnimation("running",ship_running)
ship.velocityY=4;
ship.velocityY=0.4;

ground = createSprite(200,190,500,10)
ground.shapeColor="blue"
ground.velocityX=-3

// adding scale
ship.scale=0.10

edges = createEdgeSprites(ground);

}



function draw() {
  background("skyblue");

  
 if(ground>200){
   ground.x =ground.weight/2
 }

  ship.collide(ground);

  if(keyDown("space") && ship.y >200){
  ship.velocityY=4
  }
  ship.velocityY=-0.10 
  ship.velocityY=4

if(ground < 0){
  ground.x = ground.widht/2;
}
  drawSprites();
}