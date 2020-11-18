
class Scene7 extends Phaser.Scene {
    constructor() {
      super('perder');
    }
    
    create(){
        var Fondoperdiste = this.add.image(635, 380, "Fondoperdiste").setScale(.7);
        var Cartelperdiste = this.add.image(650, 480, "Cartelperdiste").setScale(.7);
        if ( idioma === 1){
            var Cartelperdiste = this.add.image(650, 480, "Cartelperdiste").setScale(.7);
        }
            if ( idioma === 3){
                var Cartelperdiste = this.add.image(650, 480, "CartelperdisteBR").setScale(.7);
            }
                if ( idioma === 2){
                    var Cartelperdiste = this.add.image(650, 480, "CartelperdisteEN").setScale(.7);
                }



        if (contadorMalas > contadorBuenas){
            this.add.image(525, 365, 'EstrellaApagada').setScale(.6)
            this.add.image(640, 375, 'EstrellaApagada').setScale(.8)
            this.add.image(755, 365, 'EstrellaApagada').setScale(.6)
        }
        if (contadorMalas === contadorBuenas){
            this.add.image(525, 365, 'EstrellaApagada').setScale(.6)
            this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
            this.add.image(755, 365,  'EstrellaApagada').setScale(.6)
        }
        if (contadorMalas < contadorBuenas ){
            this.add.image(525, 365,  'EstrellaPrendida').setScale(.6)
            this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
            this.add.image(755, 365, 'EstrellaApagada').setScale(.6)
        }
        if ( idioma === 1){
            scorefinaltext = this.add.text(563, 525, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});}
            if ( idioma === 3){
                scorefinaltext = this.add.text(563, 525, "Pontos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});}
                if ( idioma === 2){
                    scorefinaltext = this.add.text(563, 525, "Points " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});}

            Musicagame.stop();   
            perdersonido = this.sound.add("perdersonido", {loop: false});
            if (efsonido === true){
            perdersonido.play();
            }
            var botonReintentar1 = this.add.image(643, 598, 'botonReintentar1').setScale(.6)
            var botonReintentar2 = this.add.image(643, 598, 'botonReintentar2').setScale(.6)
            if ( idioma === 1){
                scorefinaltext = this.add.text(570, 588, "VOLVER A EMPEZAR ",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});}
                if ( idioma === 3){
                    scorefinaltext = this.add.text(581, 588, "COMEÇAR DE NOVO",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
                }
                    if ( idioma === 2){
                        scorefinaltext = this.add.text(595, 588, "START AGAIN",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
                    }
            botonReintentar2.setVisible(false);
            botonReintentar1.setInteractive();
            botonReintentar1.on('pointerdown', () => {  
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();
            this.scene.stop('nivel1');
            this.scene.start('nivel1');
            score = 0;
            mochila = 0;
            contadorMalas = 0;
            contadorBuenas = 0;
            perder = 0;
            ganar = 0;
            totalBuenas = 0;
            nivel = 1;
            tiempoInicial = 30;
            vidas = 3;
            contador = 1;
            pilaCreada= false;

    } );
        
        var menuPrincipal = this.add.image(645, 663, 'botonReintentar1').setScale(.6)
        var menuPrincipal2 = this.add.image(645, 663, 'botonReintentar2').setScale(.6)
        
        if ( idioma === 1){
            scorefinaltext = this.add.text(576, 653, "MENÚ PRINCIPAL",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});}
            if ( idioma === 3){
                scorefinaltext = this.add.text(581, 653, "MENU PRINCIPAL",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
            }
                if ( idioma === 2){
                    scorefinaltext = this.add.text(595, 653, "MAIN MENU",{ fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
                }

        menuPrincipal2.setVisible(false);
        menuPrincipal.setInteractive()
        menuPrincipal.on('pointerdown', () => { 
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
        BotonSonido.play();
        Musicagame.stop();
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
            vidas = 3;
            contador = 1;
           
    } );

        botonReintentar1.on('pointerover', function (a) {
        botonReintentar2.setVisible(true)
        });
        botonReintentar1.on('pointerout', function (a){
        botonReintentar2.setVisible(false)
    });

        menuPrincipal.on('pointerover', function (b) {
        menuPrincipal2.setVisible(true)
        });
        menuPrincipal.on('pointerout', function (b){
        menuPrincipal2.setVisible(false)
    });
    }
}