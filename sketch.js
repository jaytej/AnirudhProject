var backgroundimage, database;
var gameState, form, player, playerCount=0,allplayers=[];
var PlayerRight,PlayerLeft;
var InvisibleGround,InvisibleGround2;
var GoalRight,GoalLeft;
var Ball;
var Lcr7,LEdisonCavani,LGriezman,LZlatanIbrahimovic;
var Rcr7,REdisonCavani,RGriezman,RZlatanIbrahimovic;
var ballImage;
var title, select, button1,button2;
var box,compimage;
function preload(){
  backgroundimage = loadImage("Images/bgimage.jpg");
  Lcr7 = loadImage("Images/CR7.jpg");
  LEdisonCavani = loadImage("Images/EDISON CAVANI.jpg");
  LZlatanIbrahimovic = loadImage("Images/ZLATAN IBRAHIMOVIC.png");
  LGriezman = loadImage("Images/GRIEZMAN.png");
  Rcr7 = loadImage("Images/FLIPPED CR7.JPG");
  REdisonCavani = loadImage("Images/FLIPPED EDISON CAVANI.JPG");
  RZlatanIbrahimovic = loadImage("Images/ZLATAN IBRAHIMOVIC.png");
  RGriezman = loadImage("Images/FLIPPED GRIEZMAN.png");
  ballImage =loadImage("Images/foootball.png");
  compimage =  loadImage("Images/MESSI.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight-150);

      
        PlayerRight = createSprite(displayWidth-500,displayHeight/2);
        PlayerRight.addImage(RZlatanIbrahimovic);
       
        //PlayerRight.visible = false;
        PlayerLeft = createSprite(displayWidth-800,450,50,50);
        PlayerLeft.addImage(RGriezman);
        PlayerLeft.scale =0.3;
        //PlayerLeft.visible = false;
        Ball = createSprite(displayWidth-680,450,30,30);  
        Ball.addImage(ballImage);
        Ball.scale=0.1;
        //Ball.visible = false;

        gameState = "wait"
        form = new Form();
  
}

function draw(){
   

  if(gameState ==="wait"){

    background("green");
    
    form.display();
    console.log(gameState);
  }

  else if (gameState ==="Play2"){
    
    form.hideall();
    console.log(PlayerRight);
      textSize(50);
      text(mouseX,mouseY, 200,50);
    background(backgroundimage);
       
    if(keyDown("right")){
      //if(PlayerRight.x<)
      PlayerRight.x = PlayerRight.x + 5
    }

    if(keyDown("left")){
      PlayerRight.x = PlayerRight.x - 5
    }

    if(keyDown("up")){
      PlayerRight.y = PlayerRight.y - 5
    }

    if(keyDown("down")){
      PlayerRight.y = PlayerRight.y + 5
    }



    //Moving Left Player
    if(keyDown("w")){
      PlayerLeft.y = PlayerLeft.y - 5;
    }
    if(keyDown("s")){
      PlayerLeft.y = PlayerLeft.y + 5;
    }
    if(keyDown("a")){
      PlayerLeft.x = PlayerLeft.x - 5;
    }
    if(keyDown("d")){
      PlayerLeft.x = PlayerLeft.x + 5;
    }
  
  /*Colliding Players with Ground
  PlayerRight.collide(InvisibleGround);
  PlayerRight.collide(InvisibleGround2);
  PlayerLeft.collide(InvisibleGround);
  PlayerLeft.collide(InvisibleGround2);
  PlayerRight.collide(PlayerLeft);
  PlayerLeft.collide(PlayerRight);
  PlayerRight.collide(Ball);
  PlayerLeft.collide(Ball);*/

     drawSprites();
      
  }
}