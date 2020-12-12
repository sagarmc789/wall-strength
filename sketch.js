var bullet
var wall,thickness
var speed,weight


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
bullet.shapeColor="white"
bullet.velocityX=70

  wall=createSprite(1500,200,thickness,height/2)
  thickness=random(22,83)
  speed=random(223,331)
  weight=random(30,52)
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){

    bullet.velocityX=0

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){

  wall.shapeColor="red"

}

if(damage<10){

  wall.shapeColor="green"
}
  }
  
  drawSprites();
}

function hasCollided(object1,object2){

bulletLeft=object1.x+object1.width

wallLeft=object2.x

if(bulletLeft>=wallLeft){

  return true
}
else{
  return false
}
}