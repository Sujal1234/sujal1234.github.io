var bird, birdImg, button, pipes, score;
var gameStarted=false;
var GAP=230;

function preload() {
  birdImg = loadImage('flappy bird3.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight-40);//700,600
  background(179,242,255);

  button = createButton('Play Again');
  button.position(width/2-50, height/2+50);
  button.size(150, AUTO);
  button.style('font-size', '25px')
  button.mousePressed(restart);

  restart();
}
function draw(){
  if(gameStarted){
    background(179,242,255);
    bird.update();
    bird.show();

    if (frameCount==1 || frameCount%200==0) {
      pipes.push(new Pipe());
    }
  //--------------------------------------------------------------
    //score text
    textSize(30);
    textAlign(LEFT, TOP);
    fill(0);
    text('SCORE:'+score,35,35,140,140);

    //score border
    noFill();
    stroke(0,0,255);
    strokeWeight(4);
    var wid = 160;
    if(score>99){wid = 180;}
    rect(30,30,wid,35);
  //----------------------------------------------------------------
    strokeWeight(0);
    for (var i = pipes.length-1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)){
        gameOver();
        }

      if (pipes[i].offscreen()) {
        pipes.splice(i,1);
        }
      if ((bird.x-25 - pipes[i].x+pipes[i].w) <= 2 && (bird.x-25 - pipes[i].x+pipes[i].w)>0){
        score+=5;

      }
    }
  //-----------------------------------------------------------------
    if(bird.y+25>=height || bird.y-25<=0){
      gameOver();
    }
  //----------------------------------------------------------------
    //decrease gap by 20 px every 4 pipes
    if(score<120){
      GAP = 230 - (Math.floor((score/5)/4)*20);
    }
  //----------------------------------------------------------------
    // //ground
    // fill(255,0,0);
    // rect(0,height-20,width,20);

    //ceiling
    fill(255,0,0);
    rect(0,0,width,20);
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW || keyCode === 32 || keyCode === 87) {
    if (!gameStarted) {
      gameStarted=true;
    }
    bird.up();
  }
}
function restart(){
  gameStarted=false;
  button.hide();
  bird = new Bird();
  pipes=[];
  score=0;

  background(179,242,255);
  bird.show();

  //score text
  textSize(30);
  textAlign(LEFT, TOP);
  fill(0);
  text('SCORE:'+score,35,35,140,140);

  //score border
  noFill();
  stroke(0,0,255);
  strokeWeight(4);
  var wid = 160;
  if(score>99){wid = 180;}
  rect(30,30,wid,35);

  loop();
}

function gameOver(){
  // //ground
  // fill(255,0,0);
  // rect(0,height-20,width,20);

  //ceiling
  fill(255,0,0);
  rect(0,0,width,20);

  noLoop();
  button.show();
  textSize(100);
  textAlign(CENTER, CENTER);
  fill(0,0,255);
  text('Game Over',width/2,height/2);
}
