

class prueba extends Phaser.Scene {
    constructor() {
      super('prueba');
    } 


    create(){

        this.add.image(640, 360, 'escenario').setScale(0.67, 0.67);
        
        

        

        mesas = this.physics.add.group({
            key: 'mesa',
            repeat: 2,
            setXY: { x: 300, y: 400, stepX: 300 },
            setScale: (.5)
        });

        //// aleatoridad de variables
        buena = colores[Phaser.Math.Between(0,1)];
        if(buena===colores[0]){
         buena2 = colores[1];
        }else{buena2 = colores[0]};
        buena3 = colores[Phaser.Math.Between(0,1)];
        mala = colores[Phaser.Math.Between(0,1)];
        if(mala===colores[0]){
            mala2 = colores[1];
           }else{mala2 = colores[0]};
        mala3 = colores[Phaser.Math.Between(0,1)];
        
       ////Creacion de hamburguesas 
        var  hamburgesas = this.physics.add.staticGroup();
        
        ham1 = hamburgesas.create(530, 390, 'hamb').setScale(1).setTint(buena).setInteractive({ cursor: 'pointer' })
        ham2 = hamburgesas.create(600, 390, 'hamb').setScale(1).setTint(buena2).setInteractive({ cursor: 'pointer' })
        ham3 = hamburgesas.create(670, 390, 'hamb').setScale(1).setTint(buena3).setInteractive({ cursor: 'pointer' })
        ham4 = hamburgesas.create(1030, 395, 'hamb').setScale(1).setTint(mala).setInteractive({ cursor: 'pointer' })
        ham5 = hamburgesas.create(1100, 395, 'hamb').setScale(1).setTint(mala2).setInteractive({ cursor: 'pointer' })
        ham6 = hamburgesas.create(1170, 395, 'hamb').setScale(1).setTint(mala3).setInteractive({ cursor: 'pointer' })

           


        }
    update(){

    }


}