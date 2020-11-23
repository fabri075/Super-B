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
        var textselector = this.add.text(480, 140, txtselec, { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        var menuPrincipal1 =  this.add.image(628, 222, 'botonReiniciar1').setScale(.5)
        var menuPrincipal12 =  this.add.image(628, 222, 'botonReiniciar2').setScale(.5).setVisible(false)
        var lvl1 = this.add.text(580, 200, txtnivel + ' 1', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' });
        var lvl12 = this.add.text(580, 200, txtnivel + ' 1', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl12.setVisible(false);
        lvl1.on('pointerdown', () => {
            nivel = 1;
            Musicamenu.stop(); 
            this.scene.start('nivel1')
        })
        var menuPrincipal2 =  this.add.image(628, 273, 'botonReiniciar1').setScale(.5)
        var menuPrincipal22 =  this.add.image(628, 273, 'botonReiniciar2').setScale(.5).setVisible(false)
       // var menuPrincipal2 =  this.add.image(628, 273, 'botonReiniciar2').setScale(.5)
        var lvl2 = this.add.text(580, 250, txtnivel + ' 2', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl22 = this.add.text(580, 250, txtnivel + ' 2', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl22.setVisible(false);
        lvl2.on('pointerdown', () => {
            nivel = 2;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        
        var menuPrincipal3 =  this.add.image(628, 324, 'botonReiniciar1').setScale(.5)
        var menuPrincipal32 =  this.add.image(628, 324, 'botonReiniciar2').setScale(.5).setVisible(false)
        var lvl3 = this.add.text(580, 300, txtnivel + ' 3', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl32 = this.add.text(580, 300, txtnivel + ' 3', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl32.setVisible(false);
        lvl3.on('pointerdown', () => {
            nivel = 3;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var menuPrincipal4 =  this.add.image(628, 374, 'botonReiniciar1').setScale(.5)
        var menuPrincipal42 =  this.add.image(628, 374, 'botonReiniciar2').setScale(.5).setVisible(false)
        var lvl4 = this.add.text(580, 350, txtnivel + ' 4', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl42 = this.add.text(580, 350, txtnivel + ' 4', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl42.setVisible(false);
        lvl4.on('pointerdown', () => {
            nivel = 4;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var menuPrincipal5 =  this.add.image(628, 425, 'botonReiniciar1').setScale(.5)
        var menuPrincipal52 =  this.add.image(628, 425, 'botonReiniciar2').setScale(.5).setVisible(false)
        var lvl5 = this.add.text(580, 400, txtnivel + ' 5', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        var lvl52 = this.add.text(580, 400, txtnivel + ' 5', { fontSize: '38px', fill: '#6F0C49', fontFamily: 'Boogaloo'})
        lvl52.setVisible(false);
        lvl5.on('pointerdown', () => {
            nivel = 5;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        lvl1.on('pointerover', function (c) {
          menuPrincipal12.setVisible(true)
          });
          lvl1.on('pointerout', function (c){
            menuPrincipal12.setVisible(false)
        });
          lvl2.on('pointerover', function (d) {
            menuPrincipal22.setVisible(true)
        });
          lvl2.on('pointerout', function (d) {
            menuPrincipal22.setVisible(false)
          });
          lvl3.on('pointerover', function (f) {
            menuPrincipal32.setVisible(true)
         });
          lvl3.on('pointerout', function (f) {
            menuPrincipal32.setVisible(false)
          });
          lvl4.on('pointerover', function (f) {
            menuPrincipal42.setVisible(true)
           });
           lvl4.on('pointerout', function (f) {
            menuPrincipal42.setVisible(false)
            });
        lvl5.on('pointerover', function (f) {
          menuPrincipal52.setVisible(true)
            });
        lvl5.on('pointerout', function (f) {
          menuPrincipal52.setVisible(false)
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
            menuPrincipal1.destroy();
            menuPrincipal12.destroy();
            menuPrincipal2.destroy();
            menuPrincipal22.destroy();
            menuPrincipal3.destroy();
            menuPrincipal32.destroy();
            menuPrincipal4.destroy();
            menuPrincipal42.destroy();
            menuPrincipal5.destroy();
            menuPrincipal52.destroy();
        })
        back.on('pointerover', function (g) {
            back2.setVisible(true)
       });
          back.on('pointerout', function (g){
           back2.setVisible(false)
       });

       
    }
}