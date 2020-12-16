var car,wall
var speed, weight


function setup() {
  createCanvas(1600,400);
  
  weight=random(20,100)
  speed=random(80,140)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  car.velocityX= speed;

}

function draw() {
 
  background("black")
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var d=(0.5*weight*speed*speed)/22500
    if(d<100){
      car.shapeColor="red"

    }
    else if(d>100&&d<=180){
      car.shapeColor="yellow"
    }
    else{
      car.shapeColor="green"
    }
  }
  drawSprites();
  
  


}