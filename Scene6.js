class Scene6 extends Phaser.Scene {
    constructor() {
      super('ganar');
    }
    
    create(){
        var Transparencia = this.add.image(400, 300, "transparencia");

        this.add.image(640, 490, 'menuPausa').setScale(.7).setInteractive({cursor: 'context-menu'})
       

        var botonReiniciar1 = this.add.image(643, 510, 'botonReiniciar1').setScale(.6)
        var botonReiniciar2 = this.add.image(643, 510, 'botonReiniciar2').setScale(.6)
        
        var menuPrincipal = this.add.image(645, 580, 'botonReiniciar1').setScale(.6)
        var menuPrincipal2 = this.add.image(645, 580, 'botonReiniciar2').setScale(.6)
        

        if (idioma === 1)
        {
            this.add.image(640, 180, 'tituloGanaste').setScale(.7)
            scorefinaltext = this.add.text(560, 425, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
            text = this.add.text(579, 500, "SIGUIENTE NIVEL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
            text = this.add.text(600, 640, "NIVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
            text = this.add.text(580, 570, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        };
        if (idioma === 2)
        {
            this.add.image(640, 180, 'tituloGanasteEN').setScale(.7)
            scorefinaltext = this.add.text(560, 425, "Points " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
            text = this.add.text(579, 500, "NEXT LEVEL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
            text = this.add.text(600, 640, "LEVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
            text = this.add.text(580, 570, "MAIN MENU", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        }
        if (idioma === 3)
        {
            this.add.image(640, 180, 'tituloGanasteBR').setScale(.7)
            scorefinaltext = this.add.text(560, 425, "Pontos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
            text = this.add.text(579, 500, "PRÓXIMO NÍVEL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
            text = this.add.text(600, 640, "NÍVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
            text = this.add.text(580, 570, "MENU PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
        }

        if (perder === 0){
            this.add.image(525, 365, 'EstrellaPrendida').setScale(.6)
            this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
            this.add.image(755, 365, 'EstrellaPrendida').setScale(.6)
        }
        if (perder === 1){
            this.add.image(525, 365, 'EstrellaApagada').setScale(.6)
            this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
            this.add.image(755, 365,  'EstrellaPrendida').setScale(.6)
        }
        if (perder === 1 && tiempoNivel < 10 ){
            this.add.image(525, 365,  'EstrellaApagada').setScale(.6)
            this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
            this.add.image(755, 365, 'EstrellaApagada').setScale(.6)
        }
        
        
        Musicagame.stop();    
        ganarsonido = this.sound.add("ganarsonido", {loop: false});
        if(efsonido === true){
        ganarsonido.play();   
        }
        
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
       // nivel = 1;
        contadorPilas = 1;
        
        
} );
    
    

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
        contadorPilas = 1;
        
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