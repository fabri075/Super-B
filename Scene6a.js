class Scene6a extends Phaser.Scene {
    constructor() {
      super('ganarA');
    }
    
    create(){
        var Transparencia = this.add.image(400, 300, "transparencia");

        this.add.image(640, 490, 'menuPausa').setScale(.7).setInteractive({cursor: 'context-menu'})
        this.add.image(640, 180, 'tituloGanastefinal').setScale(.7)
        if (perder === 0){
            this.add.image(525, 365,  'neneenfermo').setScale(.6)
            this.add.image(640, 375, 'neneenfermo').setScale(.8)
            this.add.image(755, 365,  'neneenfermo').setScale(.6)
        }
        if (perder === 1){
            this.add.image(525, 365, 'neneenfermo').setScale(.6)
            this.add.image(640, 375, 'neneenfermo').setScale(.8)
            this.add.image(755, 365, 'neneenfermo').setScale(.6)
        }
        if (perder === 2){
            this.add.image(525, 365,  'neneenfermo').setScale(.6)
            this.add.image(640, 375, 'neneenfermo').setScale(.8)
            this.add.image(755, 365,  'neneenfermo').setScale(.6)
        }
        scorefinaltext = this.add.text(560, 425, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
        Musicagame.stop();    
        ganarsonido = this.sound.add("ganarsonido", {loop: false});
        if (efsonido === true){
        ganarsonido.play();   
        }
        text = this.add.text(600, 640, "NIVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})

    
    var menuPrincipal = this.add.image(645, 520, 'botonReiniciar1').setScale(.6)
    var menuPrincipal2 = this.add.image(645, 520, 'botonReiniciar2').setScale(.6)
    text = this.add.text(581, 510, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})

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