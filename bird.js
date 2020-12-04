function Bird(){
  this.y = 200;
  this.x = width/2-100;
  this.gravity = 0.6;
  this.lift = -15;
  this.diameter = 50
  this.velocity = 0;
  this.show = function(){
    imageMode(CENTER);
    image(birdImg, this.x, this.y, 50,50);
    //fill(255);
    //ellipse(this.x, this.y, this.diameter);
  }
  this.up = function(){
    this.velocity += this.lift;
    this.velocity *= 0.7;
    this.y += this.velocity;
  }
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
