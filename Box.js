class Box {
  constructor(x, y, width, height){
    var options = {
      isStatic: false,
      restituion: 0.4
    }
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(myWorld, this.body);
  }
  display(){
    if(this.body.speed < 3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("#ADD8E6");
      rect(0, 0, this.width, this.height);
      pop(); 
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(225, this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }

};
