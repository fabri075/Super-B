class Scene7a extends Phaser.Scene {
    constructor() {
      super('perderA');
    }
    
    create(){
        var Transparencia = this.add.image(400, 300, "transparencia");

            this.add.image(640, 490, 'menuPausa').setScale(.7).setInteractive({cursor: 'context-menu'})
            this.add.image(640, 180, 'tituloNivelPerdido').setScale(.6)
           
            if (perder === 0){
                this.add.image(525, 365, 'hambur').setScale(.6)
                this.add.image(640, 375, 'hambur').setScale(.8)
                this.add.image(755, 365, 'hambur').setScale(.6)
            }
            if (perder === 1){
                this.add.image(525, 365, 'neneenfermo').setScale(.6)
                this.add.image(640, 375, 'hambur').setScale(.8)
                this.add.image(755, 365,  'hambur').setScale(.6)
            }
            if (perder === 2){
                this.add.image(525, 365,  'neneenfermo').setScale(.6)
                this.add.image(640, 375, 'hambur').setScale(.8)
                this.add.image(755, 365, 'neneenfermo').setScale(.6)
            }


            scorefinaltext = this.add.text(560, 425, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
            Musicagame.stop();   
            perdersonido = this.sound.add("perdersonido", {loop: false});
            perdersonido.play();
            var botonReintentar1 = this.add.image(643, 510, 'botonReintentar1').setScale(.6)
            var botonReintentar2 = this.add.image(643, 510, 'botonReintentar2').setScale(.6)
            text = this.add.text(595, 500, "REINTENTAR", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
            text = this.add.text(598, 640, "NIVEL " + nivel, { fontSize: '25px', fill: '#F6DB9D', fontFamily: 'Boogaloo'})

            botonReintentar2.setVisible(false);
            botonReintentar1.setInteractive();
            botonReintentar1.on('pointerdown', () => {  
            BotonSonido = this.sound.add("botonsonido" , {loop: false});
            BotonSonido.play();
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
            pilaCreada= false;
            contadorPilas = 1;

    } );
        
        var menuPrincipal = this.add.image(645, 580, 'botonReintentar1').setScale(.6)
        var menuPrincipal2 = this.add.image(645, 580, 'botonReintentar2').setScale(.6)
        text = this.add.text(581, 570, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})

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