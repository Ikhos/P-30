const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var myEngine, myWorld;
var platformOne, platformTwo;
var boxOne, boxTwo, bowThree;
var hexImg, hexagon;
var sling;

function preload() {
    
};

function setup() {
    createCanvas(1500, 500);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    platformOne = new Ground(500, 400, 400, 20);
    //set 1
    boxOne = new Box(420, 280, 40, 40);
    boxTwo = new Box(400, 320, 40, 40);
    boxThree = new Box(440, 320, 40, 40);
    boxFour = new Box(420, 360, 40, 40);
    boxFive = new Box(380, 360, 40, 40);
    boxSix = new Box(460, 360, 40, 40);
    hexagon = new Hexagon(150, 250);
    //set 2
    boxOne2 = new Box(580, 280, 40, 40);
    boxTwo2 = new Box(560, 320, 40, 40);
    boxThree2 = new Box(600, 320, 40, 40);
    boxFour2 = new Box(580, 360, 40, 40);
    boxFive2 = new Box(540, 360, 40, 40);
    boxSix2 = new Box(640, 360, 40, 40);
    hexagon = new Hexagon(150, 250);
    sling = new Slingshot(hexagon.body, {x: 150, y:250});
};

function draw() {
    background(rgb("90caf9"));
    Engine.update(myEngine);
    //hexagon sling
    hexagon.display();
    sling.display();
    //platformOne
    platformOne.display();
    boxOne.display();
    boxTwo.display();
    boxThree.display();
    boxFour.display();
    boxFive.display();
    boxSix.display();
    boxOne2.display();
    boxTwo2.display();
    boxThree2.display();
    boxFour2.display();
    boxFive2.display();
    boxSix2.display();
};

function mouseDragged() {
    var xPosMouse = mouseX;
    var yPosMouse = mouseY;    
    Body.setPosition(hexagon.body, {x: xPosMouse, y: yPosMouse});
};

function mouseReleased() {
    sling.fly();
};

function keyPressed() {
    if(keyCode === 32){
        sling.attach(this.hexagon);
    }
}
