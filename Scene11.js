class Scene11 extends Phaser.Scene {
    constructor() {
      super('selector');
    }
    
    create(){
        var txtselec;
        var txtnivel;
        if (idioma === 1)
        {
          txtselec = 'SELECCIONE EL NIVEL'  
          txtnivel = 'Nivel'
        };
        if (idioma === 2)
        {
          txtselec = '  CHOOSE THE LEVEL'
          txtnivel = 'Level'
        }
        if (idioma === 3)
        {
           txtselec = 'SELECIONE O NÍVEL'
           txtnivel = 'Nivel'
        }    
        var menuselector = this.add.image(640, 320, 'fondoPausa').setScale(.9).setInteractive({cursor: 'context-menu'});
        var textselector = this.add.text(480, 140, txtselec, { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'})
        var lvl1 = this.add.text(580, 200, txtnivel + ' 1', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' });
        var lvl12 = this.add.text(580, 200, txtnivel + ' 1', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl12.setVisible(false);
        lvl1.on('pointerdown', () => {
            nivel = 1;
            Musicamenu.stop(); 
            this.scene.start('nivel1')
        })
        var lvl2 = this.add.text(580, 250, txtnivel + ' 2', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl22 = this.add.text(580, 250, txtnivel + ' 2', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl22.setVisible(false);
        lvl2.on('pointerdown', () => {
            nivel = 2;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var lvl3 = this.add.text(580, 300, txtnivel + ' 3', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl32 = this.add.text(580, 300, txtnivel + ' 3', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl32.setVisible(false);
        lvl3.on('pointerdown', () => {
            nivel = 3;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var lvl4 = this.add.text(580, 350, txtnivel + ' 4', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl42 = this.add.text(580, 350, txtnivel + ' 4', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl42.setVisible(false);
        lvl4.on('pointerdown', () => {
            nivel = 4;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var lvl5 = this.add.text(580, 400, txtnivel + ' 5', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl52 = this.add.text(580, 400, txtnivel + ' 5', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl52.setVisible(false);
        lvl5.on('pointerdown', () => {
            nivel = 5;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        lvl1.on('pointerover', function (c) {
            lvl12.setVisible(true)
          });
          lvl1.on('pointerout', function (c){
            lvl12.setVisible(false)
        });
          lvl2.on('pointerover', function (d) {
            lvl22.setVisible(true)
        });
          lvl2.on('pointerout', function (d) {
            lvl22.setVisible(false)
          });
          lvl3.on('pointerover', function (f) {
          lvl32.setVisible(true)
         });
          lvl3.on('pointerout', function (f) {
            lvl32.setVisible(false)
          });
          lvl4.on('pointerover', function (f) {
            lvl42.setVisible(true)
           });
           lvl4.on('pointerout', function (f) {
            lvl42.setVisible(false)
            });
        lvl5.on('pointerover', function (f) {
            lvl52.setVisible(true)
            });
        lvl5.on('pointerout', function (f) {
            lvl52.setVisible(false)
            });    


        var back = this.add.image(380, 440, 'atras1').setScale(.4).setInteractive({cursor: 'pointer'});
        var back2 = this.add.image(380, 440, 'atras2').setScale(.4);
        back2.setVisible(false);
        back.on('pointerdown', () => {
            if(efsonido === true ){
                BotonSonido = this.sound.add("botonsonido" , {loop: false});
                BotonSonido.play();}
            menuselector.destroy();
            textselector.destroy();
            lvl1.destroy();
            lvl2.destroy();
            lvl3.destroy();
            lvl4.destroy();
            lvl5.destroy();
            back.destroy();
            back2.destroy();
            this.scene.resume('menu');
        })
        back.on('pointerover', function (g) {
            back2.setVisible(true)
       });
          back.on('pointerout', function (g){
           back2.setVisible(false)
       });
    }
}