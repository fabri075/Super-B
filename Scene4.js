class Scene4 extends Phaser.Scene {
    constructor() {
      super('creditos');
    }

create() {

    
    var txtmenu;
    var textomenu;
    if (idioma === 1)
    {
      this.add.image(650, 350, 'creditos').setScale(.7)
      txtmenu = 'MENÚ PRINCIPAL'
    };
    if (idioma === 2)
    {
      this.add.image(650, 350, 'creditos2').setScale(.7)
      txtmenu = '    MAIN MENU'
    }
    if (idioma === 3)
    {
      this.add.image(650, 350, 'creditos').setScale(.7)
      txtmenu = 'MENU PRINCIPAL'
    }
    var menuPrincipal =  this.add.image(862, 620, 'botonReiniciar1').setScale(.7)
    var menuPrincipal2 =  this.add.image(862, 620, 'botonReiniciar2').setScale(.7)
    textomenu = this.add.text(775, 603, txtmenu, {fontSize: '28px', fill: '#FFFFFF', fontFamily: 'Boogaloo'});
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