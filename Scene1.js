class Scene1 extends Phaser.Scene {
    constructor() {
      super('logo');
    }

    preload ()
    {
      // Cargamos los assets
      
      // Scene1
      this.load.image('logo', 'assets/Logo.png');
      this.load.image('menu', 'assets/Menu.png');
      

         
    }

    create() {
        

      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      var logo = this.add.image(600, 400, 'logo').setScale(0.8)
      
      
      // () =>
      // funciones flecha
      
      logo.setInteractive()
      logo.on('pointerdown', () => {  
                                      this.scene.start('menu');
                                    } );

      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }
}