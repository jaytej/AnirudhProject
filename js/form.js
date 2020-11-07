class Form {
    constructor(){
        this.title = createElement('h2');
        this.greetings = createElement('h2');
        
        this.button1 = createButton('Play with Computer');
        this.button2 = createButton('Play with a friend');
        this.select= createElement('h3')
        this.greetings2 = createElement('h2');
        
    }

    display(){
        this.title.html("Welcome to Head Football");
        this.title.position(330, 50);
      
        this.select.html("Click the button below to start");
        this.select.position(330, 150);
    
       
        this.button1.position(230, 300)
        this.button2.position(430, 300)
    
        this.button1.mousePressed(()=>{
          this.title.hide();
          this.select.hide();
          this.button1.hide();
          this.button2.hide();
          gameState = "Play1"
          console.log(gameState);
        });
    
        this.button2.mousePressed(()=>{
          this.title.hide();
          this.select.hide();
          this.button1.hide();
          this.button2.hide();
          gameState = "Play2"
          console.log(gameState);
        });
    }
    hideall(){
          this.title.hide();
          this.select.hide();
          this.button1.hide();
          this.button2.hide();
    }
}

