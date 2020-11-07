class Player{
    constructor(){

        this.index = null;
        this.name = null;
        this.rank = null;
    }
    getCount(){

        var playerCountref = database.ref('PlayerCount');
        playerCountref.on("value",(data)=>{
            
            pxlayerCount = data.val();
        })
    }
    updateCount(count){

        database.ref('/').update({

            PlayerCount: count
        });

    }
    update(){

        var playerindex = "players/player"+this.index;
        database.ref(playerindex).set({

            name: this.name
           
        })
    }
    static getplayerinfo(){

        var playerinforef = database.ref('players');
        playerinforef.on("value",(data) => {

            allplayers = data.val();
        }) 
    }
}