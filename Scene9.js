class Scene9 extends Phaser.Scene {
    constructor() {
      super('info');
    }
    
    create(){
        this.add.image(650, 350, 'informacion').setScale(0.7)
        var menuPrincipal =  this.add.image(730, 650, 'botonMenuPrincipal2').setScale(.7)
            var menuPrincipal2 =  this.add.image(730, 650, 'botonMenuPrincipal1').setScale(.7)
            menuPrincipal2.setVisible(false)
                menuPrincipal.setInteractive()
                menuPrincipal.on('pointerdown', () => {
                    if(efsonido === true ){
                        BotonSonido = this.sound.add("botonsonido" , {loop: false});
                        BotonSonido.play();}
                    this.scene.stop('info');
                    this.scene.start('menu');
                    Musicamenu.stop();

        } );   
        menuPrincipal.on('pointerover', function (e) {
            menuPrincipal2.setVisible(true)
       });
       menuPrincipal.on('pointerout', function (e){
           menuPrincipal2.setVisible(false)
       });
    }
}
