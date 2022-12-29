
var player,enemy1,enemy2,enemy3,enemy4;
var playerIsRunning;
//keys = [];
var wall,wall2,wall3,wall4 ,wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15; 
var wall16,wall17,wall18,wall19,wall20 ,wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29; 
var wall30, wall31,wall32,wall33,wall34,wall35,wall36 ,wall37, wall38, wall39, wall40, wall41, wall41, wall42;
 var wall43,wall44,wall45,wall46,wall47,wall48,wall49;
 var wallBorderUp,wallBorderDown,wallBorderRight,wallBorderLeft;
function preload(){
    
 
 player =loadImage("./assets/player/1og.png")
}
function setup(){
    createCanvas(700,700)
    wall=createSprite(50,50,100,5)
    wall2=createSprite(100,100,5,100)
    wall3=createSprite(50,150,5,100)
    wall4=createSprite(100,200,100,5)
    wall5=createSprite(150,250,100,5)
    wall6=createSprite(150,100,5,100)
    wall7=createSprite(150,300,5,100)
    wall8=createSprite(100,300,100,5)
    wall9=createSprite(125,350,50,5)
    wall10=createSprite(100,400,5,100)
    wall11=createSprite(50,400,5,100)
    wall12=createSprite(75,350+100,50,5)
    wall13=createSprite(200,400,100,5)
    wall14=createSprite(200,325,5,50)
    wall15=createSprite(200,50,100,5)
    wall16=createSprite(200,150,5,100)
    wall17=createSprite(250,150,100,5)
    wall18=createSprite(250,75,5,50)
    wall19=createSprite(300,175,5,350)
    wall20=createSprite(250,175,5,50)
    wall21=createSprite(250,450,200,5)
    wall22=createSprite(350,450,5,100)
    wall23=createSprite(400,350,100,5)
    wall24=createSprite(400,425,5,50)
    wall25=createSprite(350,300,100,5)
    wall26=createSprite(350,150,5,200)
    wall27=createSprite(400,200,100,5)
    wall28=createSprite(400,275,5,50)
    wall29=createSprite(400,150,100,5)
    wall30=createSprite(400,50,5,100)
    wall31=createSprite(450,50,100,5)
    wall32=createSprite(500,75,5,50)
    wall33=createSprite(525,100,50,5)
    wall34=createSprite(550,25,5,50)
    wall35=createSprite(600,50,100,5)
    wall36=createSprite(600,100,5,100)
    wall37=createSprite(550,200,100,5)
    wall38=createSprite(500,250,100,5)
    wall39=createSprite(550,275,5,50)
    wall40=createSprite(650,300,100,5)
    wall41=createSprite(650,200,5,100)
    wall42=createSprite(675,100,50,5)
    wall43=createSprite(675,450,50,5)
    wall44=createSprite(650,475,5,50)
    wall45=createSprite(550,100,100,5)
    wall46=createSprite(550,400,100,5)
    wall47=createSprite(450,450,5,100)
    wall48=createSprite(675,350,50,5)
    wall49=createSprite(650,325,5,50)
    wallBorderUp=createSprite(600,5,600,10)
    wallBorderRight=createSprite(595,0,5,1200)
    wallBorderDown=createSprite(0,500,1200,5)
    wallBorderLeft=createSprite(5,100,5,400)
}
function draw(){
background('red')

    drawSprites()
}