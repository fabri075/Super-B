class Scene7a extends Phaser.Scene {
    constructor() {
      super('perderA');
    }
    
    create(){
        var Transparencia = this.add.image(400, 300, "transparencia");

            this.add.image(640, 490, 'menuPausa').setScale(.7).setInteractive({cursor: 'context-menu'})
            
            var menuPrincipal = this.add.image(645, 580, 'botonReintentar1').setScale(.6)
            var menuPrincipal2 = this.add.image(645, 580, 'botonReintentar2').setScale(.6)
            
            var botonReintentar1 = this.add.image(643, 510, 'botonReintentar1').setScale(.6)
            var botonReintentar2 = this.add.image(643, 510, 'botonReintentar2').setScale(.6)
           


            if (idioma === 1)
            {
                this.add.image(640, 180, 'tituloNivelPerdido').setScale(0.6)
                scorefinaltext = this.add.text(560, 425, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
                text = this.add.text(581, 570, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
                text = this.add.text(595, 500, "REINTENTAR", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
                text = this.add.text(598, 640, "NIVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
            };
            if (idioma === 2)
            {
                this.add.image(640, 180, 'tituloNivelPerdidoEN').setScale(0.6)
                scorefinaltext = this.add.text(560, 425, "Points " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
                text = this.add.text(581, 570, "MAIN MENU", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
                text = this.add.text(595, 500, "TRY AGAIN", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
                text = this.add.text(598, 640, "LEVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
            }
            if (idioma === 3)
            {
                this.add.image(640, 180, 'tituloNivelPerdidoBR').setScale(0.6)
                scorefinaltext = this.add.text(560, 425, "Pontos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
                text = this.add.text(581, 570, "MENU PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})
                text = this.add.text(580, 500, "TENTE NOVAMENTE", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
                text = this.add.text(598, 640, "NÍVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})
            }

            if (perder === 0){
                this.add.image(525, 365, 'EstrellaApagada').setScale(.6)
                this.add.image(640, 375, 'EstrellaApagada').setScale(.8)
                this.add.image(755, 365, 'EstrellaApagada').setScale(.6)
            }

            if (perder === 1){
                this.add.image(525, 365, 'EstrellaApagada').setScale(.6)
                this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
                this.add.image(755, 365,  'EstrellaPrendida').setScale(.6)
            }
            if (perder === 2){
                this.add.image(525, 365,  'EstrellaApagada').setScale(.6)
                this.add.image(640, 375, 'EstrellaPrendida').setScale(.8)
                this.add.image(755, 365, 'EstrellaApagada').setScale(.6)
            }
            if (perder >= 3){
                this.add.image(525, 365,  'EstrellaApagada').setScale(.6)
                this.add.image(640, 375, 'EstrellaApagada').setScale(.8)
                this.add.image(755, 365, 'EstrellaApagada').setScale(.6)
            }


            

            

            Musicagame.stop();   
            perdersonido = this.sound.add("perdersonido", {loop: false});
            if (efsonido === true){
            perdersonido.play();
            }
            

            botonReintentar2.setVisible(false);
            botonReintentar1.setInteractive();
            botonReintentar1.on('pointerdown', () => {  
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            if (efsonido === true){
            BotonSonido.play();
            }
            this.scene.stop('nivel1');
            this.scene.start('nivel1');
            score = score - 200;
            mochila = 0;
            contadorMalas = 0;
            contadorBuenas = 0;
            perder = 0;
            ganar = 0;
            totalBuenas = 0;
            tiempoInicial = 30;
            contador = 1;
            pilaCreada = false;
            contadorPilas = 1;

    } );
        
        

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