class Scene4 extends Phaser.Scene {
    constructor() {
      super('creditos');
    }

create() {

    this.add.image(650, 350, 'creditos').setScale(.7)

    var menuPrincipal =  this.add.image(862, 620, 'botonMenuPrincipal2').setScale(.7)
    var menuPrincipal2 =  this.add.image(862, 620, 'botonMenuPrincipal1').setScale(.7)
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


      menuPrincipal.on('pointerover', function (g) {
        menuPrincipal2.setVisible(true)
   });
      menuPrincipal.on('pointerout', function (g){
       menuPrincipal2.setVisible(false)
   });
}




}