class Scene9 extends Phaser.Scene {
    constructor() {
      super('info');
    }
    
    create(){
        
        var txtmenui;
        if (idioma === 1)
        {
            this.add.image(650, 350, 'informacion').setScale(0.7)
          txtmenui = 'MENÚ PRINCIPAL'
        };
        if (idioma === 2)
        {
            this.add.image(650, 350, 'informacion2').setScale(0.7)
          txtmenui = '    MAIN MENU'
        }
        if (idioma === 3)
        {
            this.add.image(650, 350, 'informacion3').setScale(0.7)
          txtmenui = 'MENU PRINCIPAL'
        }    
        var menuPrincipal =  this.add.image(730, 675, 'botonReiniciar1').setScale(.7)
        var menuPrincipal2 =  this.add.image(730, 675, 'botonReiniciar2').setScale(.7)
        this.add.text(640, 658, txtmenui, {fontSize: '28px', fill: '#6F0C49', fontFamily: 'Boogaloo'});
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
