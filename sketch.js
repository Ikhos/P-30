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
    boxOne = new Box(500, 330, 40, 40);
    boxTwo = new Box(480, 370, 40, 40);
    boxThree = new Box(520, 370, 40, 40);
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