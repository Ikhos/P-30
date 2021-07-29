class Slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 1.6,
            stiffness: 0.4
        }
        this.band = Constraint.create(options);
        World.add(myWorld, this.band);
    };
    display(){
        fill("purple");
        if(this.band.bodyA) {
            console.log("debug" + this.band.pointB);
            line(this.band.bodyA.position.x, this.band.bodyA.position.y, this.band.pointB.x, this.band.pointB.y);           
        }
    }
    fly(){
        this.band.bodyA = null;
    }
}
  