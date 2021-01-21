const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var stand1,stand2;
var polygon1,polygonImage;
var slingShot;



function setup()
{
var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;


ground = new Ground(600,height,1200,20);
stand1 = new Ground(390,300,250,10);
stand2 = new Ground(780,200,200,10);
//blocks
block1 = new Block(166,137,30,40);
block2 = new Block(182,137,30,40);
block3 = new Block(198,137,30,40);
block4 = new Block(214,137,30,40);
block5 = new Block(176,117,30,40);
block6 = new Block(192,117,30,40);
block7 = new Block(206,117,30,40);
block8 = new Block(185,97,30,40);
block9 = new Block(200,97,30,40);
block10 = new Block(192,76,30,40);
block11 = new Block(365,87,30,40);
block12 = new Block(380,87,30,40);
block13 = new Block(395,87,30,40);
block14 = new Block(410,87,30,40);
block15 = new Block(375,66,30,40);
block16 = new Block(390,66,30,40);
block17 = new Block(405,66,30,40);
block18 = new Block(400,46,30,40);
block19 = new Block(384,46,30,40);
block20 = new Block(389,25,30,40);
polygon1 = new Polygon(100,120,40,40);


slingShot = new SlingShot(this.polygon1,{x:100,y:200});
}






function draw()
{
    
    background("white");
    text(mouseX+","+mouseY,mouseX,mouseY);
    Engine.update(engine);
     ground.display();
     stand1.display();
     stand2.display();
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();
     block13.display();
     block14.display();
     block15.display();
     block16.display();
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     
    
     slingShot.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}