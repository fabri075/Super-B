class Scene6 extends Phaser.Scene {
    constructor() {
      super('ganar');
    }
    
    create(){
        var Transparencia = this.add.image(400, 300, "transparencia");

        this.add.image(640, 490, 'menuPausa').setScale(.7).setInteractive({cursor: 'context-menu'})
        this.add.image(640, 180, 'tituloGanaste').setScale(.7)
        if (perder === 0){
            this.add.image(525, 365, 'neneenfermo').setScale(.6)
            this.add.image(640, 375, 'neneenfermo').setScale(.8)
            this.add.image(755, 365, 'neneenfermo').setScale(.6)
        }
        if (perder === 1){
            this.add.image(525, 365, 'neneenfermo').setScale(.6)
            this.add.image(640, 375, 'neneenfermo').setScale(.8)
            this.add.image(755, 365,  'neneenfermo').setScale(.6)
        }
        if (perder === 2){
            this.add.image(525, 365,  'neneenfermo').setScale(.6)
            this.add.image(640, 375, 'hambur').setScale(.8)
            this.add.image(755, 365, 'neneenfermo').setScale(.6)
        }
        scorefinaltext = this.add.text(560, 425, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
        Musicagame.stop();    
        ganarsonido = this.sound.add("ganarsonido", {loop: false});
        ganarsonido.play();   
        var botonReiniciar1 = this.add.image(643, 510, 'botonReiniciar1').setScale(.6)
        var botonReiniciar2 = this.add.image(643, 510, 'botonReiniciar2').setScale(.6)
        text = this.add.text(579, 500, "SIGUIENTE NIVEL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        text = this.add.text(600, 640, "NIVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
        botonReiniciar2.setVisible(false)
        botonReiniciar1.setInteractive()
        botonReiniciar1.on('pointerdown', () => {
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        if (efsonido === true){
        BotonSonido.play();
        }
        //ganarsonido.destroy();

    
        if (nivel === 1 ){
            this.scene.stop('nivel1');
            nivel = 2;
            this.scene.start('nivel1');} else { if (nivel === 2 ){
                this.scene.stop('nivel1');
                nivel = 3;
                this.scene.start('nivel1');}
                 else {if ( nivel === 3){
                    this.scene.stop('nivel1');
                nivel = 4;
                this.scene.start('nivel1');}
            else { if ( nivel === 4){
                this.scene.stop('nivel1');
                nivel = 5;
                this.scene.start('nivel1');
            }}}}
 
        
        mochila = 0;
        contadorMalas = 0;
        contadorBuenas = 0;
        perder = 0;
        ganar = 0;
        totalBuenas = 0;
        tiempoInicial = 30;
        contador = 1;
        pilaCreada= false;

        
        
} );
    
    var menuPrincipal = this.add.image(645, 580, 'botonReiniciar1').setScale(.6)
    var menuPrincipal2 = this.add.image(645, 580, 'botonReiniciar2').setScale(.6)
    text = this.add.text(580, 570, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})

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
        
    } );

        botonReiniciar1.on('pointerover', function (a) {
        botonReiniciar2.setVisible(true)
        });
        botonReiniciar1.on('pointerout', function (a){
        botonReiniciar2.setVisible(false)
    });

        menuPrincipal.on('pointerover', function (b) {
        menuPrincipal2.setVisible(true)
        });
        menuPrincipal.on('pointerout', function (b){
        menuPrincipal2.setVisible(false)
    });

    
    }
}