
class Scene7 extends Phaser.Scene {
    constructor() {
      super('perder');
    }
    
    create(){
        var Fondoperdiste = this.add.image(635, 380, "Fondoperdiste").setScale(.7);
        var Cartelperdiste = this.add.image(650, 480, "Cartelperdiste").setScale(.7);


            if (perder === 0){
                this.add.image(520, 340, 'hambur').setScale(.6)
                this.add.image(640, 320, 'hambur').setScale(.8)
                this.add.image(760, 340, 'hambur').setScale(.6)
            }
            if (perder === 1){
                this.add.image(520, 340, 'neneenfermo').setScale(.6)
                this.add.image(640, 320, 'hambur').setScale(.8)
                this.add.image(756, 340,  'hambur').setScale(.6)
            }
            if (perder === 2){
                this.add.image(520, 340,  'neneenfermo').setScale(.6)
                this.add.image(640, 320, 'hambur').setScale(.8)
                this.add.image(760, 340, 'neneenfermo').setScale(.6)
            }
            scorefinaltext = this.add.text(565, 505, "Puntos " + score, { fontSize: '40px', fill: '#02854F', fontFamily: 'Boogaloo'});
            Musicagame.stop();   
            perdersonido = this.sound.add("perdersonido", {loop: false});
            if (efsonido === true){
            perdersonido.play();
            }
            var botonReintentar1 = this.add.image(643, 590, 'botonReintentar1').setScale(.7)
            var botonReintentar2 = this.add.image(643, 590, 'botonReintentar2').setScale(.7)
            text = this.add.text(570, 580, "VOLVER A EMPEZAR", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
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
        
        var menuPrincipal = this.add.image(645, 660, 'botonReintentar1').setScale(.7)
        var menuPrincipal2 = this.add.image(645, 660, 'botonReintentar2').setScale(.7)
        text = this.add.text(581, 650, "MENÚ PRINCIPAL", { fontSize: '20px', fill: '#6F0C49', fontFamily: 'BOOGALOO'})

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