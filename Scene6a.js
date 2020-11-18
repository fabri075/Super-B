class Scene6a extends Phaser.Scene {
    constructor() {
      super('ganarA');
    }
    
    create(){
        var Fondovictoria = this.add.image(600, 500, "Fondovictoria");
        var Cartelvictoria = this.add.image(650, 500, "Cartelvictoria").setScale(.7);

       

        if (perder === 0){
            this.add.image(520, 355,  'hambur').setScale(.8)
            this.add.image(640, 330, 'hambur').setScale(.9)
            this.add.image(760, 355,  'hambur').setScale(.8)
        }
        if (perder === 1){
            this.add.image(520, 355, 'neneenfermo').setScale(.8)
            this.add.image(640, 330, 'hambur').setScale(.9)
            this.add.image(760, 355, 'hambur').setScale(.8)
        }
        if (perder === 2){
            this.add.image(520, 355,  'neneenfermo').setScale(.8)
            this.add.image(640, 330, 'neneenfermo').setScale(.9)
            this.add.image(760, 355,  'hambur').setScale(.8)
        }
        scorefinaltext = this.add.text(560, 540, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
        Musicagame.stop();    
        ganarsonido = this.sound.add("ganarsonido", {loop: false});
        if (efsonido === true){
        ganarsonido.play();   
        }

    
    var menuPrincipal = this.add.image(645, 640, 'botonReiniciar1').setScale(.6)
    var menuPrincipal2 = this.add.image(645, 640, 'botonReiniciar2').setScale(.6)
    text = this.add.text(581, 630, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})

    menuPrincipal2.setVisible(false);
    menuPrincipal.setInteractive()
    menuPrincipal.on('pointerdown', () => {
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
        Musicagame.stop();
        //ganarsonido.destroy();
        this.scene.stop('nivel1');
        
        this.scene.start('menu');
        score = 0;
        mochila = 0;
        contadorMalas = 0;
        contadorBuenas = 0;
        perder = 0;
        ganar = 0;
        totalBuenas = 0;
        tiempoInicial = 30;
        contador = 1;
        pilaCreada= false;
        contadorPilas = 1;

        
    } );

    

        menuPrincipal.on('pointerover', function (b) {
        menuPrincipal2.setVisible(true)
        });
        menuPrincipal.on('pointerout', function (b){
        menuPrincipal2.setVisible(false)
    });

    
    }
}