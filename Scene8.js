class Scene8 extends Phaser.Scene {
    constructor() {
      super('cinematica');
    }
    
    create(){
        Musicacinematica= this.sound.add("cinematica", {loop: true});
        Musicacinematica.play();
        arte1 = this.add.image(635, 350, 'parte1').setScale(0.68);
        BotonSonido = this.sound.add("botonsonido" , {loop: false});
        hoja = this.sound.add('pasarhoja' , {loop: false});

        if( MusicNivel === true){
            Musicacinematica.play();
        }    else if (MusicNivel === false){
            Musicacinematica.stop();
        }

        this.input.on('pointerdown', () => {
            if (arte1 != null)
            {
                if(efsonido === true){
                hoja.play();
                }
                arte1.destroy();
                arte1 = null;
                arte2 = this.add.image(637, 355, 'parte2').setScale(0.67)
            }
            else {
                if(arte2 != null)
                {
                    if(efsonido === true){
                        hoja.play();
                        }
                    arte2.destroy();
                    arte2 = null;
                    arte3 = this.add.image(635, 350, 'parte3').setScale(0.68)
                }
                else
                {
                    if(efsonido === true){
                        hoja.play();
                        }
                    
                    this.scene.start('tutorial');
                }
            }       
            } );
    }
}
