class Hexagon {
    constructor(x, y){
      var options = {
      }
      this.body = Bodies.rectangle(x, y, 50, 50);
      World.add(myWorld, this.body);
      this.hexImg = loadImage("polygon.png");
    }
    display(){
      push();
      imageMode(CENTER);
      fill("#ADD8E6");
      image(this.hexImg, this.body.position.x, this.body.position.y, 50, 50);
      pop(); 
    }
  
  };
  