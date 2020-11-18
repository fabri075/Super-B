class Scene11 extends Phaser.Scene {
    constructor() {
      super('selector');
    }
    
    create(){
        
        var menuselector = this.add.image(640, 320, 'fondoPausa').setScale(.9).setInteractive({cursor: 'context-menu'});
        var textselector = this.add.text(480, 140, 'SELECCIONE EL NIVEL', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'})
        var lvl1 = this.add.text(580, 200, 'Nivel 1', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        lvl1.on('pointerdown', () => {
            nivel = 1;
            Musicamenu.stop(); 
            this.scene.start('nivel1')
        })
        var lvl2 = this.add.text(580, 250, 'Nivel 2', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        lvl2.on('pointerdown', () => {
            nivel = 2;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var lvl3 = this.add.text(580, 300, 'Nivel 3', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        lvl3.on('pointerdown', () => {
            nivel = 3;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var lvl4 = this.add.text(580, 350, 'Nivel 4', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        lvl4.on('pointerdown', () => {
            nivel = 4;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })
        var lvl5 = this.add.text(580, 400, 'Nivel 5', { fontSize: '38px', fill: '#000000', fontFamily: 'Boogaloo'}).setInteractive({ cursor: 'pointer' })
        lvl5.on('pointerdown', () => {
            nivel = 5;
            Musicamenu.stop();
            this.scene.start('nivel1')
        })

        var back = this.add.image(380, 440, 'atras1').setScale(.4).setInteractive({cursor: 'pointer'});
        back.on('pointerdown', () => {
            menuselector.destroy();
            textselector.destroy();
            lvl1.destroy();
            lvl2.destroy();
            lvl3.destroy();
            lvl4.destroy();
            lvl5.destroy();
            back.destroy();
            this.scene.resume('menu');
        })
    }
}