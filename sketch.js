var canvas;
var music;
var rBox, yBox, gBox, bBox;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    var rand = Math.round(random(20,750));
    ball = createSprite(rand, rand, 10, 10);
    ball.velocityX = 2;
    ball.velocityY = 3;

    rBox = createSprite(50, 375, 100, 20);
    yBox = createSprite(160, 374, 100, 20);
    gBox = createSprite()

}

function draw() {
    background(0);
    bounceOff(ball, rBox);
    bounceOff(ball, gBox);
    bounceOff(ball, bBox,);
    
    if (ball.isTouching(topEdge))
    
    if (ball.isTouching(rBox)){
     ball.shapeColor = "red";
    }

    if (ball.isTouching(gBox)) {
     ball.shapeColor = "green";
    }

    if (ball.isTouching(bBox)) {
        ball.shapeColor = "blue";
    }

    if (ball.isTouching(yBox)) {
        ball.shapeColor = "yellow";
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    ball.bounceOff(topEdge);
    ball.bounceOff(bottomEdge);

    drawSprites();
}

function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object2.y < object2.height/2 + object1.height/2) {
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    } 
  }