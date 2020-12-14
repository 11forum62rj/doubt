const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var mainground;
var ground1;
var block1;
var polygon

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mainground = new Ground(600,height,1200,20);

    ground1 = new Ground(460,340,170,10);
    ground2 = new Ground(900,220,170,10)
     
    

    Block1 = new Block(400,339,20,25);
    Block2 = new Block(420,339,20,25);
    Block3 = new Block(440,339,20,25);
    Block4 = new Block(460,339,20,25);
    Block5 = new Block(478,339,20,25);
    Block6 = new Block(500,339,20,25);
    Block7 = new Block(515,339,20,25);
    Block8 = new Block(415,329,20,25);
    Block9 = new Block(435,329,20,25);
    Block10 = new Block(455,329,20,25);
    Block11 = new Block(475,329,20,25);
    Block12 = new Block(497,329,20,25);
    Block13 = new Block(429,309,20,25);
    Block14 = new Block(449,309,20,25);
    Block15 = new Block(470,309,20,25);
    Block16 = new Block(450,295,20,25);


    block1 = new Block(842,219,20,25);
    block2 = new Block(860,219,20,25);
    block3 = new Block(880,219,20,25);
    block4 = new Block(900,219,20,25);
    block5 = new Block(915,219,20,25);
    block6 = new Block(860,209,20,25);
    block7 = new Block(885,209,20,25);
    block8 = new Block(905,209,20,25);
    block9 = new Block(885,199,20,25);
    polygon = new Polygon(50,200);

    slingshot = new SlingShot(polygon.body,{x:50, y:20});
    
}

    function draw(){
        background("black");
        Engine.update(engine);

    
        ground1.display();
        ground2.display();
        mainground.display();

        fill("lightblue");
        Block1.display();
        Block2.display();
        Block3.display();
        Block4.display();
        Block5.display();
        Block6.display();
        Block7.display();
        fill("pink")
        Block8.display();
        Block9.display();
        Block10.display();
        Block11.display();
        Block12.display();
        fill("lightgreen")
        Block13.display();
        Block14.display();
        Block15.display();
        fill("white")
        Block16.display();
        

        fill("lightblue");
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        fill("lightgreen");
        block6.display();
        block7.display();
        block8.display();
        fill("pink");
        block9.display()

        polygon.display();
       slingshot.display(); 
    }

