function Pipe(){
  this.top = random(40, height - GAP - 120);
  this.bottom = height- this.top- GAP;
  this.x = width;
  this.w = 20;//width of pipe
  this.speed = 2;
  this.red = false;

  this.hits = function(){
    if (bird.x+25>this.x && bird.x-25<this.x+this.w) {
      if(bird.y < this.top || bird.y>height-this.bottom){
        this.red = true;
        return true;
        }
    } else {
      this.red = false;
    }
  }

  this.show = function(){
    fill(0);
    if (this.red){
      fill(255,0,0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function(){
    this.x -= this.speed;
  }
  this.offscreen = function(){
    if(this.x < -this.w){
      return true;
    }else{
      return false
    }
  }
}
