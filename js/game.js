class Game{
    constructor(){

    }

    getState(){

        var gameStateref = database.ref('GameState');
        gameStateref.on("value",function(data){

            gameState = data.val();
        })
    }
    update(state){

        database.ref('/').update({

            GameState: state
        })
    }
    start(){

        form =  new Form();
        form.display();
        player = new Player();
        player.getCount();

        

      
    }
    selection(){
        form.hide();
            var cr7Selection = createSprite(50,200,20,20);
            cr7Selection.addImage(Lcr7);
            cr7Selection = 0.5;
            var EdisonCavaniSelection = createSprite(200,200,20,20);
            EdisonCavaniSelection.addImage(LEdisonCavani);
            EdisonCavaniSelection.scale = 0.5;
            var GriezmanSelection = createSprite(400,200,20,20);
            GriezmanSelection.addImage(LGriezman);
            GriezmanSelection.scale = 0.5;
            var ZlatanIbrahimovicSelection = createSprite(600,200,20,20);
            ZlatanIbrahimovicSelection.addImage(LZlatanIbrahimovic);
            ZlatanIbrahimovicSelection.scale = 0.5;
            text("Press 1 for Christano / 2 for Edison / 3 for Griezman / 4 for Zlatan", 200,750);
        

            
              
            
        }
        
        
  
    play(){
      background("green");
      image(backgroundimage,0,0,1200,700);
      
        //Moving Right Player
  playerRight.visible = true;
  PlayerLeft.visible = true;
  Ball.visible = true;
  if(keyDown("right")){
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




      drawSprites();
    }
}
