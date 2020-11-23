class Scene6a extends Phaser.Scene {
    constructor() {
      super('ganarA');
    }
    
    create(){
        var Fondovictoria = this.add.image(635, 380, "Fondovictoria").setScale(.7);

        if ( idioma === 1){
            var Cartelvictoria = this.add.image(650, 500, "Cartelvictoria").setScale(.7);
        }
            if ( idioma === 3){
                var Cartelvictoria = this.add.image(650, 500, "CartelvictoriaBR").setScale(.7);}
                if ( idioma === 2){
                    var Cartelvictoria = this.add.image(650, 500, "CartelvictoriaEN").setScale(.7);}



       

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
        if ( idioma === 1){
            scorefinaltext = this.add.text(563, 540, "Puntos " + score, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'});}
            if ( idioma === 3){
                scorefinaltext = this.add.text(563, 540, "Pontos " + score, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'});}
                if ( idioma === 2){
                    scorefinaltext = this.add.text(563, 540, "Points " + score, { fontSize: '40px', fill: '#F6DB9D', fontFamily: 'Boogaloo'});}
        Musicagame.stop();    
        ganarsonido = this.sound.add("ganarsonido", {loop: false});
        if (efsonido === true){
        ganarsonido.play();   
        }

    
    var menuPrincipal = this.add.image(645, 640, 'botonReiniciar1').setScale(.6)
    var menuPrincipal2 = this.add.image(645, 640, 'botonReiniciar2').setScale(.6)


    
    if ( idioma === 1){
        scorefinaltext = this.add.text(581, 630, "MENÚ PRINCIPAL ",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});}
        if ( idioma === 3){
            scorefinaltext = this.add.text(581, 630, "MENU PRINCIPAL",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
        }
            if ( idioma === 2){
                scorefinaltext = this.add.text(595, 630, "MAIN MENU",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
            }



    menuPrincipal2.setVisible(false);
    menuPrincipal.setInteractive()
    menuPrincipal.on('pointerdown', () => {
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        if (efsonido === true){
        BotonSonido.play();
        }
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